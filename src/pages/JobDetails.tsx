import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Briefcase, DollarSign, Flag, Building, Globe, Send, Bookmark, Share2 } from "lucide-react";
import JobCard from "../components/JobCard";
import { CiCalendar } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";

// Mock job data (in a real app, you would fetch this based on the ID)
const jobData = {
  id: "1",
  title: "Senior React Developer",
  company: "TechNova Solutions",
  logo: "",
  location: "Lagos",
  type: "Remote",
  category: "Programming",
  jobType: "Freelance",
  salary: "₦500,000 - ₦800,000",
  postedAt: "2 days ago",
  description: `
    <h4>TechNova Solutions is looking for a Senior React Developer to join our growing team. The ideal candidate will have extensive experience in building high-performance, scalable web applications using React and its ecosystem.</h4>

    <h4>As a Senior React Developer, you will be responsible for developing and implementing user interface components using React.js best practices. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.</h4>

    <h4>Responsibilities:</h4>
    <ul>
      <li>Develop and implement highly responsive user interface components using React concepts</li>
      <li>Develop and maintain reusable UI components using state-of-the-art technologies</li>
      <li>Optimize components for maximum performance across a vast array of web-capable devices and browsers</li>
      <li>Coordinate with the rest of the team working on different layers of the infrastructure</li>
      <li>Provide technical leadership and mentor junior developers</li>
    </ul>

    <h4>Requirements:</h4>
    <ul>
      <li>4+ years of experience in frontend development</li>
      <li>3+ years of experience with React.js and its core principles</li>
      <li>Strong proficiency in JavaScript, HTML, and CSS</li>
      <li>Experience with popular React workflows (such as Redux or Context API)</li>
      <li>Experience with RESTful APIs and modern web technologies</li>
      <li>Familiarity with TypeScript is a plus</li>
      <li>Excellent problem-solving skills and attention to detail</li>
      <li>Good understanding of cross-browser compatibility issues and ways to work around them</li>
    </ul>

    <h4>Benefits:</h4>
    <ul>
      <li>Competitive salary package</li>
      <li>Flexible working hours</li>
      <li>Fully remote work environment</li>
      <li>Professional development opportunities</li>
      <li>Health insurance benefits</li>
    </ul>
  `,
  companyInfo: {
    name: "TechNova Solutions",
    description: "TechNova Solutions is a leading tech company in Nigeria, specializing in web and mobile application development, UI/UX design, and digital transformation. We work with clients across various sectors including fintech, e-commerce, and healthcare.",
    size: "50-100 employees",
    website: "https://technovasolutions.ng",
    location: "Lagos, Nigeria",
    founded: "2015"
  },
  skills: ["React.js", "JavaScript", "TypeScript", "Redux", "HTML5", "CSS3", "REST APIs", "Git"],
  applicationDeadline: "30 May 2025"
};

// Similar jobs data
const similarJobs = [
  {
    id: "2",
    title: "Frontend Developer",
    company: "FinTech Innovations",
    logo: "",
    location: "Abuja",
    type: "Remote" as const,
    category: "Programming",
    jobType: "Contract" as const,
    salary: "₦400,000 - ₦600,000",
    postedAt: "1 week ago"
  },
  {
    id: "3",
    title: "React Native Developer",
    company: "MobileTech",
    logo: "",
    location: "Lagos",
    type: "Hybrid" as const,
    category: "Programming",
    jobType: "Full-time" as const,
    salary: "₦600,000 - ₦900,000",
    postedAt: "3 days ago"
  },
  {
    id: "4",
    title: "UI/UX Developer",
    company: "Creative Solutions",
    logo: "",
    location: "Port Harcourt",
    type: "Remote" as const,
    category: "Design",
    jobType: "Freelance" as const,
    salary: "₦300,000 - ₦500,000",
    postedAt: "5 days ago"
  }
];

