
import { useState } from "react";
import { Link } from "react-router-dom";


import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
//   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle authentication
    // For now, we'll just show a toast
    // if (email && password) {
    //   toast({
    //     title: "Login Successful",
    //     description: "Welcome back to CareersNG!",
    //   });
    // } else {
    //   toast({
    //     title: "Login Failed",
    //     description: "Please fill in all required fields.",
    //     variant: "destructive",
    //   });
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-10">

        <div className="container">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-careersng-navy">
                Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Or{" "}
                <Link to="/register" className="font-medium text-['purple']">
                    create a new account
                </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 relative rounded-md ">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CiMail size={18} className="text-gray-400" />
                        </div>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-careersng-purple focus:border-careersng-purple"
                        placeholder="your@email.com"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="mt-1 relative rounded-md ">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <GoLock size={18} className="text-gray-400" />
                        </div>
                        <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-careersng-purple focus:border-careersng-purple"
                        placeholder="•••••••••••"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            {showPassword ? (
                            <VscEyeClosed size={18} aria-hidden="true" />
                            ) : (
                            <VscEye size={18} aria-hidden="true" />
                            )}
                        </button>
                        </div>
                    </div>
                    </div>

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
                        <Link to="/forgot-password" className="font-medium text-careersng-purple hover:text-careersng-purple-dark">
                        Forgot your password?
                        </Link>
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        className="w-full flex text-white text-sm justify-center py-3 bg-[#ee774f] hover:bg-careersng-purple-dark"
                    >
                        Sign in
                    </button>
                    </div>
                </form>

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
                    <div>
                        <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                        <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.545,10.239V14.459H18.614C18.275,16.044 16.961,18.15 14.223,18.15C11.005,18.15 8.386,15.583 8.386,12.368C8.386,9.153 10.997,6.586 14.223,6.586C16.035,6.586 17.309,7.391 18.057,8.109L21.051,5.219C19.017,3.332 16.803,2.25 14.223,2.25C8.639,2.25 4.136,6.737 4.136,12.368C4.136,18 8.639,22.5 14.223,22.5C19.704,22.5 24,18.25 24,12.368C24,11.616 23.918,10.934 23.803,10.239H12.545Z" fill="#4285F4"/>
                            <path d="M4.136,12.368C4.136,11.552 4.261,10.758 4.482,10.008L1.156,7.471C0.424,8.899 0,10.607 0,12.368C0,14.13 0.424,15.838 1.156,17.265L4.482,14.712C4.261,13.979 4.136,13.184 4.136,12.368Z" fill="#FBBC05"/>
                            <path d="M14.223,22.5C16.803,22.5 19.017,21.476 20.822,19.647L17.786,16.969C17.091,17.434 15.821,18.15 14.223,18.15C11.491,18.15 9.174,16.052 8.39,13.342L5.166,15.83C6.808,19.67 10.318,22.5 14.223,22.5Z" fill="#34A853"/>
                            <path d="M12.545,10.239V14.459H18.614C18.275,16.044 16.961,18.15 14.223,18.15C11.005,18.15 8.386,15.583 8.386,12.368C8.386,9.153 10.997,6.586 14.223,6.586C16.035,6.586 17.309,7.391 18.057,8.109L21.051,5.219C19.017,3.332 16.803,2.25 14.223,2.25C8.639,2.25 4.136,6.737 4.136,12.368C4.136,18 8.639,22.5 14.223,22.5C19.704,22.5 24,18.25 24,12.368C24,11.616 23.918,10.934 23.803,10.239H12.545Z" fill="#EA4335"/>
                        </svg>
                        Google
                        </button>
                    </div>

                    <div>
                        <button
                        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                        <svg className="h-5 w-5 mr-2 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
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
