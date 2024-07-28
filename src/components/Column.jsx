import React from "react";

function Column(emoji){

    return(
        <>
        <div class="col-lg-4">
        <h1 className="emoji-image">{emoji.image}</h1>
        <h2>{emoji.name}</h2>
        <p>{emoji.meaning}</p>
      </div>
      </>
    )
}
export default Column;