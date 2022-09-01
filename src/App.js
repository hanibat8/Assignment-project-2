import './App.css';
import StudentsList from './components/StudentsList';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/students" element={<StudentsList/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
  );
}

function Home() {
  return <>
    <h2>Home</h2>
    <Link to="/students">StudentsList</Link>
  </>;
}

export default App;
