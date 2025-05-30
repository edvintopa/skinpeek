const STORAGE_KEY = "starredPlayers";

// Gets all starred players, return empty array if none
function getAllStarred() {
    const raw = localStorage.getItem(STORAGE_KEY);
    
    if (raw) { return JSON.parse(raw); }
    else { return []; }
}

// Stars a player and saves to the localStorage
function star(player, uuid) {
    const starredPlayers = getAllStarred();
    starredPlayers.push({ player, uuid });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starredPlayers));
}

// Un-star a player and update localStorage
function unStar(player) {
    const starredPlayers = getAllStarred().filter(p => p.player !== player);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(starredPlayers));
}

// Quickly check if a player is starred
function isStarred(player) {
    return getAllStarred().some(p => p.player === player)
}

// Return stored UUID of a player
function getUuid(player) {
    const starredPlayers = getAllStarred();
    return starredPlayers.find(p => p.player == player).uuid;
}

export {
    getAllStarred,
    star,
    unStar,
    isStarred,
    getUuid
}