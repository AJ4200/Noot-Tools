"use client";
import React, { useState, useEffect } from "react";

type NootProps = {
  type: "script" | "web";
  url: string;
  preview: string;
  avatar_url: string;
  banner_url: string;
  Description: string;
  classname: string;
  name: string;
};

const Noot: React.FC<NootProps> = ({
  type,
  url,
  preview,
  avatar_url,
  banner_url,
  Description,
  classname,
  name,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Unique velocity and position for each Noot
  const [velocity, setVelocity] = useState({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 });
  const [position, setPosition] = useState({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });

  const handleHover = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const handleClick = () => {
    setShowContent(!showContent);
  };

useEffect(() => {
  const handleAnimation = () => {
    if (!showContent) {
      setPosition((prevPosition) => {
        const newPosition = {
          x: prevPosition.x + velocity.x,
          y: prevPosition.y + velocity.y,
        };

        // Bounce off the walls
        if (newPosition.x >= window.innerWidth || newPosition.x <= 0) {
          setVelocity((prevVelocity) => ({ ...prevVelocity, x: -prevVelocity.x }));
        }

        if (newPosition.y >= window.innerHeight || newPosition.y <= 0) {
          setVelocity((prevVelocity) => ({ ...prevVelocity, y: -prevVelocity.y }));
        }

        return newPosition;
      });
    }
  };

  const animationFrame = requestAnimationFrame(handleAnimation);

  return () => cancelAnimationFrame(animationFrame);
}, [velocity, showContent]);


  return (
    <div
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`${classname} border flex w-max rounded-full p-4 h-max ball`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img className="w-20 h-20 rounded-full border" src={avatar_url} alt="Avatar" />
      {showContent ? (
        <div className="border p-2 rounded-full w-max h-max space-y-2">
          <img className="border h-20 aspect-video mt-4 rounded-full" src={banner_url} alt="Banner" />
          <h3 className="name">{name}</h3>
          <p className="description">{Description}</p>
          {type === "script" ? (
            <>
              <button className="copy">Copy Script</button>
              <button className="download">Download File</button>
            </>
          ) : (
            <a
              className="visit"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          )}
        </div>
      ) : (
        showPreview && <div className="border w-max h-max rounded-full p-1 ml-2 mr-6 mt-2">{preview}</div>
      )}
    </div>
  );
};

export default Noot;
