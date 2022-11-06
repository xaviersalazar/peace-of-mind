import Service from "../shared/Service";
import GradientFont from "../shared/GradientFont";

const AddOns = () => {
  return (
    <Service>
      <div id="add-ons">
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <GradientFont
              className="text-3xl font-bold md:text-4xl lg:text-5xl"
              deg={-45}
              colors={["#a8ff78", "#78ffd6"]}
            >
              Add On's
            </GradientFont>{" "}
          </h1>
        </div>
      </div>
    </Service>
  );
};

export default AddOns;
