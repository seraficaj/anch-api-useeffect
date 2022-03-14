function DisplayCards(props) {
    const allVillagers = props.villagers.map((v) => {
        return (
            <li onClick={() => props.clickable ? props.handleClick(v) : null}>
                <img
                    src={v.image_uri}
                    alt={v.name["name-USen"]}
                />
                <p>{v.name["name-USen"]}</p>
            </li>
        );
    });
    return <ul>{allVillagers}</ul>;
}

export default DisplayCards;
