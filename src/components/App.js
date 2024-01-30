import { Switcher } from "../router";
import "./App.css";
import ButtonAppBar from "./AppBar/AppBar";
import FixedBottomNavigation from "./BottomNavigation";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Switcher />
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
