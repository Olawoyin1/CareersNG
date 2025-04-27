// import "./App.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import ErrorPage from "./pages/ErrorPage";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Toaster } from 'sonner';
// import Jobs from "./pages/Jobs";
// import SharedLayout from "./components/SharedLayout";
// import Home from "./pages/Home";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";
// import Blog from "./pages/Blog";
// import JobDetails from "./pages/JobDetails";
// import BlogPost from "./pages/BlogPost";
// import PostJob from "./pages/PostJob";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminJobs from "./pages/Admin/AdminJobs";
// import AdminBlogs from "./pages/Admin/AdminBlogs";


// function App() {
  
  
//   const main = createBrowserRouter(
//       createRoutesFromElements(
//         <Route path="/" element={<SharedLayout />}>
//           <Route index element={<Home/>} />
  
//           <Route path="*" element={<ErrorPage />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//           <Route path="/admin/jobs" element={<AdminJobs />} />
//           <Route path="/admin/blogs" element={<AdminBlogs />} />
  
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/post_job" element={<PostJob />} />
//           <Route path="/job_details" element={<JobDetails />} />

//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:id" element={<BlogPost />} />

//           <Route path="/register" element={<Register />} />/
//           <Route path="/login" element={<SignIn />} />
//         </Route>
//         )
//       )
//       return (
//         <>
//         <Toaster position="top-right" expand={false} richColors />
//     <RouterProvider router={main} />
//     </>
//   );
// }

// export default App;




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
import JobDetails from "./pages/JobDetails";
import BlogPost from "./pages/BlogPost";
import PostJob from "./pages/PostJob";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminJobs from "./pages/Admin/AdminJobs";
import AdminBlogs from "./pages/Admin/AdminBlogs";
import Categories from "./pages/Categories";
import HowItWorks from "./pages/HowItWorks";

function App() {
  const main = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public/Shared Routes */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="categories" element={<Categories />} />
          <Route path="how_it_works" element={<HowItWorks />} />
          <Route path="post_job" element={<PostJob />} />
          <Route path="job_details" element={<JobDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<SignIn />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        {/* Admin Routes (NO Header, NO Footer) */}
        <Route path="/admin" element={<AdminDashboard />} />
          
        <Route path="/admin/jobs" element={<AdminJobs />} />
          
        <Route path="/admin/blogs" element={<AdminBlogs />} />
        
      </>
    )
  );

  return (
    <>
      <Toaster position="top-right" expand={false} richColors />
      <RouterProvider router={main} />
    </>
  );
}

export default App;
