import { useState } from "react";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [region, setRegion] = useState("");

  return (
    <div className="bg-Grey-50 dark:bg-Blue-950 ">
      <Header />
      <Countries region={region} onRegionChange={setRegion}/>
    </div>
  );
}

export default App;
