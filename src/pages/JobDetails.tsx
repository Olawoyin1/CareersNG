
import { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Calendar, 
//   CheckCircle,
  Share2,
  Bookmark,
  Flag,
  Building,
  Globe,
//   Users,
  Send
} from "lucide-react";
import JobCard from "../components/JobCard";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import JobCard from "@/components/JobCard";
// import { useToast } from "@/hooks/use-toast";

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
    <p>TechNova Solutions is looking for a Senior React Developer to join our growing team. The ideal candidate will have extensive experience in building high-performance, scalable web applications using React and its ecosystem.</p>

    <p>As a Senior React Developer, you will be responsible for developing and implementing user interface components using React.js best practices. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.</p>

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
//   const { id } = useParams<{ id: string }>();
//   const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
//   const [proposal, setProposal] = useState("");
//   const [rate, setRate] = useState("");
  const [isSaved, setIsSaved] = useState(false);
//   const { toast } = useToast();

  // In a real app, you would fetch the job details based on the ID
  const job = jobData;

//   const handleApply = (e: React.FormEvent) => {
//     e.preventDefault();
    
    // toast({
    //   title: "Proposal Submitted",
    //   description: "Your proposal has been successfully submitted. You will be notified if the employer is interested.",
    // });
    
    // setIsApplyDialogOpen(false);
//   };

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
    
    // toast({
    //   title: isSaved ? "Job Removed" : "Job Saved",
    //   description: isSaved 
    //     ? "This job has been removed from your saved list." 
    //     : "This job has been saved to your profile for later viewing.",
    // });
  };

  const handleShare = () => {
    // In a real app, this would open a sharing interface
    navigator.clipboard.writeText(window.location.href);
    
    // toast({
    //   title: "Link Copied",
    //   description: "The job link has been copied to your clipboard.",
    // });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      
      <main className="flex-1 bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto ">
          <div className="mb-6">
            <Link to="/jobs" className="inline-flex items-center text-careersng-purple hover:text-careersng-purple-dark">
              <ArrowLeft size={16} className="mr-2" />
              Back to all jobs
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 h-16 w-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mr-4">
                    {job.logo ? (
                      <img src={job.logo} alt={`${job.company} logo`} className="h-full w-full object-cover" />
                    ) : (
                      <Building className="h-8 w-8 text-gray-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold text-careersng-navy mb-1">
                      {job.title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        <span>Posted {job.postedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button 
                    className="bg-red-700 p-2 text-white text-sm px-4 rounded hover:bg-careersng-purple-dark"
                    // onClick={() => setIsApplyDialogOpen(true)}
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
              
              {/* Job Description */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold  mb-4">Job Description</h2>
                <div className="prose text-gray-600 max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
              
              {/* Skills Required */}
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-xl font-semibold text-careersng-navy mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-careersng-purple/10 text-careersng-purple rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Application CTA */}
              <div className="flex items-center justify-center flex-col rounded-xl shadow p-6 text-center">
                <h2 className="text-xl font-semibold text-careersng-navy mb-2">Ready to Apply?</h2>
                <p className="text-gray-600 mb-4">Submit your proposal before the deadline: {job.applicationDeadline}</p>
                <button 
                  className="bg-red-900 text-white p-2 px-4 rounded text-sm flex items-center border-1 hover:bg-careersng-purple-dark"
                //   onClick={() => setIsApplyDialogOpen(true)}
                >
                  Submit Your Proposal {" "}
                  <Send size={16} className="" />
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Info */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-careersng-navy mb-4">Company Information</h2>
                
                <div className="space-y-4">
                  <p className="text-gray-600">{job.companyInfo.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <Building size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Company Size</span>
                        <span className="font-medium">{job.companyInfo.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Website</span>
                        <a 
                          href={job.companyInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-careersng-purple hover:text-careersng-purple-dark"
                        >
                          {job.companyInfo.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Location</span>
                        <span className="font-medium">{job.companyInfo.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar size={16} className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="text-sm text-gray-500 block">Founded</span>
                        <span className="font-medium">{job.companyInfo.founded}</span>
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
                    <Calendar size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Application Deadline</span>
                      <span className="font-medium">{job.applicationDeadline}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Briefcase size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Job Type</span>
                      <span className="font-medium">{job.jobType}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Location</span>
                      <span className="font-medium">{job.location} ({job.type})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Salary Range</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={16} className="mr-2 mt-1 text-gray-500" />
                    <div>
                      <span className="text-sm text-gray-500 block">Posted</span>
                      <span className="font-medium">{job.postedAt}</span>
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
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-careersng-navy mb-6">Similar Jobs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      {/* Apply Dialog */}
      {/* <Dialog open={isApplyDialogOpen} onOpenChange={setIsApplyDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Apply for {job.title}</DialogTitle>
            <DialogDescription>
              Provide your proposal and expected salary to apply for this position at {job.company}.
            </DialogDescription>
          </DialogHeader> */}
          
          {/* <form onSubmit={handleApply} className="space-y-6 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Proposal
              </label>
              <textarea
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-careersng-purple focus:ring-careersng-purple min-h-[200px]"
                placeholder="Introduce yourself and explain why you're a good fit for this role..."
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
                required
              />
              <p className="mt-1 text-sm text-gray-500">
                Be specific about your skills and experience relevant to this job.
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Expected Salary/Rate
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-careersng-purple focus:ring-careersng-purple"
                placeholder="e.g., ₦500,000/month or ₦5,000/hour"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Additional Documents (Optional)
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-careersng-purple hover:text-careersng-purple-dark focus-within:outline-none"
                >
                  <div className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-careersng-purple focus:outline-none">
                    <span className="flex flex-col items-center space-y-2">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="font-medium text-gray-600">
                        Drop files to Attach, or
                        <span className="text-careersng-purple underline"> browse</span>
                      </span>
                      <span className="text-xs text-gray-500">
                        (PDF, DOCX, up to 5MB)
                      </span>
                    </span>
                  </div>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
              </div>
            </div>
            
            <div>
              <button
                type="button"
                onClick={() => setIsApplyDialogOpen(false)}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-careersng-purple hover:bg-careersng-purple-dark"
              >
                <Send size={16} className="mr-2" />
                Submit Application
              </button>
            </div>
          </form>
        </div> */}
      
     </div>
  );
};

export default JobDetails;
