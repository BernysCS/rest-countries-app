import { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";

function App() {
  const [region, setRegion] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="font-Nunito">
      <Header />
      <div className="md:mx-auto md:max-w-6xl p-6 md:p-0">
        <ToolBar onRegionChange={setRegion} setQuery={setQuery} />
        <Countries
          region={region}
          query={query}
        />
      </div>
      
    </div>
  );
}

export default App;
