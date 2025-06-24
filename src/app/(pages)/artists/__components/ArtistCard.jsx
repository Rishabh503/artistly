import { Button } from "@/components/ui/button";

export default function ArtistCard({ artist }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{artist.name}</h3>
      <p className="text-sm text-gray-500 mb-1">{artist.category}</p>
      <p className="text-sm text-gray-500 mb-1">📍 {artist.location}</p>
      <p className="text-sm text-gray-500 mb-4">💸 {artist.price}</p>
      <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
        Ask for Quote
      </Button>
    </div>
  );
}
