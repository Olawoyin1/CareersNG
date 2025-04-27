import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PostJob = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    company: '',
    location: '',
    type: 'Remote',
    category: '',
    jobType: 'Full-time',
    salary: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Job title is required'),
    company: Yup.string().required('Company name is required'),
    location: Yup.string().required('Location is required'),
    type: Yup.string().required('Work type is required'),
    category: Yup.string().required('Category is required'),
    jobType: Yup.string().required('Job type is required'),
    salary: Yup.string().required('Salary range is required'),
    description: Yup.string().required('Description is required'),
  });

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
    navigate('/jobs');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar can go here if needed */}
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-8 w-8 text-purple-600" />
                <h1 className="text-2xl font-bold text-gray-800">Post a New Job</h1>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    {/* Job Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title
                      </label>
                      <Field
                        name="title"
                        type="text"
                        placeholder="e.g. Senior React Developer"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <Field
                        name="company"
                        type="text"
                        placeholder="e.g. TechCorp Nigeria"
                        className="w-full border rounded-md p-2"
                      />
                      <ErrorMessage name="company" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* Location and Work Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <Field
                          name="location"
                          type="text"
                          placeholder="e.g. Lagos, Nigeria"
                          className="w-full border rounded-md p-2"
                        />
                        <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Work Type
                        </label>
                        <Field as="select" name="type" className="w-full border rounded-md p-2">
                          <option value="Remote">Remote</option>
                          <option value="Onsite">Onsite</option>
                          <option value="Hybrid">Hybrid</option>
                        </Field>
                        <ErrorMessage name="type" component="div" className="text-red-500 text-sm" />
                      </div>
                    </div>

                    {/* Category and Job Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <Field
                          name="category"
                          type="text"
                          placeholder="e.g. Programming"
                          className="w-full border rounded-md p-2"
                        />
                        <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Employment Type
                        </label>
                        <Field as="select" name="jobType" className="w-full border rounded-md p-2">
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Freelance">Freelance</option>
                          <option value="Internship">Internship</option>
                        </Field>
                        <ErrorMessage name="jobType" component="div" className="text-red-500 text-sm" />
                      </div>
                    </div>

                    {/* Salary */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Salary Range
                      </label>
                      <Field
                        name="salary"
                        type="text"
                        placeholder="e.g. ₦500,000 - ₦800,000"
                        className="w-full border rounded-md p-2"
                      />
                      <p className="text-xs text-gray-500 mt-1">Please provide salary in ₦ (Naira)</p>
                      <ErrorMessage name="salary" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* Job Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Description
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        placeholder="Describe the role, requirements, and responsibilities..."
                        className="w-full border rounded-md p-2 min-h-[200px]"
                      />
                      <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
                      >
                        Post Job
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
      </main>

      {/* Footer can go here if needed */}
    </div>
  );
};

export default PostJob;
