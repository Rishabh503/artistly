"use client"
import artistData from "@/data/artists.json"
import ArtistCard from "@/components/ArtistCard";
import FilterControls from "@/components/FilterControls";
import { useFilters } from "@/lib/useFilters";


export default function ArtistListing() {
 const filterKeys = ["category", "location", "price"];
const { filters, setFilters, filteredData, getAvailableOptions } = useFilters(artistData, filterKeys);


  return (
    <section className="px-6 md:px-20 mt-16 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Explore Artists
      </h2>
{/* IMPORTING THE FILTER CONTROL COMPONENT  */}

    <FilterControls
  filters={filters}
  setFilters={setFilters}
  getAvailableOptions={getAvailableOptions}
  keys={filterKeys}
/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No artists match your filters.
          </p>
        ) : (
          filteredData.map((artist) => (
            // ARTIST CARD 
            <ArtistCard key={artist.id} artist={artist} />
          ))
        )}
      </div>
    </section>
  );
}
