import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeftCircleIcon, StarIcon } from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid"
import { star, unStar, isStarred } from "../../utils/localStorageUtils"

function ActionBar({ player }) {
    // Load localStorage and check if the user is starred
    const [starred, setStarred] = useState(() => isStarred(player))
    const navigate = useNavigate();

    const toggleStar = () => {
        if (starred) {
            unStar(player)
            setStarred(false)
        } else {
            star(player)
            setStarred(true)
        }
    }

    return (
        <div className="flex items-center justify-center gap-10 mt-20">

            <ArrowLeftCircleIcon
                onClick={() => navigate("/")}
                className="w-10 cursor-pointer hover:text-neutral-500"
                title="Go back"
            />

            <p className="text-4xl font-black">{player}</p>

            {starred ? (
                <StarIconSolid
                    onClick={toggleStar}
                    className="w-10 cursor-pointer text-yellow-400 hover:text-yellow-500"
                    title={`Unfavourite ${player}`}
                />
            ) : (
                <StarIcon
                    onClick={toggleStar}
                    className="w-10 cursor-pointer hover:text-neutral-500"
                    title={`Favourite ${player}`}
                />
            )}
        </div>
    )
}

export default ActionBar