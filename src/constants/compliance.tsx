import { FaCreditCard, FaLock, FaUserCheck } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";

export const compliance = [
  {
    id: 1,
    icon: <FaCreditCard />,
    title: "PCI DSS",
    des: "Certified",
  },
  {
    id: 2,
    icon: <FaCertificate />,
    title: "ISO 27001",
    des: "Certified",
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "GDPR",
    des: "Compliant",
  },
  {
    id: 4,
    icon: <FaUserCheck />,
    title: "AML/KYC",
    des: "Verified.",
  },
  {
    id: 5,
    icon: <IoGlobeSharp />,
    title: "Global",
    des: "Monitoring",
  },
];
