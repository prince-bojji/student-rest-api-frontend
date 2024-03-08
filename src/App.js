import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddStudent from './students/AddStudent';
import EditStudent from './students/EditStudent';
import ViewStudent from './students/ViewStudent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addstudent' element={<AddStudent />} />
          <Route exact path='/editstudent/:id' element={<EditStudent />} />
          <Route exact path='/viewstudent/:id' element={<ViewStudent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
