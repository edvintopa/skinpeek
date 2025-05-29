import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllStarred } from "../../utils/localStorageUtils"
import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";


// Search bar
// Favourite players (localStorage)
// Search navigates to /peek/<username>

function Home() {
  const [Favourite, setFavorites] = useState([]);
  const [query , setQuery] = useState("");
  const navigate = useNavigate();

  useEffect( () => {
    const stored = getAllStarred();
    setFavorites(stored);
  }, []);

  const handleSearch = () => {
    if (query.trim()){
      
      navigate(`/peek/${query.trim()}`);
    }
  };

  return (
    <>
      <div>
        <h1>SKINPEEK</h1>
        <div className="p-4 flex flex-col gap-6">
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
            <FavoriteList favorites={Favourite} />
        </div>
      </div>
    </>
  )
}

export default Home