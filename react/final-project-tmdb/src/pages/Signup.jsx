import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { signupSchema } from "@/schemas/signupSchema";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Account Created:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          {...register("username")}
          className={`mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm ${
            errors.username ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.username && (
          <p className="mt-1 text-xs text-red-600">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email")}
          className={`mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className={`mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm
          </label>
          <input
            type="password"
            {...register("confirmPassword")}
            className={`mt-1 block w-full rounded-md border py-2 px-3 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="cursor-pointer  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        Create Account
      </button>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-main hover:text-blue-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Signup;
