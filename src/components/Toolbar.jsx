import React from "react";
import Filter from "./Filter";
import Search from "./Search";

const ToolBar = ({ onRegionChange, setQuery }) => {
  return (
    <div className="md:flex md:justify-between md:my-7">
      <Search setQuery={setQuery} />
      <Filter onRegionChange={onRegionChange} />
    </div>
  );
};

export default ToolBar;
