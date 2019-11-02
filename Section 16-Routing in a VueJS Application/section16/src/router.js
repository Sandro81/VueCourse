import User from "@/components/user/User";
import Home from "@/components/Home";
import UserStart from "@/components/user/UserStart";
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import Header from "@/components/Header";


export const routes = [
    {path: '', name: 'home', components: {
            default: Home,
            'header-top': Header,
        }},
    {path: '/user', children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                console.log('inside route setup');
                next();
                }},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'},
        ], components: {
            default: User,
            'header-top': Header,
            //'header-bottom': Header,
        }},
    {path: 'redirect-me', redirect: '/user'},
    {path: '*', redirect: '/'}

];
