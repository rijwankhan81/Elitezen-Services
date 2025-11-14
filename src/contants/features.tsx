import { BsBank2 } from "react-icons/bs";
import { FaGift, FaShieldAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";

export const features = [
  {
    id: 1,
    icon: <IoIosFlash />,
    title: "Instant Payments",
    des: "Send and receive money instantly with secure technology. No delays, no hassle.",
  },
  {
    id: 2,
    icon: <BsBank2 />,
    title: "Bank & MFS Integration",
    des: "Linked with bKash, Nagad, Rocket, and all major banks in Bangladesh for seamless connectivity.",
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Secure Transactions",
    des: "Bank-grade encryption and multi-layer security protect every transaction you make",
  },
  {
    id: 4,
    icon: <FaGift />,
    title: "Cashback & Rewards",
    des: "Earn exciting cashback and rewards on every transaction. More savings, more benefits.",
  },
  {
    id: 5,
    icon: <FaShop />,
    title: "Merchant Solutions",
    des: "Complete payment solutions for businesses. Accept payments, track sales, grow faster.",
  },
  {
    id: 6,
    icon: <MdGTranslate />,
    title: "Bangla & English",
    des: "Fully bilingual platform for accessibility and ease of use. Switch languages with a single tap.",
  },
];
