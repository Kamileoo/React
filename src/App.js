import { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js';
import MovieList from './components/MovieList';
import MovieSort from './components/MovieSort';
import startDB from './startList.json'
import Search from './components/Search';

function App() {
  const [movieDB, setMovieDB] = useState([]);
  const [filteredMovieDB, setFilteredMovieDB] = useState([]);
  const [sortedMovieDB, setSortedMovieDB] = useState([]);
  const [sortType, setSortType] = useState("date-asc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLocal();
  }, []);

  useEffect(() => {
    searchHandler();
    // console.log(search);
  }, [movieDB, search]);

  useEffect(() => {
    sortHandler();
  }, [filteredMovieDB, sortType])

  const loadLocal = () =>{
    let db = JSON.parse(JSON.stringify(startDB));
    setMovieDB(db.items);
  };

  const searchHandler = () => {
    if(search === "") {
      setFilteredMovieDB(movieDB);
    }
    else {
      // setFilteredMovieDB([...movieDB].filter((item) => item.name.toLowerCase().contains("l"));
      setFilteredMovieDB([...movieDB].filter(item => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
      }));
    }
  };

  const sortHandler = () => {
    switch(sortType) {
      case "date-desc":
        setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.id < b.id ? 1 : -1));
        break;
      case "rating-asc":
        setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.rating < b.rating ? 1 : -1));
        break;
      case "rating-desc":
        setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.rating > b.rating ? 1 : -1));
        break;
        case "name-asc":
          setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.name < b.name ? 1 : -1));
          break;
        case "name-desc":
          setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.name > b.name ? 1 : -1));
          break;
      default:
        setSortedMovieDB([...filteredMovieDB].sort((a, b) => a.id > b.id ? 1 : -1));
        break;
    };
  };



  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <Form movieDB={movieDB} setMovieDB={setMovieDB}/>
      <MovieSort movieDB={movieDB} setMovieDB={setMovieDB} setSortType={setSortType}/>
      <Search setSearch={setSearch} search={search}/>
      <MovieList movieDB={movieDB} setMovieDB={setMovieDB} sortedMovieDB={sortedMovieDB}/>
    </div>
  );
}

export default App;
