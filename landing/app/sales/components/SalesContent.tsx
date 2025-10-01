import CompanyLogos from "./CompanyLogos";
import G2Badges from "./G2Badges";
import SalesForm from "./SalesForm";


export default function SalesContent() {
  return (
    <div className="mt-16 block md:flex gap-16 mb-36">
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="text-4xl md:text-7xl font-extrabold">
          Explore AI Transformation
        </div>
        
        <div className="max-w-none md:max-w-[30rem] leading-8 mt-4 text-lg md:text-xl font-light text-gray-900">
          See how Activepieces can help with transforming your organization into an AI-first company. 
          AI is developing quickly and we can help you keep up.
        </div>

        {/* Desktop Only - Company Logos and Badges */}
        <div className="max-md:hidden">
          <CompanyLogos />
          <G2Badges />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 max-md:pt-10 justify-center flex flex-col">
        <SalesForm />
      </div>
    </div>
  );
}
