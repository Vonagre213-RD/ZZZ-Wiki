import { useState, useEffect, useCallback } from "react"

interface AgentDataType {
    id: string;
    rank: string;
    imagesurl: {
        Avatar: string;
        Portrait: string;
    };
    name: string;
    gender: string;
    height: string;
    birthday: string;
    species: string;
    faction: string;
    attribute: string;
    specialty: string;
    type: string;
    agent_intel: string;
}

const baseUrl = 'https://zenlesszonezeroapi.onrender.com/characters/agents/'

export default function useAgentsData(nameFilter: string, factionFilter: string) {

    const [agentsData, setAgentsData] = useState<AgentDataType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>(undefined)

    const nullNameValues =  nameFilter === "N/A" || nameFilter === ""
    const nullFactionValues =  factionFilter === "N/A" || factionFilter === ""

    //first time using usecallback, let gooo! (I could've done this in a single line and without use call back...
    // just use const filteredData =  data.filter(a => a.faction === factionFilter) inside the useEffect...but this looks cooler hah pepe )
    
     const filterData = useCallback((data: AgentDataType[]) => {
       
        return data.filter(a => a.faction === factionFilter)
    }, [factionFilter])
    
    useEffect(() => {
        //async await looks cooler than .then ngl
        const getAgents = async () => {
            try {
                setIsLoading(true)
                
                // const url = nameFilter == "" || nameFilter == "all" ?
                //     `${baseUrl}all` :
                //     `${baseUrl}name/${nameFilter}`

                //used just the "all" query and filtered the data here, it's faster, less fetchs and less internet
                const res = await fetch(baseUrl+"all")
                const data: AgentDataType[] = await res.json()

                const nameFilteredData = nullNameValues ? data
                 : data.filter(a => a.name.toLowerCase().includes(nameFilter.toLowerCase()))

                 //I could put the image name as "" but it would have a negative effect in the alt part of the image 

                const factionFilteredData = nullFactionValues || factionFilter == "all" ? nameFilteredData : nameFilteredData.filter(a => a.faction.includes(factionFilter))
      
                setAgentsData(factionFilteredData)
                setIsLoading(false)
            }
            catch (error) {
                setError(error)
                console.log(error)
            }

        }

        getAgents()
        //this yellow line gives me anxiety, but it's not necessary at all
    }, [nameFilter, filterData])
    return { agentsData, isLoading, error }
}