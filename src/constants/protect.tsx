import { FaChartArea } from "react-icons/fa";
import { FaArrowRightToBracket, FaKey, FaShield } from "react-icons/fa6";

export const protect = [
  {
    id: 1,
    icon: <FaArrowRightToBracket />,
    title: "Secure Sign-In",
    des: "Biometric authentication, 2FA, email & device verification.",
  },
  {
    id: 2,
    icon: <FaChartArea />,
    title: "Transaction Monitoring",
    des: "Real-time fraud detection and automated flags.",
  },
  {
    id: 3,
    icon: <FaShield />,
    title: "Data Protection",
    des: "End-to-end encrypted storage & communication.",
  },
  {
    id: 4,
    icon: <FaKey />,
    title: "Account Recovery",
    des: "Multi-step recovery with strict identity checks.",
  },
];
