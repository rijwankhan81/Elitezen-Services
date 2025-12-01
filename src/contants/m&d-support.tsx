import {
  FaGlassMartiniAlt,
  FaPuzzlePiece,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { TbApi } from "react-icons/tb";

export const support = [
  {
    id: 1,
    icon: <TbApi />,
    title: "API Documentation",
    des: "Complete REST API reference and integration guides",
  },
  {
    id: 2,
    icon: <FaRegQuestionCircle />,
    title: "Webhook References",
    des: "Real-time event notifications and callbacks",
  },
  {
    id: 3,
    icon: <FaPuzzlePiece />,
    title: "Integration Guides",
    des: "Step-by-step tutorials for popular platforms",
  },
  {
    id: 4,
    icon: <FaGlassMartiniAlt />,
    title: "Sandbox Access",
    des: "Test environment for safe development",
  },
];
