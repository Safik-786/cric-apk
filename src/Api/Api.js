const API_KEY="68ff5999-15cd-478c-9256-a888a55a6ba6"


export const GetMatches =()=>{
    const url=`https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}`
    return(
         fetch(url)
        .then((response)=> response.json())
        .catch((err)=> console.log("Error : "+ err))
    )
}

// Load match details

export const getMatchDetails = (id) =>{
    const url=`https://api.cricapi.com/v1/match_scorecard?apikey=${API_KEY}&id=${id}`
    return (
        fetch(url)
        .then(response=> response.json())
        .catch((err)=>console.log("Error: ",err))
    )

}


// 68ff5999-15cd-478c-9256-a888a55a6ba6&id=28004108-5cdd-43f7-82f3-f530bf8b2ce9