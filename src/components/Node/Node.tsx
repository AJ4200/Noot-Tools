tsx
// Node.tsx

import { motion } from "framer-motion";
import { NodeData } from "./NodesData";

interface NodeProps {
  node: NodeData;
}

const Node: React.FC<NodeProps> = ({ node }) => {
  return (
    <motion.div
      className="node"
      style={{
        backgroundColor: node.theme.backgroundColor,
        color: node.theme.textColor,
      }}
      initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
      animate={{
        x: [Math.random() * window.innerWidth],
        y: [Math.random() * window.innerHeight],
      }}
      transition={{
        duration: 5,
        loop: Infinity,
        repeatDelay: 1,
      }}
    >
      <img src={node.avatar} alt={node.name} />
      <span>{node.name}</span>
    </motion.div>
  );
};

export default Node;