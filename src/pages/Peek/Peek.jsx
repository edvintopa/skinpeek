import { useParams } from "react-router-dom"
import ActionBar from "../../components/ActionBar/ActionBar"
import SkinView from "../../components/SkinView/SkinView"

function Peek() {
    const { player } = useParams()
    return (
        <>
            <SkinView playerUUID={"75c2128d-ce64-4a4f-99e0-1d950a577394"} />
            <ActionBar player={player} />
        </>
    )
}

export default Peek