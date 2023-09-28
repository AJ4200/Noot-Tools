interface NodeData {
  id: number;
  name: string;
  avatar: string;
  theme: {
    backgroundColor: string;
    textColor: string;
  };
}

export const nodesData: NodeData[] = [
  {
    id: 1,
    name: "Node 1",
    avatar: "avatar1.jpg",
    theme: {
      backgroundColor: "#FF0000",
      textColor: "#FFFFFF",
    },
  },
  {
    id: 2,
    name: "Node 2",
    avatar: "avatar2.jpg",
    theme: {
      backgroundColor: "#00FF00",
      textColor: "#000000",
    },
  },
  // Add more nodes as needed
];