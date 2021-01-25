import {lazy} from 'react';


const Home = lazy(() => import("../Containers/Home/Home"));
const About = lazy(() => import("../Containers/About/About"));
const Contact = lazy(() => import("../Containers/Contact/Contact"));


const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about+us',
        exact: true,
        component: About
    },
    {
        path: '/contact+us',
        exact: true,
        component: Contact
    },
]


export default routes;