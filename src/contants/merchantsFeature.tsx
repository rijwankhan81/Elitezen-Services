import { FaCreditCard, FaGift } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoIosFlash, IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineQrCodeScanner } from "react-icons/md";

export const mfeatures = [
  {
    id: 1,
    icon: <IoIosFlash />,
    title: "Instant Settlements",
    des: "Receive funds directly in your linked bank or MFS account within minutes",
  },
  {
    id: 2,
    icon: <FaCreditCard />,
    title: "All Payment Methods",
    des: "Accept bKash, Nagad, Rocket, Cards, and Bank Transfers seamlessly",
  },
  {
    id: 3,
    icon: <GoGraph />,
    title: "Smart Dashboard",
    des: "Track sales, transactions, and customer data in real-time analytics",
  },
  {
    id: 4,
    icon: <MdOutlineQrCodeScanner />,
    title: "QR & Payment Links",
    des: "Collect payments easily with personalized QR codes or shareable links",
  },
  {
    id: 5,
    icon: <FaGift />,
    title: "Cashback & Rewards",
    des: "Get merchant incentives and loyalty bonuses on each transaction",
  },
  {
    id: 6,
    icon: <IoMdPhonePortrait />,
    title: "Simple Merchant App",
    des: "Manage payments, refunds, and analytics from your phone anywhere",
  },
];
