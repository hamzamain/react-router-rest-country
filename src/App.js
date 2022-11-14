import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
