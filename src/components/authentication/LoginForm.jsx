import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
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
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                  placeholder="Enter your Email"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="px-10 py-3 w-88 rounded-lg border-1 border-gray-300 mb-4 outline-none "
                  placeholder="Enter your Password"
                />
              )}
            />
            <button
              type="submit"
              className="px-10  py-2 w-80 rounded-full border-1 border-gray-300 outline-none  bg-orange-400 hover:bg-orange-500 text-xl font-bold text-white mb-3"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center text-sm">
          Don&apos;t have an account?
          <Link to="/register" className="underline underline-offset-4 ">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
