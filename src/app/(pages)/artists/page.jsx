"use client";
import { useEffect, useState } from "react";
import ArtistCard from "@/app/(pages)/artists/__components/ArtistCard";
import { useFilters } from "@/hooks/useFilters";
import FilterControls from "./__components/FilterControls";
import { artists } from "../../../../public/data/artists";

export default function ArtistListing() {
  const filterKeys = ["category", "location", "price"];
  const [artistData, setArtistsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // use effect is used to demonstrate the use of
  //  loading data in real time when we get data we have to wait so it demonstartes that 

  useEffect(() => {
    const timer = setTimeout(() => {
      setArtistsData(artists);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const { filters, setFilters, filteredData, getAvailableOptions } = useFilters(
    artistData,
    filterKeys
  );

  return (
    <section className="px-6 md:px-20 mt-4 sm:mt-16 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">

        {/* using conditonal rendering to give the heading  */}
     {loading?"Loading the Artist Data...":"Explore Artists"}
      </h2>

      <FilterControls
        filters={filters}
        setFilters={setFilters}
        getAvailableOptions={getAvailableOptions}
        keys={filterKeys}
      />
      {/* handling the data using conditonal rendering  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-40 bg-gray-200 rounded-xl animate-pulse"
            ></div>
          ))
        ) : filteredData.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No artists match your filters.
          </p>
        ) : (
          filteredData.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        )}
      </div>
    </section>
  );
}
