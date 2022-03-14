import "./App.css";
import { useEffect, useState } from "react";
import DisplayCards from "./DisplayCards";

function App() {
    const [data, setData] = useState({ villagers: [] });
    const [faves, setFaves] = useState([]);
    const [search, setSearch] = useState("");

    const fetchVillagers = () => {
        fetch(`http://acnhapi.com/v1/villagers/`)
            .then((res) => res.json())
            .then((villagerData) => {
                const villageArr = Object.values(villagerData);
                setData({ villagers: villageArr });
            })
            .catch((err) => {
                console.log("error", err);
            });
        console.log("console.log #2");
    };

    const getFilteredVillagers = (e) => {
        let searchTerm = search.toLowerCase();
        return data.villagers.filter((v) => {
            let lowerCaseName = v.name["name-USen"].toLowerCase();
            return lowerCaseName.includes(searchTerm);
        });
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleClick = (villager) => {
        if (!faves.includes(villager)) {
            setFaves([...faves, villager]);
        }
    };

    useEffect(fetchVillagers, []);

    return (
        <div>
            <h1>Animal Crossing Villagers</h1>
            <div>
                <label htmlFor="villager-search">Search for a villager:</label>
                <input
                    id="villager-search"
                    type="text"
                    value={search}
                    onChange={handleChange}
                />
            </div>
            {search !== "" ? (
                <DisplayCards
                    clickable={true} 
                    villagers={getFilteredVillagers()}
                    handleClick={handleClick}
                />
            ) : (
                <></>
            )}
            <div>
                <h2>Favorite Villagers:</h2>
                <DisplayCards  clickable={false} villagers={faves} />
            </div>
        </div>
    );
}

export default App;
