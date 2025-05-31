import { useNavigate } from "react-router-dom";

function FavoriteList({ favorites }) {
    const navigate = useNavigate();

    if (favorites.length === 0 || !favorites) return <p>No favorite player saved.</p>;

    return (
        <ul className="flex flex-col gap-3 w-full px-2 sm:px-4">
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