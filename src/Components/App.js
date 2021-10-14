import '../Style/App.scss';
import Homepage from './Homepage/Homepage';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Navbar from './Navbar/Navbar';

import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <div className="app">
      <Navbar  isMobile={isMobile}/>
      <div className="sections">
        <Homepage />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}
export default App;
