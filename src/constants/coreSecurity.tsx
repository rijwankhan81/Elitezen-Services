import { FaFingerprint, FaLock, FaUserLock } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";

export const coreSecurity = [
  {
    id: 1,
    icon: <FaLock />,
    title: "End-to-End Encryption",
    des: "Every transaction is encrypted from wallet to server using industry-standard 256-bit protocols.",
  },
  {
    id: 2,
    icon: <FaFingerprint />,
    title: "Multi-Layer Authentication",
    des: "Secure login through biometrics, 2FA, OTP, and device verification.",
  },
  {
    id: 3,
    icon: <IoMdTimer />,
    title: "Real-Time Fraud Detection",
    des: "AI-powered systems actively monitor unusual activity and flag suspicious transactions.",
  },
  {
    id: 4,
    icon: <FaUserLock />,
    title: "Zero-Knowledge Architecture",
    des: "Your data is always private — only you control your financial information.",
  },
];
