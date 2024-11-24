import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./Pages/home/Home";

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route element={<Rootlayout/>}>
          <Route path="/home" element={<Home/>}/>
       </Route>
    )
  );

  return (<RouterProvider router={router}/>)
}

export default App
