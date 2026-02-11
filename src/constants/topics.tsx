import { AiFillTool } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { FaShieldAlt, FaUserCircle, FaWallet } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

export const topics = [
  {
    id: 1,
    icon: <FaUserCircle />,
    title: "Account & Verification",
    des: "Setting up your wallet, KYC, login help.",
  },
  {
    id: 2,
    icon: <BiTransfer />,
    title: "Payments & Transfers",
    des: "Sending, receiving, currency exchange.",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "Cards & Wallet",
    des: "Virtual/physical card issues, top-ups, balance.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Security & Privacy",
    des: "Fraud, 2FA, account protection tips.",
  },
  {
    id: 5,
    icon: <FaShop />,
    title: "Merchant Support",
    des: "Payment links, API, settlements, dashboard.",
  },
  {
    id: 4,
    icon: <AiFillTool />,
    title: "Troubleshooting",
    des: "Common issues and quick fixes.",
  },
];
