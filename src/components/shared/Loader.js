const Loader = () => (
  <div
    className="relative top-32 h-full mb-32 px-10 pt-0 lg:px-20 lg:pt-4 xl:px-[7rem] xl:pt-8"
    id="loader-container"
  >
    <div className="bg-white w-full flex justify-center items-center relative top-0">
      <div className="bg-white p-10 shadow-[0_8px_24px_rgba(223,228,234,0.6)] rounded-2xl relative">
        <svg
          className="w-12 h-12 animate-spin text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.75V6.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.1266 6.87347L16.0659 7.93413"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.25 12L17.75 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.1266 17.1265L16.0659 16.0659"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 17.75V19.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.9342 16.0659L6.87354 17.1265"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M6.25 12L4.75 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.9342 7.93413L6.87354 6.87347"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Loader;
