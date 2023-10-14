import React from "react";
import Noot from "./Noot";
import noots from "../data/Data";

const Noots: React.FC = () => {
  return (
    <div className="noot-wrap flex">
      {noots.map((noot) => (
        <Noot
          key={noot.name}
          type={noot.type as "script" | "web"}
          url={noot.url}
          preview={noot.preview}
          avatar_url={noot.avatar_url}
          banner_url={noot.banner_url}
          Description={noot.Description}
          classname={noot.classname}
          name={noot.name}
        />
      ))}
    </div>
  );
};

export default Noots;
