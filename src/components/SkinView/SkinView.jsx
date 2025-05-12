function SkinView({ playerUUID }) {
    if (!playerUUID) {
        return (
            <div>
                <p className="text-4xl text-red-500 font-bold">
                    404
                </p>
                <p className="text-xl">
                    Hmm... We couldn't find this one.
                </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-40">

            <img
                src={`https://crafatar.com/avatars/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] w-32"
            />

            <img
                src={`https://crafatar.com/renders/body/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />

            <img
                src={`https://crafatar.com/renders/head/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] w-32"
            />
        </div>
    )
}

export default SkinView