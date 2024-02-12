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
  title: "Premier Web Design & Development Solutions – Future AVO",
  description:
    "Future AVO: Elevate your brand with our premier web design & web development team, delivering top-tier solutions and unmatched passion.",
  robots: {
    index: false,
    follow: false,
    // nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="2r0rez2bvmdeze79sztvxizcdy9yhy"
        />
        <meta
          name="google-site-verification"
          content="6ZGb3gtjrwlfUwgu-FYEMXS5JJPWrltiyVwIihIfqTM"
        />
        {/* Start of GTM container code Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WT78QM5P');`,
          }}
        />
        {/* End of GTM container code Head */}
      </head>
      <body
        suppressContentEditableWarning
        className={`${montserrat.className} overflow-x-hidden`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WT78QM5P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
