import { IoBag, IoCall, IoLogoWechat, IoMailSharp } from "react-icons/io5";

export const assistance = [
  {
    id: 1,
    icon: <IoMailSharp />,
    title: "General Support",
    des: "For app issues, transactions, or account questions",
    contact: "support@peddypay.com",
    btn: "Send Email",
  },
  {
    id: 2,
    icon: <IoBag />,
    title: "Business & Merchant",
    des: "For partnerships, merchant onboarding, or integrations.",
    contact: "business@peddypay.com",
    btn: "Send Email",
  },
  {
    id: 3,
    icon: <IoLogoWechat />,
    title: "Live Chat Assistance",
    des: "Instant help from our support specialists.",
    contact: "Available Now",
    btn: "Chat Now",
  },
  {
    id: 4,
    icon: <IoCall />,
    title: "Phone Support",
    des: "Available during business hours.",
    contact: "+1 (800) 555-0123",
    btn: "Call Now",
  },
];
