import "./App.css";
import { Footer, Navbar, Social } from "./components";

import { About } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
      <Social />
    </div>
  );
}

export default App;
