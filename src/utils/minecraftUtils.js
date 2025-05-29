// parameter: minecraft username
// returns: minecraft UUID
// api: https://playerdb.co

const apiURL = "https://playerdb.co/api/player/minecraft/"

async function fetchUser(minecraftUsername) {
    const response = await fetch(apiURL + minecraftUsername);
    if (!response.ok) {
        console.log("Error")
    }

    const minecraftUser = await response.json();

    console.log(minecraftUser);
    return minecraftUser;
}

export {
    fetchUser
}