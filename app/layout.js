import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./globals.css";
import "./responsive.css";
import { Montserrat } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationGetter from "./Components/LocationGetter";
import TawkToChat from "./Components/TawkToChat";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "500", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Top Web Design Company - FutureAVo",
  description:
    "FutureAVO is an award-winning top web design company with a team of professional web designers, and online strategists, delivering cutting-edge websites for businesses.",
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="2r0rez2bvmdeze79sztvxizcdy9yhy"
        />
      </head>
      <body
        suppressContentEditableWarning
        className={`${montserrat.className} overflow-x-hidden`}
      >
        <main>
          <Header />
          {children}
          <Footer />
          <LocationGetter />
          <TawkToChat />
        </main>
      </body>
    </html>
  );
}
