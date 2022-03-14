import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState({ villagers: [] });

    const fetchVillagers = () => {
        fetch(`http://acnhapi.com/v1/villagers/`)
            .then((res) => res.json())
            .then((villagerData) => {
                const villageArr = Object.values(villagerData)
                setData({villagers: villageArr})
            })
            .catch((err) => {
                console.log("error", err);
            });
        console.log("console.log #2");
    };

    useEffect(fetchVillagers, []);

    const villagerList = data.villagers.map(villager => {
        return (<li key={villager.id}>{villager.name["name-USen"]} </li>)
    })

    return (
        <div>
            <ul>
                {villagerList}
            </ul>
        </div>
    );
}

export default App;
