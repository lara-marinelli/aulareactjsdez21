import logo from './logo.svg';
import './App.css';
import Intro from './components/intro';
import About from './components/about'

function App() {
  return (

    <div className="App">
      <Intro nome="Lara Marinelli" cargo="Machine Learning Engineer" cargo2="Instructor"/>
      <About/>    
    </div>
  );
}

export default App;
