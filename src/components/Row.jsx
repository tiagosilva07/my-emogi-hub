import React from "react";
import Column from "./Column";
import emojis from "../emojidata";

function createColumn(emoji){
    return <Column 
    key= {emoji.id}
    name= {emoji.name} 
    image={emoji.image} 
    meaning={emoji.meaning}
    />
}


function Row(){
    return(
    <div class="row">
        {emojis.map(createColumn)}
    </div>
    )
}
export default Row;