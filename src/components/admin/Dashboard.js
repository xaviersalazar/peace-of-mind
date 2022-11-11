import { useAuth } from "../context/Auth";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  console.log(user);

  return (
    <div className="flex-1 relative top-0 px-10 pt-8 pb-10 ml-16 lg:p-20 xl:px-[7rem] xl:py-16">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <button
        className="btn-primary w-full mt-8 p-2 rounded-lg text-slate-700 font-light"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
