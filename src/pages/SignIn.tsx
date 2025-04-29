import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { toast } from "sonner";
import Loading from "../components/Loading";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../components/UserContext";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()



 



  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useContext must be used within a UserProvider");
  }

  const { setUser, user } = context;


  useEffect(() => {
    if (user) {
      // Redirect authenticated users to the dashboard or home page
      navigate('/');
      toast("Welcome back to CareermatterNG — Your next opportunity awaits! 🚀")
    }
  }, [user, navigate]);

  

  const decodeToken = (token: string) => {
    try {
      return jwtDecode<any>(token); // Replace 'any' with your token payload type if you have it
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
    
      try {
        console.log('Logging in with:', values);
    
        // Step 1: Login
        const response = await axios.post("https://careermattersng.onrender.com/login/", values);
        const { access, refresh } = response.data;
        console.log("Tokens:", { access, refresh });
    
        // Step 2: Store tokens
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
    
        // Step 3: Decode token
        const userInfo = decodeToken(access);
        console.log("Decoded userInfo:", userInfo);
    
        if (!userInfo || !userInfo.user_id) {
          throw new Error("Invalid token structure. Cannot get user ID.");
        }
    
        const userId = userInfo.user_id;
    
        // Step 4: Fetch user details
        const userDetailsResponse = await axios.get(`https://careermattersng.onrender.com/users/${userId}/`);
        console.log("User details:", userDetailsResponse.data);
    
        setUser(userDetailsResponse.data);
    
        // Step 5: Navigate
        navigate("/");
    
      } catch (error: any) {
        console.log("Login error:", error);
    
        if (error.response) {
          const errorMessage = error.response.data.detail || "Invalid credentials. Please try again.";
          toast.error(errorMessage);
        } else {
          toast.error("Network error. Please try again later.");
        }
    
      } finally {
        setSubmitting(false);
        setLoading(false);
      }
    }
    
    
  });

  return (
    <div className="py-4 bg-gray-50 flex flex-col justify-center">
      {
        loading && <Loading fullPage text="Logging you in..." />
      }
      <div className="container">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-2xl font-bold tracking-tight text-careersng-navy">
          Log in to get started
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link to="/register" className="font-medium text-['purple']">
              create a new account
            </Link>
          </p>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Email */}
              <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-700 text-xs mt-1">{formik.errors.email}</div>
                    ) : null}

                </div>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CiMail size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...formik.getFieldProps('email')}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-md placeholder-gray-400 focus:outline-none ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-700 focus:border-red-800'
                        : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                    }`}
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                    </label>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-700 text-xs mt-1">{formik.errors.password}</div>
                    ) : null}

                </div>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GoLock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    {...formik.getFieldProps('password')}
                    className={`block w-full pl-10 pr-10 py-3 border rounded-md placeholder-gray-400 focus:outline-none ${
                      formik.touched.password && formik.errors.password
                        ? 'border-red-700 focus:border-red-800'
                        : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                    }`}
                    placeholder="•••••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <VscEyeClosed size={18} />
                      ) : (
                        <VscEye size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember me and Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-careersng-purple focus:ring-careersng-purple border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-careersng-purple hover:text-careersng-purple-dark"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full flex text-white text-sm justify-center rounded-md py-3 bg-[#ee774f] hover:bg-careersng-purple-dark disabled:opacity-50"
                >
                  {/* {formik.isSubmitting ? "Signing in..." : "Sign in"} */}
                  {formik.isSubmitting ? "Signing In..." : "Sign in"}
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {/* Google */}
                <div>
                  <button
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    {/* Google SVG */}
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.545,10.239V14.459H18.614C18.275,16.044 16.961,18.15 14.223,18.15C11.005,18.15 8.386,15.583 8.386,12.368C8.386,9.153 10.997,6.586 14.223,6.586C16.035,6.586 17.309,7.391 18.057,8.109L21.051,5.219C19.017,3.332 16.803,2.25 14.223,2.25C8.639,2.25 4.136,6.737 4.136,12.368C4.136,18 8.639,22.5 14.223,22.5C19.704,22.5 24,18.25 24,12.368C24,11.616 23.918,10.934 23.803,10.239H12.545Z" fill="#4285F4"/>
                            <path d="M4.136,12.368C4.136,11.552 4.261,10.758 4.482,10.008L1.156,7.471C0.424,8.899 0,10.607 0,12.368C0,14.13 0.424,15.838 1.156,17.265L4.482,14.712C4.261,13.979 4.136,13.184 4.136,12.368Z" fill="#FBBC05"/>
                            <path d="M14.223,22.5C16.803,22.5 19.017,21.476 20.822,19.647L17.786,16.969C17.091,17.434 15.821,18.15 14.223,18.15C11.491,18.15 9.174,16.052 8.39,13.342L5.166,15.83C6.808,19.67 10.318,22.5 14.223,22.5Z" fill="#34A853"/>
                            <path d="M12.545,10.239V14.459H18.614C18.275,16.044 16.961,18.15 14.223,18.15C11.005,18.15 8.386,15.583 8.386,12.368C8.386,9.153 10.997,6.586 14.223,6.586C16.035,6.586 17.309,7.391 18.057,8.109L21.051,5.219C19.017,3.332 16.803,2.25 14.223,2.25C8.639,2.25 4.136,6.737 4.136,12.368C4.136,18 8.639,22.5 14.223,22.5C19.704,22.5 24,18.25 24,12.368C24,11.616 23.918,10.934 23.803,10.239H12.545Z" fill="#EA4335"/>
                        </svg>
                    Google
                  </button>
                </div>

                {/* LinkedIn */}
                <div>
                  <button
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    {/* LinkedIn SVG */}
                    <svg className="h-5 w-5 mr-2 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
