import { FaUsers, FaTools, FaStar, FaGlobe } from 'react-icons/fa';

const stats = [
  { icon: FaUsers, value: '50K+', label: 'Active Users', change: '+22%', color: 'text-indigo-600' },
  { icon: FaTools, value: '120+', label: 'Premium Tools', change: '+15', color: 'text-purple-600' },
  { icon: FaStar, value: '98%', label: 'Satisfaction', change: '4.8★', color: 'text-yellow-500' },
  { icon: FaGlobe, value: '85+', label: 'Countries', change: 'Worldwide', color: 'text-green-500' },
];

const Stats = () => {
  return (
    <div className="bg-white py-12 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-md transition">
              <stat.icon className={`${stat.color} text-4xl mx-auto mb-3`} />
              <div className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
