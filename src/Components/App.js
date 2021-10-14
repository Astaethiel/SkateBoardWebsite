import '../Style/App.scss';
import HomePage from './HomePage';
import Navbar from './Navbar';


function App() {
  return (
    <div className="app container-flex">
       <Navbar/>
       <div className="sections">
      <HomePage/>
      <HomePage/>
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
