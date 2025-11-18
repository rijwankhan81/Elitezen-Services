import { AiOutlineDatabase } from "react-icons/ai";
import { FaCloud, FaUsers } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { TbBinaryTree2 } from "react-icons/tb";

export const securityProtocols = [
  {
    id: 1,
    icon: <FaCloud />,
    title: "Distributed Cloud Hosting",
    des: "Global redundancy",
  },
  {
    id: 2,
    icon: <AiOutlineDatabase />,
    title: "Encrypted Databases",
    des: "Military-grade protection",
  },
  {
    id: 3,
    icon: <TbBinaryTree2 />,
    title: "Global CDN",
    des: "Fast & secure delivery",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "Dedicated Security Team",
    des: "Expert monitoring",
  },
  {
    id: 5,
    icon: <MdOutlineAccessTimeFilled />,
    title: "24/7 Monitoring",
    des: "Always vigilant",
  },
  {
    id: 6,
    icon: <FaShield />,
    title: "DDoS Protection",
    des: "Attack mitigation",
  },
];
