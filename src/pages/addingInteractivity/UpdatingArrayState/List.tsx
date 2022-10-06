import { useState } from "react";

let nextId = 0;

export default function List() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => {
                    setName("");
                    setArtists([...artists, { id: nextId++, name: name }]);
                }}
            >
                Add
            </button>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

const initialArtists = [
    { id: 0, name: "Johann Sebastian Bach" },
    { id: 1, name: "Johannes Brahms" },
    { id: 2, name: "Johann Strauss II" },
];

export function RemovingList() {
    const [artists, setArtists] = useState(initialArtists);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>
                        {artist.name}{" "}
                        <button
                            onClick={() => {
                                setArtists(
                                    artists.filter((a) => a.id !== artist.id)
                                );
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
