import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from 'sonner';
import Jobs from "./pages/Jobs";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Blog from "./pages/Blog";


function App() {
  
  
  const main = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
  
          <Route path="*" element={<ErrorPage />} />
  
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />/
          <Route path="/login" element={<SignIn />} />
        </Route>
        )
      )
      return (
        <>
        <Toaster position="top-right" expand={false} richColors />
    <RouterProvider router={main} />
    </>
  );
}

export default App;
