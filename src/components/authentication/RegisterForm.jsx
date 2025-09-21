import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="card bg-gray-100 w-96 shadow-md ">
      <figure className="">
        <img
          src="https://media.istockphoto.com/id/2184476168/photo/ramen-with-egg-japanese-asian-food-soup-noodle-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=msQM1Xuc4DsqeBI11BTPfiL7ukP3-HmzBVLDaTOYuvo="
          alt="food-logo"
          className="rounded-full w-28"
        />
      </figure>
      <div className="card-body items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col items-center gap-2">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Name"
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your Email"
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your Password"
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your confirmPassword"
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                />
              )}
            />
            <button
              type="submit"
              className="px-10  py-2 w-80 rounded-full border-1 border-gray-300 outline-none  bg-orange-400 hover:bg-orange-500 text-xl font-bold text-white mb-3"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          have an account?
          <Link to="/login" className="underline underline-offset-4 ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
