import { motion, useMotionValue, useTransform } from "framer-motion";
import { NodeData } from "../../data/NodesData";

interface NodeProps {
  node: NodeData;
}

const Node: React.FC<NodeProps> = ({ node }) => {
  const x = useMotionValue(Math.random() * window.innerWidth);
  const y = useMotionValue(Math.random() * window.innerHeight);

  const hoverScale = useTransform(x, [0, window.innerWidth], [1, 1.2]);
  const hoverOpacity = useTransform(x, [0, window.innerWidth], [1, 0.8]);

  return (
    <motion.div
      className="node"
      style={{
        backgroundColor: node.theme.backgroundColor,
        color: node.theme.textColor,
        scale: hoverScale,
        opacity: hoverOpacity,
      }}
      initial={{ x: x.get(), y: y.get() }}
      animate={{ x: x, y: y }}
      transition={{
        duration: 5,
        loop: Infinity,
        repeatDelay: 1,
      }}
      whileHover={{ scale: 1, opacity: 1 }}
    >
      <img src={node.avatar} alt={node.name} />
      <span>{node.name}</span>
    </motion.div>
  );
};

export default Node;
