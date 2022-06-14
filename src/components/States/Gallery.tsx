import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index === sculptureList.length - 1) {
            setIndex(0);
            return
        }
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    const sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <br></br>
            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    );
}
