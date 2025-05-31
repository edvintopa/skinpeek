import { useNavigate } from "react-router-dom";

function FavoriteList({ favorites }) {
    const navigate = useNavigate();

    if (favorites.length === 0 || !favorites) return <p>No favorite player saved.</p>;

    return (
        <ul className="grid grid-cols-1 gap-4 shadow-md" id="testarNu">
            {favorites.map(({ player }) => (
                <li
                    key={player}
                    className="cursor-pointer hover:underline "
                    onClick={() => navigate(`/peek/${player}`)}>

                    {player}
                </li>
            ))}
        </ul>
    );
}

export default FavoriteList;