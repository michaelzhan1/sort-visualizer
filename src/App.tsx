import "./App.css";
import { shuffle } from "@/utils/random.util";

function App() {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  shuffle(arr);

  return (
    <>
      <h1>Visualizer</h1>
      <div>
        <span>Array: </span>
        <span>{arr.join(", ")}</span>
      </div>
    </>
  );
}

export default App;
