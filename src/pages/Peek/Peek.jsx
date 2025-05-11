import { BeakerIcon } from '@heroicons/react/24/solid'

function Peek() {
    return (
        <>
            <img
                src="https://crafatar.com/renders/body/75c2128d-ce64-4a4f-99e0-1d950a577394"
                alt="Logo"
                style={{
                    /* glow following non-transparent pixels */
                    filter: 'drop-shadow(0 0 10px rgba(0, 200, 255, 0.8))'
                }}
            />

            <BeakerIcon />
        </>
    )
}

export default Peek