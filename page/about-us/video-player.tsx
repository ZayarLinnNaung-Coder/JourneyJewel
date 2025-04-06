"use client";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = () => {
  return (
    <div className=" h-[200px] md:h-[300px] lg:h-[450px]">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={"https://www.youtube.com/watch?v=JZG7Qtz0IWg&vq=hd720"}
        playing
        controls
      />
    </div>
  );
};

export default VideoPlayer;
