import { Bottom } from "./components/Bottom";
import { Info } from "./components/Info";
import { Intro } from "./components/Intro";
import { Middle } from "./components/Middle";

function App() {
  return (
    <div className="App">
     <Intro />
     <Middle />
     <Info />
     <Bottom />
    </div>
  );
}

export default App;
