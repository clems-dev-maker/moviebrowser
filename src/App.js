import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import { Switch, Route } from "react-router-dom";
import MovieView from './components/MovieView'
import SearchView from "./components/SearchView";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=bce11c21155a0dd22d7b539b738a283b`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
      </Switch>
    </div>
  );
}

export default App;
