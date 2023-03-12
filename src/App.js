import './App.css';
import {
  
  Footer,
 
  Navbar,

} from "./components";

 
import { About } from './pages';
function App() {
  return (
    <div className="App">
     <Navbar />
      <About/>
      <Footer />    
      
      </div>
  );
}

export default App;
