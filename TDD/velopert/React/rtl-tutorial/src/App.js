import Counter from "./Counter";
import DelayedToggle from "./DelayedToggle";
import Profile from "./Profile";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Profile username="vue만 하고싶다" name="dongwoo"></Profile>
      <Counter></Counter>
      <DelayedToggle></DelayedToggle>
      <UserProfile></UserProfile>
    </div>
  );
}

export default App;
