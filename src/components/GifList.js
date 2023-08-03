// import react from "react";

function GiftList({image, name}){
    return <li>
        <h2>{name}</h2>
        <img src={image} alt={name}/>
    </li>
}
export default GiftList