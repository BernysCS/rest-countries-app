import { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [region, setRegion] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="bg-Grey-50 dark:bg-Blue-950 ">
      <Header />
      <Countries
        region={region}
        onRegionChange={setRegion}
        query={query}
        setQuery={setQuery}
      />
    </div>
  );
}

export default App;
