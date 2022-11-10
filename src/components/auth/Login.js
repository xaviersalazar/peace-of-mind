import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiAlertTriangle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../context/Auth";
import { isEmpty } from "lodash";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signUp, signIn } = useAuth();

  const isLogin = pathname === "/auth/login";

  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
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

    setError(null);

    if (isLogin) {
      if (isEmpty(email) || isEmpty(password)) {
        setError({ msg: "Please fill out all fields", type: "warning" });
        return;
      }

      const { data, error } = await signIn({
        email,
        password,
      });

      if (data) navigate("/dashboard");
      if (error)
        setError({
          msg: "Something happened! Please try again",
          type: "error",
        });
    } else {
      if (isEmpty(name) || isEmpty(email) || isEmpty(password)) {
        setError({ msg: "Please fill out all fields", type: "warning" });
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

      const { data } = await signUp(signUpData);

      if (data) navigate("/dashboard");
      else
        setError({
          msg: "Something happened! Please try again",
          type: "error",
        });
    }
  };

  const { name, email, password } = form;

  return (
    <div className="relative top-0 px-10 pt-0 pb-10 lg:px-20 xl:px-[7rem] h-[100vh] overflow-hidden">
      <AnimatePresence>
        {error && (
          <motion.div
            className={`alert alert-warning shadow-lg absolute left-48 top-6 z-[100] w-full items-start md:left-[32rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]`}
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              <FiAlertTriangle />
              <p className="text-sm font-light">{error.msg}</p>
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
                className="input w-full h-10 font-light rounded-lg"
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
              className="input w-full h-10 font-light rounded-lg"
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
                className="input w-full h-10 font-light rounded-lg"
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
          <button
            className="btn-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-light"
            onClick={onSubmit}
          >
            Submit
          </button>
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
