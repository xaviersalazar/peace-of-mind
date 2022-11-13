import { FiEdit, FiTrash2 } from "react-icons/fi";

const ServicesTable = () => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500 rounded-lg">
        <thead className="text-[0.75rem] text-slate-300 uppercase bg-slate-50 rounded-tl-lg rounded-tr-2xl">
          <tr className="rounded-tl-2xl">
            <th
              scope="col"
              colSpan={1}
              className="py-4 px-6 tracking-wider rounded-tl-2xl"
            >
              Title
            </th>
            <th scope="col" colSpan={1} className="py-4 px-6 tracking-wider">
              Description
            </th>
            <th
              scope="col"
              colSpan={1}
              className="py-4 px-6 tracking-wider md:w-[128px] lg:w-[192px] xl:w-[256px]"
            >
              Prices
            </th>
            <th
              scope="col"
              colSpan={1}
              className="py-4 px-6 tracking-wider rounded-tr-2xl"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-slate-100">
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Chair Massage
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Receive a 15 minute traditional Swedish massage that will help
              alleviate your stress, tension, pain or stiffness while increasing
              your energy level, alertness and creativity. Our professional
              Massage Therapists perform the massage in a specially designed
              ergonomic massage chair while you’re fully clothed, using
              traditional Swedish massage techniques
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="grid auto-cols-fr gap-y-2">
                <p>30 Minutes: $67.00</p>
                <p>1 Hour: $122.00</p>
                <p>1.5 Hours: $167.00</p>
              </div>
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="flex gap-x-4">
                <button>
                  <FiEdit />
                </button>
                <button>
                  <FiTrash2 className="text-red-400" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b border-slate-100">
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Aroma Therapy Oils
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Natural oils extracted from flowers, bark, stems, leaves, roots or
              other parts of a plant to enhance psychological and physical
              well-being. The inhaled aroma from these essential oils is widely
              believed to stimulate brain function. Essential oils can also be
              absorbed through the skin, where they travel through the
              bloodstream and can promote whole-body healing. A form of
              alternative medicine, aromatherapy is gaining momentum. It is used
              for a variety of applications, including pain relief, mood
              enhancement and increased cognitive function. There are a wide
              number of essential oils available, each with its own healing
              properties. Oils are the heart of aromatherapy.
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="grid auto-cols-fr gap-y-2">
                <p>1 Hour: $122.00</p>
              </div>
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="flex gap-x-4">
                <button>
                  <FiEdit />
                </button>
                <button>
                  <FiTrash2 className="text-red-400" />
                </button>
              </div>
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Therapeutic Cupping Massage
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              Pain Management, Injury and Surgical Recovery, Athletic
              Performance Enhancement, Clears Stagnation, Drains & Moves Fluids,
              Relieves Inflammation, Nervous System Sedation, Expels Congestion,
              Stretches Muscles & Connective Tissue, Loosens Adhesions,
              Nourishing Blood Supply To The Skin, Helps With Weight Loss, Helps
              Reduce Cellulite.
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="grid auto-cols-fr gap-y-2">
                <p>1.5 Hours: $167.00</p>
              </div>
            </td>
            <td className="py-4 px-6 text-[0.75rem] font-light text-slate-400">
              <div className="flex gap-x-4">
                <button>
                  <FiEdit />
                </button>
                <button>
                  <FiTrash2 className="text-red-400" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ServicesTable;
