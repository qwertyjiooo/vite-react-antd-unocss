
import { useRoutes } from "react-router-dom";

import routes from "./routes";

const Router = () => {
    const routerTab = useRoutes(routes);
    return <div>{routerTab}</div>;
}

export default Router;