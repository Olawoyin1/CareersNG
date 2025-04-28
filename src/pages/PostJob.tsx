import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { SlBriefcase } from "react-icons/sl";

// List of Nigerian States (you can expand this list if necessary)
const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", 
  "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", 
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const PostJob = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      company: '',
      location: '',
      category: '',
      salary: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Job title is required'),
      company: Yup.string().required('Company name is required'),
      location: Yup.string().required('Location is required'),
      category: Yup.string().required('Category is required'),
      salary: Yup.string().required('Salary range is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/jobs');
    },
  });

  return (
    <div className="flex flex-col">
      <main className="flex-1  bg-gray-50">
      
          <div className="container ">
            <div className="bg-gray-50 flex flex-col lg:flex-row ">
              {/* Left Image Section */}
              <div className="hidden lg:flex flex-1 shrink-0">
                <img src="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNsaWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Job Post" className="w-full h-full object-cover " />
              </div>

              {/* Right Form Section */}
              <div className="flex-1 flex flex-col items-center  justify-center py-7 lg:p-7">

                <div className=" max-w-4xl w-full  p-4 bg-white rounded-xl">

                    <div className="flex  items-center gap-2  ">
                      <SlBriefcase size={20} className="text-blue-900" />
                      <h1 className="text-xl font-bold text-blue-900">Post A New Job</h1>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">Fill out the details below to post a new job listing on our platform.</p>

                    <form onSubmit={formik.handleSubmit} className="space-y-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Job Title */}
                        <div>

                          <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                            {formik.touched.title && formik.errors.title && (
                              <div className="text-red-700 text-xs">{formik.errors.title}</div>
                            )}
                          </div>

                          <input
                            name="title"
                            type="text"
                            placeholder="e.g. Senior React Developer"
                            className={`block w-full p-2 border text-base rounded-md placeholder-gray-400 focus:outline-none ${
                              formik.touched.title && formik.errors.title
                                ? 'border-red-700 focus:border-red-800'
                                : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                            }`}
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>

                        {/* Company Name */}
                        <div>
                          
                        <div className="flex items-center justify-between">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            {formik.touched.company && formik.errors.company && (
                              <div className="text-red-700 text-xs">{formik.errors.company}</div>
                            )}
                        </div>

                          <input
                            name="company"
                            type="text"
                            placeholder="e.g. TechCorp Nigeria"
                            className={`block w-full p-2 border text-base rounded-md placeholder-gray-400 focus:outline-none ${
                              formik.touched.company && formik.errors.company
                                ? 'border-red-700 focus:border-red-800'
                                : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                            }`}
                            value={formik.values.company}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </div>


                    </div>



                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                        {/* Location */}
                        <div>
                          
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          {formik.touched.location && formik.errors.location && (
                            <div className="text-red-700 text-xs">{formik.errors.location}</div>
                          )}
                        </div>

                          <select
                            name="location"
                            className={`block w-full p-2 border text-base rounded-md placeholder-gray-400 focus:outline-none ${
                              formik.touched.location && formik.errors.location
                                ? 'border-red-700 focus:border-red-800'
                                : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                            }`}
                            value={formik.values.location}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="">Select State</option>
                            {nigerianStates.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>

                        {/* Category */}
                        <div>
                          
                        <div className="flex items-center justify-between">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                          {formik.touched.category && formik.errors.category && (
                            <div className="text-red-700 text-xs">{formik.errors.category}</div>
                          )}
                        </div>

                          <select
                            name="category"
                            className={`block w-full p-2 border text-base rounded-md placeholder-gray-400 focus:outline-none ${
                              formik.touched.category && formik.errors.category
                                ? 'border-red-700 focus:border-red-800'
                                : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                            }`}
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="">Select Category</option>
                            {nigerianStates.map((state) => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>


                    </div>



                      {/* Salary */}
                      <div>
                        
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
                        {formik.touched.salary && formik.errors.salary && (
                          <div className="text-red-700 text-xs">{formik.errors.salary}</div>
                        )}
                      </div>

                        <input
                          name="salary"
                          type="text"
                          placeholder="e.g. ₦500,000 - ₦800,000"
                          className={`block w-full p-2 border text-base rounded-md placeholder-gray-400 focus:outline-none ${
                            formik.touched.salary && formik.errors.salary
                              ? 'border-red-700 focus:border-red-800'
                              : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                          }`}
                          value={formik.values.salary}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <p className="text-xs text-gray-500 mt-1">Please provide salary in ₦ (Naira)</p>
                      </div>

                      {/* Job Description */}
                      <div>
                        
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                        {formik.touched.description && formik.errors.description && (
                          <div className="text-red-700 text-xs">{formik.errors.description}</div>
                        )}
                      </div>

                        <textarea
                          name="description"
                          placeholder="Describe the role, requirements, and responsibilities..."
                          className={`block w-full min-h-[200px] p-2 border text-sm rounded-md placeholder-gray-400 focus:outline-none ${
                            formik.touched.description && formik.errors.description
                              ? 'border-red-700 focus:border-red-800'
                              : 'border-gray-300 focus:ring-careersng-purple focus:border-careersng-purple'
                          }`}
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>

                      {/* Submit Buttons */}
                      <div className="flex justify-end gap-4">
                        <button
                          type="button"
                          onClick={() => navigate(-1)}
                          className="border border-gray-300 text-sm px-4 py-2 rounded-md hover:bg-gray-100"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={formik.isSubmitting}
                          className="bg-[#ee774f] text-white text-sm px-6 py-2 rounded-md hover:bg-blue-900"
                        >
                          Post Job
                        </button>
                      </div>
                    </form>
                </div>

              </div>
            </div>
          </div>
        
      </main>
    </div>
  );
};

export default PostJob;
