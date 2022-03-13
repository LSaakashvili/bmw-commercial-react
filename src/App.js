import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import LoadingPage from './components/LoadingPage';
import Introduction from './components/Introduction';
import HistoryComponent from './components/History';
import Specs from './components/Specs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <LoadingPage/> } />
        <Route path="/intro" element={ <Introduction /> } />
        <Route path="/history" element={ <HistoryComponent /> } />
        <Route path="/specs" element={ <Specs /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
