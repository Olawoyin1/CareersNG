
import { Search, FilePenLine, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find the Right Job",
      description: "Browse through hundreds of remote, freelance, and internship opportunities across Nigeria.",
      icon: <Search size={28} />,
      color: "bg-careersng-purple/10",
      iconColor: "text-careersng-purple",
    },
    {
      id: 2,
      title: "Submit Your Proposal",
      description: "Create a compelling application showcasing your skills and experience to stand out.",
      icon: <FilePenLine size={28} />,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      title: "Get Hired & Earn",
      description: "Connect with clients, complete projects, and receive payments securely through our platform.",
      icon: <CreditCard size={28} />,
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="p">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-careersng-navy">How CareersNG Works</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Your journey to finding the perfect job opportunity in Nigeria is simple and straightforward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="rounded-xl p-6 bg-white text-center relative">
            
            <div className={`w-16 h-16 shadow border-0 rounded-full flex items-center justify-center mx-auto mb-4 `}>
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-careersng-navy mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
