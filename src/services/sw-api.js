
async function getAllStarships() {

    try{
        const response = await fetch(
            "https://swapi.dev/api/starships/"
        );
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export default getAllStarships