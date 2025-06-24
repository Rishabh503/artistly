import { artists } from "../../../../public/data/artists";
import { UserProvider } from "@/context/userContext";
import ManagerProfile from "./__components/ManagerProfile";
import ArtistTable from "./__components/ArtistTable";

export default function ManagerDashboard() {
  return (
    <UserProvider>
      <div className="min-h-screen bg-[#fafafa] p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-4 text-[#670000]">Manager Dashboard</h1>
        <ManagerProfile />
        <ArtistTable data={artists} />
      </div>
    </UserProvider>
  );
}