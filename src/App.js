import "./App.css";
import { useEffect, useState } from "react";
import Play from "./components/Play";
import StartPlay from "./components/StartPlay";

function App() {
  const [modestageMode, setStageMode] = useState("start");

  return (
    <>
      {modestageMode === "start" && (
        <StartPlay startToPlay={() => setStageMode("battle")} />
      )}
      {modestageMode === "battle" && <Play />}
    </>
  );
}

export default App;
