import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Providers from "./services/providers";
import { routes } from "./routes";
// import VConsole from "vconsole";

const router = createBrowserRouter(routes);
function App() {
  // const vConsole = new VConsole();
  // console.log("vConsole", vConsole);

  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
