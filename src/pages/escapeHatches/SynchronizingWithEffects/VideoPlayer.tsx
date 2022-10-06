import React, { useState, useRef, useEffect } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
};

function VideoPlayer({ src, isPlaying }: Props) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}
