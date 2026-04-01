import React from 'react';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const Steps = () => {
  const stepsData = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: packageIcon
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: rocketIcon
    }
  ];

  return (
    <section className="w-full py-20 bg-[#F9FAFB]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#1F2937] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#6B7280] text-[18px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsData.map((step) => (
            <div key={step.id} className="bg-white p-10 rounded-[24px] border border-gray-100 shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-all">
              
              <span className="absolute top-6 right-6 bg-[#7C3AED] text-white text-[12px] font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {step.id}
              </span>

              <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <img src={step.icon} alt={step.title} className="w-12 h-12 object-contain" />
              </div>

              <h3 className="text-[24px] font-bold text-[#1F2937] mb-4">
                {step.title}
              </h3>
              
              <p className="text-[#6B7280] text-[16px] leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;