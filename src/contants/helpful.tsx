import { FaCreditCard, FaLock, FaUserPlus } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { IoIosSend } from "react-icons/io";

export const helpful = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: "Setting up your PeddyPay account",
    des: "Complete guide to get started",
  },
  {
    id: 2,
    icon: <IoIosSend />,
    title: "Sending money internationally",
    des: "Learn about cross-border transfers",
  },
  {
    id: 3,
    icon: <FaCreditCard />,
    title: "Using virtual cards",
    des: "Master your virtual card features",
  },
  {
    id: 4,
    icon: <GoGraph />,
    title: "Merchant dashboard walkthrough",
    des: "Navigate your business tools",
  },
  {
    id: 5,
    icon: <GrTransaction />,
    title: "Smart currency conversion",
    des: "Get the best exchange rates",
  },
  {
    id: 6,
    icon: <FaLock />,
    title: "Security best practices",
    des: "Keep your account protected",
  },
];
