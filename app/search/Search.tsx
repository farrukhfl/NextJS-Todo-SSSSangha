"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white 
      px-4 py-2 font-bold rounded-lg">
        Search
      </button>
    </form>
  );
}

export default Search;
