const Error = ({ text }) => (
  <>
    {text || (
      <>
        <h1 className="text-4xl font-extra-bold text-center mb-2">
          Oops, something happened 🤷‍♀️
        </h1>
        <h1 className="text-4xl font-light text-center">
          Please try reloading
        </h1>
      </>
    )}
  </>
);

export default Error;
