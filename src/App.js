import './App.css';
import Appbar from './components/Appbar';
import Tables from './components/Tables';
import Dropdown from './components/Division';
import ScrollCard from './Card';
import Types from './components/banner';
// import Charts from './components/Barchart';
// import Type from './components/text';
import ElectionChart from './components/pie';
import Footer from './components/footer';
// import './ElectionChart.css';



function App() {
  return (
    <div className="App">
     <Appbar/><br></br>
     <Types/>
     <br></br>
     <br></br>
     <center> <Dropdown/></center>
    
     <ScrollCard/>
     <br></br>
     <Tables/>
     <ElectionChart/>
    
     <br></br>
     
     {/* <Type/> */}
     {/* <Charts/> */}
     <Footer/>
    </div>
    
  );
}

export default App;
