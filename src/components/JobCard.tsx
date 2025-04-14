
import { Clock, MapPin, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

import { SlBriefcase } from "react-icons/sl";

export interface JobProps {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: "Remote" | "Onsite" | "Hybrid";
  category: string;
  jobType: "Freelance" | "Contract" | "Internship" | "Full-time";
  salary: string;
  postedAt: string;
  featured?: boolean;
}

const JobCard = ({ 
  id, 
  title, 
  company, 
  logo, 
  location, 
  type, 
  category, 
  jobType, 
  salary, 
  postedAt,
  featured 
}: JobProps) => {
  return (
    <div className={`card bg-white rounded-xl p-6 ${featured ? 'border-l-4 border-l-[#1743aa]' : ''}`}>
      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="h-full w-full object-cover" />
          ) : (
            <SlBriefcase className="h-6 w-6 text-gray-400" />
          )}
        </div>

        {/* Job Details */}
        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg font-medium text-careersng-navy">
              <Link to={`/jobs/${id}`} className="hover:text-careersng-purple">
                {title}
              </Link>
            </h3>
            <div className=" md:mt-0">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-careersng-purple/10 text-careersng-purple">
                {category}
              </span>
              
            </div>
          </div>

          <p className="text-sm text-gray-600">{company}</p>

          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <div className="flex items-center">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={16} className="mr-1" />
              <span>{type}</span>
              
            </div>
            <div className="flex items-center">
              <span>{salary}</span>
            </div>
          </div>
            <div className="flex text-gray-500 items-center">
              <Clock size={16} className="mr-1" />
              <span>{postedAt}</span>
            </div>

          <div className="flex items-center  justify-between">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            {jobType}
        </span>

            <Link 
              to={`/jobs/${id}`} 
              className="text-sm font-medium text-careersng-purple hover:text-careersng-purple-dark"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
