import "./App.css";
import Play from "./components/Play";
//import Card from "./components/Card";
import PrimaryButton from "./components/PrimaryButton";
import jsonData from "./deck.json";

function App() {
  return (
    <div>
      <Play />
      <PrimaryButton text={"New game"} />
      <PrimaryButton text={"Play"} />
      <PrimaryButton text={"Stand"} />
      <div className="App">
        <div className="posts">
          {jsonData.map((post) => {
            return (
              <div className="card">
                <h2>{post.value}</h2>
                <h3>{post.suit}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
