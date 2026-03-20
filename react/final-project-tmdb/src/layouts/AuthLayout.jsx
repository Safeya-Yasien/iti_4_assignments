import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-white shadow-xl">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please enter your details to continue.
            </p>
          </div>

          <div className="mt-8">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Authentication Background"
        />
        <div className="absolute inset-0 bg-blue-600/20 backdrop-blur-[2px]" />
        <div className="absolute bottom-12 left-12 text-white">
          <h3 className="text-4xl font-bold">Build something great.</h3>
          <p className="mt-2 text-lg opacity-90">Clean code, perfect pixels.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
