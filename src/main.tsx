import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/router.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<Provider store={store}><RouterProvider router={routes}/></Provider>);
