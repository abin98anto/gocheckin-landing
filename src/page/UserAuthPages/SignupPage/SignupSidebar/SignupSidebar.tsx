const SignupSidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white flex-col justify-center px-12 xl:px-16">
      <div className="max-w-md">
        {/* Geometric Logo */}
        <div className="mb-12">
          <div className="w-16 h-16 border-2 border-white relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 border border-white rotate-45"></div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight">
          Join Our Partner Network
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed">
          Sign up today to manage your property, track bookings, and provide
          exceptional guest experiences. Let's grow your business together!
        </p>
      </div>
    </div>
  );
};

export default SignupSidebar;
