import Deliveries from "../../Components/Deliveries";
import PreFooter from "../../Components/PreFooter";
import FloatingIcons from "../../Components/FloatingIcons";

export const metadata = {
  title: "The Ultimate Guide to Website Development",
  description:
    "Get a clear understanding of website development as the leading web developers at our firm share expert insights.",
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
