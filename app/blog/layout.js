import Deliveries from "../Components/Deliveries";
import PreFooter from "../Components/PreFooter";
import FloatingIcons from "../Components/FloatingIcons";

export const metadata = {
  title: "Blogs - FutureAVo",
  description:
    "FutureAVO is an award-winning top web design company with a team of professional web designers, and online strategists, delivering cutting-edge websites for businesses.",
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
