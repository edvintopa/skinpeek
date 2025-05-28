import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAllStarred } from "../../utils/localStorageUtils"


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
        <div>
          <input 
            type="text"
            placeholder="Sök Spelare..."
            className="input input-bordered"
            value={query}
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button></button>
        </div>
      </div>
    </>
  )
}

export default Home