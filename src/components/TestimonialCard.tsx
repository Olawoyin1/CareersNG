
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCard = ({ quote, name, role, company, avatarUrl }: TestimonialProps) => {
  return (
    <div className="card p-6 h-full bg-green-200/9 rounded-xl flex flex-col">
      <div className="mb-4 text-careersng-purple/20">
        <Quote size={36} />
      </div>
      <p className="text-careersng-gray-dark flex-1 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="h-12 min-w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-careersng-purple text-white font-medium">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-careersng-navy">{name}</h4>
          <p className="text-sm text-gray-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