const JobDetails = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSaveJob = () => setIsSaved(!isSaved);
  const handleShare = () => navigator.clipboard.writeText(window.location.href);

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 py-8 ">
      {/* Back link */}
      <div className="container mx-auto pb-6 block">
        <Link to="/jobs" className="flex items-center  hover:underline">
          <ArrowLeft size={16} className="mr-2" />
          Back to Jobs
        </Link>
      </div>

      {/* Main content */}
      <div className="container m mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mr-4">
                    {jobData.logo ? (
                      <img src={jobData.logo} alt={`${jobData.company} logo`} className="h-full w-full object-cover" />
                    ) : (
                      <Building className="h-8 w-8 text-gray-400" />
                    )}
                  </div>

                  <div>
                    <h1 className="text-2xl font-bold text-careersng-navy mb-1">
                      {jobData.title}
                    </h1>
                    <p className="text-lg text-gray-600">{jobData.company}</p>
                  </div>
                  
                </div>
                  <div className="flex-1">
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{jobData.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        <span>{jobData.type}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        <span>{jobData.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <TfiTimer size={16} className="mr-1" />
                        <span>Posted {jobData.postedAt}</span>
                      </div>
                    </div>
                  </div>
                
                <div className="flex mt-4 flex-wrap gap-3">
                  <button 
                    className="bg-[#ee774f] p-2 text-white text-sm px-4 rounded hover:bg-careersng-purple-dark"
                    
                    onClick={() => setShowModal(true)}
                  >
                    Apply Now
                  </button>
                  
                  <button 
                    className={isSaved ? "bg-blue-900 p-2 flex items-center text-white text-sm px-4 rounded" : "flex items-center border border-gray-500  text-sm px-4 p-2 rounded"}
                    onClick={handleSaveJob}
                  >
                    <Bookmark size={16} className="mr-2" fill={isSaved ? "currentColor" : "none"} />
                    {isSaved ? "Saved" : "Save Job"}
                  </button>
                  
                  <button  onClick={handleShare} className="flex items-center border border-gray-500 rounded p-2">
                    <Share2 size={16} className="mr-2" />
                    Share
                  </button>
                </div>
          </div>

          {/* Job description */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: jobData.description }} />
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {jobData.skills.map((skill, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>



          {/* Application CTA */}
          <div className="flex items-center bg-white justify-center flex-col rounded-xl shadow p-6 text-center">
                <h2 className="text-xl font-semibold text-careersng-navy mb-2">Ready to Apply?</h2>
                <p className="text-gray-600 mb-4">Submit your proposal before the deadline: {jobData.applicationDeadline}</p>
                <button 
                  className="bg-[#ee774f] text-white p-2 px-4 rounded text-sm flex items-center border-1 hover:bg-careersng-purple-dark"
                  onClick={() => setShowModal(true)}
                >
                  Submit Your Proposal 
                  <Send size={16} className="ml-2" />
                </button>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-careersng-navy mb-4">Company Information</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">{jobData.companyInfo.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Company Size</span>
                        <span className="font-medium">{jobData.companyInfo.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Website</span>
                        <a 
                          href={jobData.companyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-careersng-purple hover:text-careersng-purple-dark"
                        >
                          {jobData.companyInfo.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Location</span>
                        <span className="font-medium">{jobData.companyInfo.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CiCalendar size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Founded</span>
                        <span className="font-medium">{jobData.companyInfo.founded}</span>
                      </div>
                    </div>
                  </div>
                </div>
          </div>


            {/* Job Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-careersng-navy mb-4">Job Overview</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CiCalendar size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Application Deadline</span>
                      <span className="font-medium">{jobData.applicationDeadline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Briefcase size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Job Type</span>
                      <span className="font-medium">{jobData.jobType}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Location</span>
                      <span className="font-medium">{jobData.location} ({jobData.type})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Salary Range</span>
                      <span className="font-medium">{jobData.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <TfiTimer size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Posted</span>
                      <span className="font-medium">{jobData.postedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Report This Job */}
              <div className="text-center p-4">
                <button className="text-gray-500 hover:text-red-500 flex items-center justify-center mx-auto">
                  <Flag size={16} className="mr-2" />
                  Report this job
                </button>
              </div>


        </div>

      </div>
        {/* Similar Jobs Section */}
        <section className="mt-12 ">
          <div className="container">

            <h2 className="text-2xl font-bold text-careersng-navy mb-6">Similar Jobs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
              </div>
          </section>

      {/* Apply Modal */}
      {showModal && (
        <div className="fixed p-3 inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-4 py-7 sm:p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Submit Your Application</h2>

            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Cover Letter</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#ee774f]"
                  placeholder="Write your cover letter..."
                />
              </div>

            


<div>
      <label className="block mb-1 text-sm font-medium">Attach File</label>
      <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#ee774f] transition">
      <IoCloudUploadOutline size={20} />
        {fileName ? (
          <p className="text-sm text-gray-700">{fileName}</p>
        ) : (
          <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
        )}
        <input
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>


              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#ee774f] text-white rounded hover:bg-blue-900 text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
