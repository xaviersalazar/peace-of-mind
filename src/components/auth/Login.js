import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FiEye,
  FiEyeOff,
  FiAlertCircle,
  FiXCircle,
  FiAtSign,
  FiUser,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../context/Auth";
import { Spinner } from "../shared";

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signUp, signIn } = useAuth();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isLogin = pathname === "/auth/login";

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  const onSubmit = async () => {
    const { name, email, password } = getValues();
    setIsLoggingIn(true);

    if (isLogin) {
      await signIn({
        email,
        password,
      }).then((res) => {
        if (res.data?.user) {
          reset();
          navigate("/admin");
        }

        setError({
          msg: (
            <div className="text-sm font-bold md:text-base">
              <span className="block">Invalid login credentials</span>
              <span className="block">Please try again</span>
            </div>
          ),
          type: "error",
        });

        setIsLoggingIn(false);
      });
    } else {
      const signUpData = {
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      };

      await signUp(signUpData).then((res) => {
        if (res.data?.user) {
          reset();
          navigate("/admin");
        }

        setError({
          msg: (
            <div className="text-sm font-bold md:text-base">
              <span className="block">Invalid login credentials</span>
              <span className="block">Please try again</span>
            </div>
          ),
          type: "error",
        });

        setIsLoggingIn(false);
      });
    }
  };

  return (
    <div className="relative top-0 px-10 pt-0 pb-10 lg:px-20 xl:px-[7rem] h-[100vh] overflow-hidden">
      <AnimatePresence>
        {error && (
          <motion.div
            className={`alert alert-${error.type} opacity-[90%] shadow-lg fixed left-44 top-6 z-[100] w-full items-start md:left-[30rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]`}
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              {error.type === "warning" ? (
                <FiAlertCircle className="text-sm md:text-lg" />
              ) : (
                <FiXCircle className="text-sm md:text-lg" />
              )}
              {error.msg}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="z-50 relative mt-12">
        <img
          className="w-[128px] mx-auto mb-12"
          src={`${process.env.PUBLIC_URL}/logo-black.png`}
          alt="background"
        />
        <form
          id="login-form"
          className="mt-4 mx-auto bg-slate-50 rounded-2xl p-8 md:w-3/4 lg:w-7/12 xl:w-6/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-5xl font-bold text-center mb-8">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          {!isLogin && (
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  className="input w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                  })}
                />
                <FiUser className="absolute right-4 top-3 text-slate-300" />
              </div>
              {errors?.name && (
                <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text font-bold">Email address</span>
            </label>
            <div className="relative">
              <input
                name="email"
                type="text"
                className="input w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <FiAtSign className="absolute right-4 top-3 text-slate-300" />
            </div>
            {errors?.email && (
              <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                })}
              />
              {showPassword ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEye className="absolute top-2 right-4 h-6 text-slate-300" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FiEyeOff className="absolute top-2 right-4 h-6 text-slate-300" />
                </button>
              )}
            </div>
            {errors?.password && (
              <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
                {errors.password.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            className="bg-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-bold disabled:bg-slate-100 disabled:text-slate-300"
            whileHover={
              isValid && {
                backgroundColor: "#f8fafc",
                boxShadow:
                  "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
                color: "#10FFCB",
                transition: { duration: 0.3 },
              }
            }
            whileFocus={
              isValid && {
                backgroundColor: "#f8fafc",
                boxShadow:
                  "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
                color: "#10FFCB",
                transition: { duration: 0.3 },
              }
            }
            whileTap={
              isValid && {
                scale: 0.9,
              }
            }
            disabled={!isValid || isLoggingIn}
          >
            {isLoggingIn && <Spinner size="4" color="text-slate-400" />}
            Submit
          </motion.button>
        </form>
      </div>
      <img
        className="md:hidden w-[100vw] absolute left-0 bottom-0 z-0"
        src={`${process.env.PUBLIC_URL}/wave-bg.svg`}
        alt="background"
      />
      <img
        className="hidden md:block xl:hidden w-[100vw] absolute left-0 bottom-0"
        src={`${process.env.PUBLIC_URL}/wave-bg-md.svg`}
        alt="background"
      />
      <img
        className="hidden xl:block w-[100vw] absolute left-0 bottom-0"
        src={`${process.env.PUBLIC_URL}/wave-bg-lg.svg`}
        alt="background"
      />
    </div>
  );
};

export default Login;
