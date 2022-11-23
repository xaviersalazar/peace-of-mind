import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiAlertCircle, FiXCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../context/Auth";
import { isEmpty } from "lodash";
import { Spinner } from "../shared";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, signUp, signIn } = useAuth();

  const isLogin = pathname === "/auth/login";

  const [form, setForm] = useState(initialState);
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

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    const { name, email, password } = form;

    setIsLoggingIn(true);

    if (isLogin) {
      if (isEmpty(email) || isEmpty(password)) {
        setError({
          msg: (
            <div className="text-sm font-light">
              <span className="block">Please fill out all fields</span>
            </div>
          ),
          type: "warning",
        });

        setIsLoggingIn(false);
        return;
      }

      await signIn({
        email,
        password,
      }).then((res) => {
        if (res.data?.user) {
          navigate("/dashboard");
        }

        setError({
          type: "error",
          msg: (
            <div className="text-sm font-light">
              <span className="block">Invalid login credentials</span>
              <span className="block">Please try again</span>
            </div>
          ),
          type: "error",
        });

        setIsLoggingIn(false);
      });
    } else {
      if (isEmpty(name) || isEmpty(email) || isEmpty(password)) {
        setError({
          msg: (
            <div className="text-sm font-light">
              <span className="block">Please fill out all fields</span>
            </div>
          ),
          type: "warning",
        });

        setIsLoggingIn(false);
        return;
      }

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
          navigate("/dashboard");
        }

        setError({
          type: "error",
          msg: (
            <div className="text-sm font-light">
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

  const { name, email, password } = form;

  return (
    <div className="relative top-0 px-10 pt-0 pb-10 lg:px-20 xl:px-[7rem] h-[100vh] overflow-hidden">
      <AnimatePresence>
        {error && (
          <motion.div
            className={`alert alert-${error.type} shadow-lg absolute left-44 top-6 z-[100] w-full items-start md:left-[30rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]`}
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              {error.type === "warning" ? <FiAlertCircle /> : <FiXCircle />}
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
        <div
          className="mt-4 mx-auto bg-slate-50 rounded-2xl p-8 md:w-3/4 lg:w-7/12 xl:w-6/12"
          id="login-form"
        >
          <h1 className="text-5xl font-bold text-center mb-8">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          {!isLogin && (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-light">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input w-full h-10 font-light rounded-lg focus:outline-primary"
                value={name}
                onChange={onChange}
              />
            </div>
          )}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-light">Email address</span>
            </label>
            <input
              name="email"
              type="text"
              className="input w-full h-10 font-light rounded-lg focus:outline-primary"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-light">Password</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full h-10 font-light rounded-lg focus:outline-primary"
                value={password}
                onChange={onChange}
              />
              {showPassword ? (
                <button onClick={() => setShowPassword(!showPassword)}>
                  <FiEye className="absolute top-2 right-4 h-6" />
                </button>
              ) : (
                <button onClick={() => setShowPassword(!showPassword)}>
                  <FiEyeOff className="absolute top-2 right-4 h-6" />
                </button>
              )}
            </div>
          </div>
          <motion.button
            className="bg-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-light"
            whileHover={{
              backgroundColor: "#f8fafc",
              boxShadow:
                "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
              color: "#10FFCB",
              transition: { duration: 0.3 },
            }}
            whileFocus={{
              backgroundColor: "#f8fafc",
              boxShadow:
                "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
              color: "#10FFCB",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.9,
            }}
            disabled={isLoggingIn}
            onClick={(e) => {
              onSubmit();
              e.currentTarget.blur();
            }}
          >
            {isLoggingIn && <Spinner size="4" color="text-slate-400" />}
            Submit
          </motion.button>
          {isLogin ? (
            <p className="text-sm font-light mt-12">
              Don't have a login?{" "}
              <Link className="text-blue-300" to="/auth/sign-up">
                Sign up here
              </Link>
            </p>
          ) : (
            <p className="text-sm font-light mt-12">
              Already have a login?{" "}
              <Link className="text-blue-300" to="/auth/login">
                Login here
              </Link>
            </p>
          )}
        </div>
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
