import { useState } from "react";
import { useForm } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";
import { FiXCircle } from "react-icons/fi";
import { Spinner } from "../shared";
import { isEmpty } from "lodash";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [{ submitting, succeeded, errors }, handleSubmit] = useForm(
    `${process.env.FORMSPREE_CONTACT_FORM_HASHID}`
  );

  const [form, setForm] = useState(initialState);

  if (succeeded) return <div>Thank you for signing up!</div>;

  if (errors.length > 0)
    return <div>Oops! Something went wrong. Please try again</div>;

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    try {
      await handleSubmit(form, {
        data: {
          subject: "New message from contact form",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const { name, email, message } = form;

  const isSubmitDisabled = Object.values(form).some((value) => value === "");

  return (
    <>
      <AnimatePresence>
        {errors.length > 0 && (
          <motion.div
            className="alert alert-error shadow-lg absolute left-44 top-6 z-[100] w-full items-start md:left-[30rem] lg:left-[42rem] xl:left-[64rem] 2xl:left-[84rem]"
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            exit={{ x: 800 }}
          >
            <div>
              <FiXCircle />
              <div className="text-sm font-light">
                <span className="block">Oops! Something happened!</span>
                <span className="block">Please try again</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <form
        id="contact-form"
        className="mt-4 mx-auto bg-slate-50 rounded-2xl p-8 md:w-3/4 lg:w-7/12 xl:w-6/12"
        onSubmit={handleSubmit}
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
            value={name}
            onChange={onChange}
          />
          {isEmpty(name) && (
            <p className="text-xs font-really-light text-red-500 text-left mt-1 ml-1">
              Please enter your name
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
            value={email}
            onChange={onChange}
          />
          {isEmpty(email) && (
            <p className="text-xs font-really-light text-red-500 text-left mt-1 ml-1">
              Please enter your email address
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
            value={message}
            onChange={onChange}
          />
          {isEmpty(message) && (
            <p className="text-xs font-really-light text-red-500 text-left mt-1 ml-1">
              Please leave a message
            </p>
          )}
        </div>
        <motion.button
          className="bg-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-bold disabled:bg-slate-100 disabled:text-slate-300"
          whileHover={
            !isSubmitDisabled && {
              backgroundColor: "#f8fafc",
              boxShadow:
                "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
              color: "#10FFCB",
              transition: { duration: 0.3 },
            }
          }
          whileFocus={
            !isSubmitDisabled && {
              backgroundColor: "#f8fafc",
              boxShadow:
                "0px 0px 0px 2.5px #f8fafc, 0px 0px 0px 5px #10FFCB, 0px 0px 0px 10px #f8fafc, 0px 0px 0px 10.5px #10FFCB",
              color: "#10FFCB",
              transition: { duration: 0.3 },
            }
          }
          whileTap={
            !isSubmitDisabled && {
              scale: 0.9,
            }
          }
          onClick={(e) => {
            onSubmit();
            e.currentTarget.blur();
          }}
          disabled={isSubmitDisabled || submitting}
        >
          {submitting && <Spinner size="4" color="text-slate-400" />}
          Submit
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
