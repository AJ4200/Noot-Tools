import Node from "./Node";
import { nodesData } from "./NodesData";

const Nodes: React.FC = () => {
  return (
    <div className="nodes">
      {nodesData.map((node) => (
        <Node key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Nodes;
