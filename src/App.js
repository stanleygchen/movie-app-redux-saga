import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';
import Home from './pages/Home';

/*
Here is your key: b5b62c0e
Please append it to all of your API requests,
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b5b62c0e
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/movie/:id" element={<Movie />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
