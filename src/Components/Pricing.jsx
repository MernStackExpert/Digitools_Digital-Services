import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#1F2937] mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[#6B7280] text-[16px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[24px] p-6 md:p-8 transition-all duration-300 flex flex-col ${
                plan.isPopular
                  ? "bg-[#7C3AED] text-white shadow-xl scale-100 z-10"
                  : "bg-white text-[#1F2937] border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] px-4 py-1 rounded-full text-[12px] font-bold shadow-sm whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[24px] font-bold mb-1">{plan.name}</h3>
                <p
                  className={`text-[14px] ${plan.isPopular ? "text-white/80" : "text-[#6B7280]"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-[36px] font-bold">${plan.price}</span>
                <span
                  className={`text-[16px] ${plan.isPopular ? "text-white/70" : "text-[#9CA3AF]"}`}
                >
                  /Month
                </span>
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className={`w-4 h-4 shrink-0 ${plan.isPopular ? "text-white" : "text-[#10B981]"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-[14px] ${plan.isPopular ? "text-white/90" : "text-[#4B5563]"}`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-full text-[15px] font-bold transition-all active:scale-[0.98] mt-auto ${
                  plan.isPopular
                    ? "bg-white text-[#7C3AED] hover:bg-gray-100"
                    : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
