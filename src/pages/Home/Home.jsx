import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllStarred } from "../../utils/localStorageUtils"
import SearchBar from "../../components/SearchBar/SearchBar";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import SortButtons from "../../components/SortButtons/SortButtons";

// Search bar
// Favourite players (localStorage)
// Search navigates to /peek/<username>

function Home() {
  const [Favourite, setFavorites] = useState([]);
  const [query , setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
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

  const filtered = Favourite.filter(({player}) => 
    player.toLowerCase().includes(query.toLowerCase())
  );

  const sortedFavorites = 
  sortOrder === null ? filtered
    :[...filtered].sort((a, b) => {
      const nameA = a.player.toLowerCase();
      const nameB = b.player.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    })
  return (
    <>
      <div>
        <div className="p-4 flex flex-col gap-6">
            <h1>SKINPEEK</h1>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
            <FavoriteList favorites={sortedFavorites} />
            <SortButtons sortOrder={sortOrder} onChange={setSortOrder}/>
        </div>
      </div>
    </>
  )
}

export default Home