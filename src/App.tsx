import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Providers from "./services/providers";
import { routes } from "./routes";

const router = createBrowserRouter(routes);
function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
