import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: 0,
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    popular: false,
    cta: 'Get Started Free'
  },
  {
    name: 'Pro',
    tagline: 'Best for professionals',
    price: 29,
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    popular: true,
    cta: 'Start Pro Trial'
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: 99,
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    popular: false,
    cta: 'Contact Sales'
  },
];

const Pricing = () => {
  return (
    <div className="font-sans">
      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  plan.popular 
                  ? 'bg-[#7030f4] text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-gray-900 shadow-sm border border-gray-100 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-400'}`}>{plan.tagline}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-lg ${plan.popular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheck className={plan.popular ? 'text-white' : 'text-purple-600'} size={14} />
                      <span className="text-sm opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-2xl font-bold transition-transform active:scale-95 ${
                  plan.popular 
                  ? 'bg-white text-[#7030f4] hover:bg-gray-100' 
                  : 'bg-[#7030f4] text-white hover:opacity-90'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#7030f4] py-24 text-center text-white px-4">
        <h2 className="text-4xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-purple-100 mb-10 max-w-xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            className="bg-white text-[#7030f4] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            onClick={() => onTabChange && onTabChange('product')}
          >
            Explore Products
          </button>
          <button
            className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
            onClick={() => onTabChange && onTabChange('pricing')}
          >
            View Pricing
          </button>
        </div>
        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>
    </div>
  );
};

export default Pricing;
