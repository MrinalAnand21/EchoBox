import mediaItems from "./mediaItems";
import { useRef } from "react";

function Container() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-[#1e1e1e]  font-mono p-6 rounded-lg shadow-lg w-[350px]">
      
        {/* Console body */}
        <div className="flex flex-col items-center gap-4">
          <img className="w-40 border " src={mediaItems[0].image} alt="Album cover" />
          <label className="text-white">{mediaItems[0].title}</label>
          <button onClick={handlePlay}>Play</button>
        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} src={mediaItems[0].audio} />
      </div>
    </div>
  );
}

export default Container;