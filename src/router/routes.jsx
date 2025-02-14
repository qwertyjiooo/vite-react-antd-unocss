
import loginRouter from "./modules/login";
import layoutRoutes from './modules/layout';

const routes = [
    ...loginRouter,
    /**
     * layouts 布局
     */
    ...layoutRoutes,

];

export default routes;