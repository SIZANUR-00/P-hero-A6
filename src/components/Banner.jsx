const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Supercharge Your{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Workflow
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
              Unlock productivity with AI-powered design, marketing, and development tools. Join 50,000+ creators worldwide.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition">
                Get Started Free
              </button>
              <button className="px-8 py-3 border-2 border-indigo-300 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://placehold.co/500x450/6366f1/ffffff?text=Digital+Tools" 
              alt="Digital Tools"
              className="rounded-2xl shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
