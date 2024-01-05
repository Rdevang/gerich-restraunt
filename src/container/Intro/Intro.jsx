import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [playvideo, setplayvideo] = useState(false);
  function handlevideo() {
    setplayvideo((prev) => !prev);
    if (playvideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        muted
        controls={false}
      ></video>
      <div className="app__video-overlay flex__center ">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handlevideo}
        >
          {playvideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
