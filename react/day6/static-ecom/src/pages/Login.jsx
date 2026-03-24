import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuthStore from "@/store/useAuthStore";
import { loginSchema } from "@/schemas/loginSchema";
import { useNavigate } from "react-router";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Validated Data:", data);
    const fakeToken = "fake-jwt-token-123";
    login(fakeToken);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-1">
          <input
            type="email"
            {...register("email")}
            className={`block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            type="password"
            {...register("password")}
            className={`block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="cursor-pointer flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Sign in
      </button>
    </form>
  );
};

export default Login;
