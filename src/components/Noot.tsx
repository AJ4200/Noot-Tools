"use client"
import React, { useState } from "react";

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

  const handleHover = () => {
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const handleClick = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className={`noot ${classname}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img className="avatar" src={avatar_url} alt="Avatar" />
      {showContent ? (
        <div className="content">
          <img className="banner" src={banner_url} alt="Banner" />
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
        showPreview && <div className="preview">{preview}</div>
      )}
    </div>
  );
};

export default Noot;
