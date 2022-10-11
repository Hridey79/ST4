import './App.css';
import Form from "./Form"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Record from './Record';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Form></Form>}></Route>
          <Route path='/records'element={<Record></Record>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
