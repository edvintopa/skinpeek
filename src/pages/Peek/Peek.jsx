import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ActionBar from "../../components/ActionBar/ActionBar"
import SkinView from "../../components/SkinView/SkinView"
import { star, unStar, isStarred, getUuid } from "../../utils/localStorageUtils"

function Peek() {
    const { player } = useParams()
    const [starred, setStarred] = useState(() => isStarred(player))
    const [uuid, setUuid] = useState("75c2128d-ce64-4a4f-99e0-1d950a577394")    //remove later

    useEffect(() => {

        if (starred) {
            setUuid(getUuid(player));
        } else {
            // use api
        }

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

    const downloadSkin = () => {
        window.open(`https://crafatar.com/skins/${uuid}`, '_blank')
    }

    return (
        <div className="flex flex-col md:flex-col-reverse gap-10 md:gap-30">
            <ActionBar
                player={player}
                starred={starred}
                onToggleStar={toggleStar}
                onDownload={downloadSkin}
            />
            <SkinView playerUUID={uuid} />
        </div>
    )
}

export default Peek