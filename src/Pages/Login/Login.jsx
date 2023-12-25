import { useForm } from "react-hook-form";
import Footer from "../SharedComponents/Footer/Footer";
import Navbar from "../SharedComponents/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/taskmanagement/all";

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };




  // handle Google Login
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((res) => {
      res && navigate(location?.state ? location.state : '/')
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    })
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Task Nest || Login</title>
      </Helmet>
      <Navbar />
      <div className="py-32 flex justify-center items-center bg-[url('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-10">Login</h2>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col justify-center relative gap-4 md:w-[40vw] px-12 py-8 border-4 rounded-md border-[#dbebfd]"
          >
            <div className="absolute top-0 left-0 h-full w-full glass"></div>
            <label className="text-left text-xl font-bold text-gray-900 z-10">
              Email:
            </label>
            <input
              className="bg-transparent border-2 text-gray-800 border-[#2ecc71] py-2 px-2 mb-6 z-10"
              {...register("email", {
                required: true,
              })}
              type="email"
              name="email"
              id=""
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is required</p>
            )}
            <label className="z-10 text-left text-xl font-bold text-gray-900">
              Password:
            </label>
            <input
              className="bg-transparent text-gray-800 z-10 border-2 border-[#2ecc71] py-2 px-2 mb-8"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              type="password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}

            <p className="text-gray-800 z-10 font-bold">
              Do not have an account?
              <span className="underline hover:text-[#2ecc71]">
                <Link to="/register">Register</Link>
              </span>
            </p>

            <input
              className="bg-[#dbebfd] z-10 text-lg font-bold py-3 uppercase rounded-md cursor-pointer hover:bg-gray-800 hover:text-[#dbebfd]"
              type="submit"
              value="Login"
            />

            <button onClick={handleGoogleSignIn} className="text-xl z-10 text-center flex justify-center py-3 hover:bg-slate-200 bg-blue-800 text-orange-500">
              <FaGoogle/>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
