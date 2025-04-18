
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  icon: ReactNode;
  jobCount: number;
  slug: string;
  color?: string;
}

const CategoryCard = ({ title, icon, jobCount, slug, }: CategoryCardProps) => {
  return (
    <Link 
      to={`/categories/${slug}`} 
      className="block group"
    >
      <div className=" h-full bg-gray-400/4 transition-all duration-300 group-hover:translate-y-[-5px]">
        <div className="p-6 flex flex-col ">
          <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-careersng-purple`}>
            {icon}
          </div>
          <h3 className="text-lg font-medium text-careersng-navy mb-1">{title}</h3>
          <p className="text-sm text-gray-500">
            {jobCount} {jobCount === 1 ? 'job' : 'jobs'} available
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
