import '../Style/App.scss';
import HomePage from './HomePage';
import Navbar from './Navbar';

import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <div className="app">
      <Navbar  isMobile={isMobile}/>
      <div className="sections">
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
        <HomePage />
      </div>
    </div>
  );
}
export default App;
