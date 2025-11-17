import { FaGift, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";

export const features = [
  {
    id: 1,
    icon: <IoIosFlash />,
    title: "Instant Payments",
    des: "Send and receive money instantly with secure technology. No delays, no hassle.",
  },
  {
    id: 2,
    icon: <FaGlobe />,
    title: "Borderless Transfers",
    des: "Send money across countries instantly.",
  },
  {
    id: 3,
    icon: <PiCoinsLight />,
    title: "Multi-Currency Wallet",
    des: "Hold, convert, and manage global currencies.",
  },
  {
    id: 4,
    icon: <FaGift />,
    title: "Cashback & Rewards",
    des: "Earn exciting cashback and rewards on every transaction. More savings, more benefits.",
  },
  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Bank-Grade Security",
    des: "Encrypted, verified, and protected 24/7.",
  },
  {
    id: 6,
    icon: <MdGTranslate />,
    title: "Language Options",
    des: "Fully bilingual platform for accessibility and ease of use. Switch languages with a single tap.",
  },
];
