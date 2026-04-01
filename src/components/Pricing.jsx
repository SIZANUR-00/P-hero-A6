import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    price: 19,
    period: 'month',
    features: ['5 team members', 'Core tool access', 'Email support', 'Basic analytics'],
    popular: false,
  },
  {
    name: 'Professional',
    price: 49,
    period: 'month',
    features: ['Unlimited members', 'All pro tools', 'Priority support', 'API access', 'Advanced analytics'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SSO & SAML', 'Dedicated manager', 'Custom integrations', 'SLA guarantee', '24/7 support'],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Flexible Plans for Every Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the perfect plan that fits your team's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border-2 ${plan.popular ? 'border-indigo-500 shadow-xl' : 'border-gray-200'} bg-white hover:shadow-xl transition`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-2xl rounded-tr-2xl">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold text-indigo-600">${plan.price}</span>
                      <span className="text-gray-500">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <FaCheck className="text-indigo-500 text-sm" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-xl font-semibold transition ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'border-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50'
                }`}>
                  {plan.popular ? 'Start Free Trial' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
