import "./App.css";
import { useEffect, useState } from "react";
import Play from "./components/Play";
import StartPlay from "./components/StartPlay";

function App() {
  const [stageMode, setStageMode] = useState("start");

  return (
    <>
      {stageMode === "start" && (
        <StartPlay startToPlay={() => setStageMode("battle")} />
      )}
      {stageMode === "battle" && <Play />}
    </>
  );
}

export default App;
