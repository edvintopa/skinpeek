import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ActionBar from "../../components/ActionBar/ActionBar"
import SkinView from "../../components/SkinView/SkinView"
import { star, unStar, isStarred } from "../../utils/localStorageUtils"

function Peek() {
    const { player } = useParams()
    const [starred, setStarred] = useState(() => isStarred(player))
    const [uuid, setUuid] = useState("75c2128d-ce64-4a4f-99e0-1d950a577394")

    useEffect(() => {
        //get player UUID placeholder
    }, [player])

    const toggleStar = () => {
    if (starred) {
      unStar(player)
      setStarred(false)
    } else {
      star(player, uuid)
      setStarred(true)
    }
  }

    return (
        <>
            <SkinView playerUUID={uuid} />
            <ActionBar
                player={player}
                starred={starred}
                onToggleStar={toggleStar}
            />
        </>
    )
}

export default Peek