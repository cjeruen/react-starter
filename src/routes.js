
import App from './jsx/App';
import Home from './jsx/Home/Home';

import Login from './jsx/Auth/Login';
import Register from './jsx/Auth/Register';
import NotFound from './jsx/Common/NotFound';

const login = {path: 'login', component: Login};
const register = {path: 'register', component: Register};
const notFound = {path: '*', component: NotFound};

const authMiddleware = (nextState, replace, callback) => {

    // const excludePath = ['', '/', '/login', '/register'];
    // const pathname = nextState.location.pathname;

    // if( excludePath.indexOf(pathname) < 0 ) {
    //     console.log('需要验证');
    //     replace('/login');
    // }else {
    //     console.log(pathname);
    // }
    callback();
}


const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    onEnter: authMiddleware,
    childRoutes: [
        login,
        register,
        notFound
    ]
};

export default routes;
