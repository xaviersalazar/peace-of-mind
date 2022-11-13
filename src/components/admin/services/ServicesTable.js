import classNames from "classnames";
import { FiEdit, FiTrash2, FiSearch, FiFilter } from "react-icons/fi";
import Button from "../../shared/Button";

const MOCK_DATA = [
  {
    title: "Chair Massage",
    prices: [
      {
        price: "67.00",
        unit: "30 Minutes",
      },
      {
        price: "122.00",
        unit: "1 Hour",
      },
      {
        price: "167.00",
        unit: "1.5 Hours",
      },
    ],
    description:
      "Receive a 15 minute traditional Swedish massage that will help alleviate your stress, tension, pain or stiffness while increasing your energy level, alertness and creativity. Our professional Massage Therapists perform the massage in a specially designed ergonomic massage chair while you’re fully clothed, using traditional Swedish massage techniques	",
  },
  {
    title: "Aroma Therapy Oils",
    prices: [
      {
        price: "122.00",
        unit: "1 Hour",
      },
    ],
    description:
      "Natural oils extracted from flowers, bark, stems, leaves, roots or other parts of a plant to enhance psychological and physical well-being. The inhaled aroma from these essential oils is widely believed to stimulate brain function. Essential oils can also be absorbed through the skin, where they travel through the bloodstream and can promote whole-body healing. A form of alternative medicine, aromatherapy is gaining momentum. It is used for a variety of applications, including pain relief, mood enhancement and increased cognitive function. There are a wide number of essential oils available, each with its own healing properties. Oils are the heart of aromatherapy.	",
  },
  {
    title: "Therapeutic Cupping Massage",
    prices: [
      {
        price: "167.00",
        unit: "1.5 Hours",
      },
    ],
    description:
      "Pain Management, Injury and Surgical Recovery, Athletic Performance Enhancement, Clears Stagnation, Drains & Moves Fluids, Relieves Inflammation, Nervous System Sedation, Expels Congestion, Stretches Muscles & Connective Tissue, Loosens Adhesions, Nourishing Blood Supply To The Skin, Helps With Weight Loss, Helps Reduce Cellulite.",
  },
  {
    title: "Coffee & Cocoa Treatment",
    prices: [
      {
        price: "32.00",
        unit: "Add to any session",
      },
    ],
    description:
      "These natural oils are a purifying dose of detoxification; they also provide illuminating moisture reintroducing the glow to overly dry skin.",
  },
];

const ServicesTable = () => {
  return (
    <>
      <div className="flex mb-8 gap-x-4 md:justify-end">
        <div className="md:flex-1">
          <button className="btn rounded-lg px-4 py-2 text-xs font-light text-slate-400 capitalize">
            <FiFilter className="inline text-xs mr-2" /> Filter
          </button>
        </div>
        <div className="relative flex-1 md:flex-2">
          <FiSearch className="absolute text-slate-300 top-4 left-4" />
          <input
            name="search"
            type="text"
            placeholder="Search"
            className="bg-slate-50 input w-full h-12 font-light rounded-lg indent-6"
          />
        </div>
      </div>
      <div className="table w-full text-sm text-left text-gray-500 rounded-2xl">
        <div className="table-header-group text-[0.75rem] text-slate-300 uppercase bg-slate-50 rounded-tl-lg rounded-tr-2xl">
          <div className="table-row rounded-2xl">
            <div className="table-cell text-left tracking-wider text-md font-bold pl-4 pr-2 py-4 rounded-tl-2xl">
              Title
            </div>
            <div className="table-cell text-left tracking-wider text-md font-bold px-2 py-4">
              Prices
            </div>
            <div className="hidden md:table-cell text-left tracking-wider text-md font-bold px-2 py-4">
              Description
            </div>
            <div className="table-cell text-center tracking-wider text-md font-bold pl-2 pr-4 py-4 rounded-tr-2xl">
              Actions
            </div>
          </div>
        </div>
        <div className="table-row-group">
          {MOCK_DATA.map(({ title, prices, description }, i) => (
            <div key={title} className="table-row">
              <div
                className={classNames(
                  "table-cell md:w-[15%] text-xs font-light text-slate-400 pl-4 pr-2 py-4",
                  i === MOCK_DATA.length - 1
                    ? "border-none"
                    : "border-b border-slate-50"
                )}
              >
                {title}
              </div>
              <div
                className={classNames(
                  "table-cell w-[50%] md:w-[25%] text-xs font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                  i === MOCK_DATA.length - 1
                    ? "border-none"
                    : "border-b border-slate-50"
                )}
              >
                <div className="grid auto-cols-fr gap-y-2">
                  {prices.map(({ price, unit }) => (
                    <p key={`${price}_${unit}`}>
                      {unit}: ${price}
                    </p>
                  ))}
                </div>
              </div>
              <div
                className={classNames(
                  "hidden md:table-cell md:w-[50%] text-xs font-light text-slate-400 px-2 py-4 border-b border-slate-50",
                  i === MOCK_DATA.length - 1
                    ? "border-none"
                    : "border-b border-slate-50"
                )}
              >
                {description}
              </div>
              <div
                className={classNames(
                  "table-cell md:w-[10%] text-xs font-light text-slate-400 pl-2 pr-4 py-4 border-b border-slate-50",
                  i === MOCK_DATA.length - 1
                    ? "border-none"
                    : "border-b border-slate-50"
                )}
              >
                <div className="flex gap-x-4 justify-center">
                  <button>
                    <FiEdit />
                  </button>
                  <button>
                    <FiTrash2 className="text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 px-4 gap-x-4 text-center mt-4">
        <Button className="md:w-3/4 lg:w-1/2 xl:w-3/12">Prev</Button>
        <p className="text-slate-300 text-sm font-light mt-10">Page 1 of 12</p>
        <Button className="md:w-3/4 lg:w-1/2 xl:w-3/12 justify-self-end">
          Next
        </Button>
      </div>
    </>
  );
};

export default ServicesTable;
