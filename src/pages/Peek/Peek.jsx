import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ActionBar from "../../components/ActionBar/ActionBar"
import SkinView from "../../components/SkinView/SkinView"

function Peek() {
    const [uuid, setUuid] = useState("75c2128d-ce64-4a4f-99e0-1d950a577394")
    const { player } = useParams()

    useEffect(() => {
        //get player UUID placeholder
    }, [player])

    return (
        <>
            <SkinView playerUUID={uuid} />
            <ActionBar player={player} />
        </>
    )
}

export default Peek