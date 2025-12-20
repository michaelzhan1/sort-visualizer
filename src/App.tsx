import { Display } from "@/components/display.component";
import "@/App.css";
import { shuffle } from "@/utils/random.util";

function App() {
  const arr = Array.from({ length: 25 }, (_, i) => i + 1);
  shuffle(arr);

  return (
    <>
      <h1>Visualizer</h1>
      <div>
        <span>Array: </span>
        <span>{arr.join(", ")}</span>
      </div>
      <div>
        <div><span>Display</span></div>
        <div>
          <Display arr={arr} done={false} />
        </div>
      </div>
    </>
  );
}

export default App;
