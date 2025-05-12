import { useNavigate } from "react-router-dom"
import { ArrowLeftCircleIcon, StarIcon, ArrowDownCircleIcon }     from "@heroicons/react/24/outline"
import { StarIcon as StarIconSolid }          from "@heroicons/react/24/solid"

function ActionBar({ player, starred, onToggleStar, onDownload }) {
  const navigate = useNavigate()

  return (
    <div className="mb-20 md:mb-0 flex items-center justify-center gap-5 md:gap-15">

      <ArrowLeftCircleIcon
        onClick={() => navigate("/")}
        className="w-10 cursor-pointer hover:text-neutral-500"
        title="Go back"
      />

      <div className="w-10" />

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

      <ArrowDownCircleIcon
        onClick={onDownload}
        className="w-10 cursor-pointer hover:text-neutral-500"
        title={`Download ${player}'s skin`}
      />
    </div>
  )
}

export default ActionBar