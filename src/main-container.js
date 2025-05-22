import mediaItems from "./mediaItems";
import { useState } from "react";

function Container() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioKey, setAudioKey] = useState(0); // forces re-render of audio element

  const handlePlay = () => {
    setIsPlaying(prev => !prev);
    setAudioKey(prev => prev + 1); // recreate the audio tag to reflect new state
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-[#1e1e1e] font-mono p-6 rounded-lg shadow-lg w-[350px]">
        {/* Console body */}
        <div className="flex flex-col items-center gap-4">
          <img className="w-40 border" src={mediaItems[0].image} alt="Album cover" />
          <label className="text-white">{mediaItems[0].title}</label>
          <button onClick={handlePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>

        {/* Conditionally render audio */}
        {isPlaying && (
          <audio
            key={audioKey}
            src={mediaItems[0].audio}
            autoPlay
            controls={false}
          />
        )}
      </div>
    </div>
  );
}

export default Container;
