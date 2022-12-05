import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import { useForm as reactHookUseForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";
import { Spinner } from "../shared";

const ContactForm = ({ setDidFormSucceed }) => {
  const {
    register,
    handleSubmit: reactHookHandleSubmit,
    formState: { isValid, errors: reactHookErrors },
  } = reactHookUseForm({
    mode: "onChange",
  });
  const [{ submitting, succeeded, errors }, handleSubmit] =
    useForm("contactForm");

  const [error, setError] = useState(errors);

  useEffect(() => {
    if (errors.length > 0) {
      setError(errors);

      setTimeout(() => {
        setError([]);
      }, 5000);
    }
  }, [errors]);

  useEffect(() => {
    if (succeeded) {
      setDidFormSucceed(true);
    }
  }, [succeeded]);

  if (succeeded)
    return (
      <div>
        <h1 className="text-sm md:text-base font-light text-slate-700">
          Thanks for the inquiry! We'll get back to you as soon as we can!
        </h1>
      </div>
    );

  return (
    <>
      <AnimatePresence>
        {error.length > 0 && (
          <motion.div
            className="alert alert-error shadow-lg absolute left-44 top-6 z-[100] w-full items-start md:left-[30rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]"
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              <FiXCircle />
              <div className="text-sm font-light">
                <span className="block lg:inline">
                  Oops! Something went wrong.{" "}
                </span>
                <span className="block lg:inline">Please try again</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <form
        id="contact-form"
        className="mt-4 mx-auto bg-slate-50 rounded-2xl p-8 md:w-3/4 lg:w-7/12 xl:w-6/12"
        onSubmit={reactHookHandleSubmit(handleSubmit)}
      >
        <div className="form-control w-full mb-2">
          <label htmlFor="name" className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="input w-full h-10 font-light text-slate-500 rounded-lg focus:outline-primary"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          {reactHookErrors?.name && (
            <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
              {reactHookErrors.name.message}
            </p>
          )}
        </div>
        <div className="form-control w-full mb-2">
          <label htmlFor="email" className="label">
            <span className="label-text font-bold">Email address</span>
          </label>
          <input
            id="email"
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
          {reactHookErrors?.email && (
            <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
              {reactHookErrors.email.message}
            </p>
          )}
        </div>
        <div className="form-control w-full mb-2">
          <label htmlFor="message" className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea text-sm leading-6 w-full h-32 font-light text-slate-500 rounded-lg resize-none focus:outline-primary"
            {...register("message", {
              required: { value: true, message: "Message is required" },
            })}
          />
          {reactHookErrors?.message && (
            <p className="text-red-300 font-light text-xs ml-1 mt-1 text-left">
              {reactHookErrors.message.message}
            </p>
          )}
        </div>
        <motion.button
          type="submit"
          className="bg-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-bold disabled:bg-slate-100 disabled:text-slate-300"
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
          disabled={!isValid || submitting}
        >
          {submitting && <Spinner size="4" color="text-slate-400" />}
          Submit
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
