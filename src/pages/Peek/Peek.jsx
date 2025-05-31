import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ActionBar from "../../components/ActionBar/ActionBar"
import SkinView from "../../components/SkinView/SkinView"
import { star, unStar, isStarred, getUuid } from "../../utils/localStorageUtils"
import { fetchUser } from "../../utils/minecraftUtils"

function Peek() {
    const { player } = useParams()
    const [starred, setStarred] = useState(() => isStarred(player))
    const [uuid, setUuid] = useState()
    useEffect(() => {

        if (starred) {
            setUuid(getUuid(player));
        } else {
            const fetchData = async () => {
                const minecraftPlayer = await fetchUser(player);
                const minecraftUUID = minecraftPlayer.data.player.id;
                setUuid(minecraftUUID);
            };
            fetchData();
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
        window.open(`https://crafatar.com/skins/${player}`, '_blank')
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