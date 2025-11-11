import { FaGift, FaShieldAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";

export const features = [
  {
    id: 1,
    icon: <IoIosFlash />,
    title: "Instant Payments",
    des: "Send and receive money instantly with secure technology. No delays, no hassle.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    des: "Bank-grade encryption and multi-layer security protect every transaction you make",
  },
  {
    id: 3,
    icon: <FaGift />,
    title: "Cashback & Rewards",
    des: "Earn exciting cashback and rewards on every transaction. More savings, more benefits.",
  },
  {
    id: 4,
    icon: <FaShop />,
    title: "Merchant Solutions",
    des: "Complete payment solutions for businesses. Accept payments, track sales, grow faster.",
  },
];
