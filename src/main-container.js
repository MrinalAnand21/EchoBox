import mediaItems from "./mediaItems";
import { useState, useRef, useEffect } from "react";

function Container() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioKey, setAudioKey] = useState(0);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    setAudioKey((prev) => prev + 1);
  };

  const previous = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
    setAudioKey((prev) => prev + 1);
    setIsPlaying(true);
  };

  const forward = () => {
    setIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
    setAudioKey((prev) => prev + 1);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [audioKey]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-white font-mono p-6 rounded-lg shadow-lg w-[350px]">
        {/* Logo */}
        <div className="p-5 flex justify-center">
          <img src="logo.png" alt="ECHO-BOX" className="w-72 h-auto" />
        </div>

        {/* Audio Image + Controls */}
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-40 border"
            src={mediaItems[index].image}
            alt="Album cover"
          />
          <label className="text-gray-900">{mediaItems[index].title}</label>
          <div className="flex gap-1">
            <button onClick={previous}>◀◀</button>
            <button onClick={handlePlay}>{isPlaying ? "❚❚" : "▶"}</button>
            <button onClick={forward}>▶▶</button>
          </div>

          {/* Progress Bar */}
          <div className="w-full">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              className="w-full"
              readOnly
            />
            <div className="flex justify-between text-xs text-gray-800 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Audio Element */}
        {isPlaying && (
          <audio
            key={audioKey}
            ref={audioRef}
            src={mediaItems[index].audio}
            autoPlay
            controls={false}
          />
        )}
      </div>
    </div>
  );
}

export default Container;
