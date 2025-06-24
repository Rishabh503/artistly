import { Button } from "@/components/ui/button";

export default function ArtistTable({ data }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full table-auto text-sm text-left text-gray-600">
        <thead className="bg-[#670000] text-white uppercase">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">City</th>
            <th className="px-6 py-3">Fee</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((artist) => (
            <tr key={artist.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{artist.name}</td>
              <td className="px-6 py-4">{artist.category}</td>
              <td className="px-6 py-4">{artist.location}</td>
              <td className="px-6 py-4">{artist.price}</td>
              <td className="px-6 py-4">
                <Button className="bg-[#670000] text-white px-4 py-1 rounded-lg hover:brightness-110">
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
