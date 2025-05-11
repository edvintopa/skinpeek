function SkinView( {playerUUID} ) {
    return (
        <div>
            <img
                src={`https://crafatar.com/renders/body/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
            <img
                src={`https://crafatar.com/avatars/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />

            <img
                src={`https://crafatar.com/renders/head/${playerUUID}`}
                alt="Logo"
                className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
            />
        </div>
    )
}

export default SkinView