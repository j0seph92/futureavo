import Deliveries from "../../Components/Deliveries";
import PreFooter from "../../Components/PreFooter";
import FloatingIcons from "../../Components/FloatingIcons";

export const metadata = {
  title: "On-Device Generative AI: What App Developers Need to Know?",
  description:
    "Are you interested in learning all about on-device generative AI? Our expert app developers have got you covered!",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Deliveries />
      <PreFooter />
      <FloatingIcons btnColor="__gradientBg2" />
    </>
  );
}
