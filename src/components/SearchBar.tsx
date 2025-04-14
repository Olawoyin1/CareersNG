
import { useState } from "react";
import { SlBriefcase } from "react-icons/sl";
import { GoChevronDown } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocationSearching } from "react-icons/md";
interface SearchBarProps {
  onSearch?: (query: {
    keyword: string;
    location: string;
    jobType: string;
  }) => void;
  className?: string;
}

const jobTypes = ['All job types', 'Freelance', 'Contract', 'Internship', 'Remote']


const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  
  const [selected, setSelected] = useState('All job types')
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, _setJobType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        keyword,
        location,
        jobType,
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`w-fullp-4 sm:p-5 ${className}`}
    >
      <div className="grid bg-white/9 backdrop-blur-md  shadow-lg p-4 grid-cols-1 md:grid-cols-3 gap-4">
        {/* Keyword Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MdOutlineLocationSearching size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Job title or keyword"
            className="pl-10 w-full placeholder:text-gray-400 text-white border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none py-3 transition-all duration-200"
          />
        </div>

        {/* Location Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <CiLocationOn size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (city or remote)"
            className="pl-10 w-full placeholder:text-gray-400 text-white border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none py-3 transition-all duration-200"
          />
        </div>


        {/* Job Type Select */}
        {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SlBriefcase size={20} className="text-gray-400" />
          </div>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="pl-10 w-full h-full placeholder:text-gray-400 text-grey-400 border-0 border-b border-gray-200 focus:border-blue-500 focus:outline-none py-3 transition-all duration-200 cursor-pointer "
          >
            <option value="" className="text-black">All job types</option>
            <option value="Freelance" className="text-black">Freelance</option>
            <option value="Contract" className="text-black">Contract</option>
            <option value="Internship" className="text-black">Internship</option>
            <option value="Remote" className="text-black">Remote</option>
          </select>
        </div> */}


<div className="relative w-full max-w-sm">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SlBriefcase size={20} className="text-gray-400" />
          </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-10 text-left  text-grey-700 border-b border-gray-200 py-3 px-4  flex items-center justify-between focus:outline-none focus:border-blue-500 transition-all duration-200"
      >
        {selected}
        <GoChevronDown className="w-5 h-5 text-gray-400" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {jobTypes.map((type, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(type)
                setIsOpen(false)
              }}
              className="cursor-pointer px-4 py-2 text-sm text-gray-900 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
        
      </div>
      <div className="mt-4 md:mt-6">
        <button 
          type="submit" 
          className="w-full bg-white md:max-w-[200px] text-gray-800 bg-careersng-purple hover:bg-careersng-purple-dark py-3 font-medium"
        >
          Search Jobs
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
