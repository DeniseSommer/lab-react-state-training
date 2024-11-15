import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {/* Iteration 1 */}
      <LikeButton />
      <LikeButton />

      {/* Iteration 2 */}
      <Counter />

      {/* Iteration 3 */}
      <ClickablePicture />

      {/* Iteration 4 */}
      <Dice />
    </div>
  );
}

export default App;
