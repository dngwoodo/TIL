import Counter from "./Counter";
import DelayedToggle from "./DelayedToggle";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Profile username="vue만 하고싶다" name="dongwoo"></Profile>
      <Counter></Counter>
      <DelayedToggle></DelayedToggle>
    </div>
  );
}

export default App;
