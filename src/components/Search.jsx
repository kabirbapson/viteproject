import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div>Search</div>
      <input
        className="text-1xl px-3 w-full text-center border-rose-300 34 border-2 rounded-2xl"
        type="text"
        placeholder="Search for the movies dhhdhdjdjdf f df jdf"
        value={searchTerm}
        onChange={(e) => setSearchTerm( e.target.value)}
      />
   <div>
    {searchTerm}
    </div> 
    </div>
  );
};

export default Search;
