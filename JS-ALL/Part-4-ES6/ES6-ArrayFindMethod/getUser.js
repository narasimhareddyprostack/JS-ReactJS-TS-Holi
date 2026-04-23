const getUserData = async (name) => {
    try {
        const resp = await fetch('https://dummyjson.com/users');
        const { users } = await resp.json();

        return users.find(user => user.firstName === name);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

getUserData("Lily").then(console.log);