const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
];

const Stats = () => {
  return (
    <div className="bg-[#7c3aed] py-8"> {/* Deep purple background */}
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="px-8 sm:px-16 text-center text-white">
              <div className="text-3xl sm:text-4xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
