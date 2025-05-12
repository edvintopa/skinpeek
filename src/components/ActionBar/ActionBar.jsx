import { useNavigate } from "react-router-dom"
import { ArrowLeftCircleIcon, StarIcon }     from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid }          from "@heroicons/react/24/solid"

function ActionBar({ player, starred, onToggleStar }) {
  const navigate = useNavigate()

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
          onClick={onToggleStar}
          className="w-10 cursor-pointer text-yellow-400 hover:text-yellow-500"
          title={`Unfavourite ${player}`}
        />
      ) : (
        <StarIcon
          onClick={onToggleStar}
          className="w-10 cursor-pointer hover:text-neutral-500"
          title={`Favourite ${player}`}
        />
      )}
    </div>
  )
}

export default ActionBar