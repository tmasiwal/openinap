import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Upload from './Pages/Upload/Upload';
import TableElement from './Pages/Table/TableElement';
import Allroutes from './Components/Allroutes';

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Upload/>
      <TableElement/> */}
      <Allroutes/>
    </div>
  );
}

export default App;
