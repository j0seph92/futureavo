import Deliveries from "../../Components/Deliveries";
import PreFooter from "../../Components/PreFooter";
import FloatingIcons from "../../Components/FloatingIcons";

export const metadata = {
  title: "Top 6 Programming Languages ",
  description:
    "Do you want to expand your knowledge of programming? Read on to learn all about the top programming languages.",
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
