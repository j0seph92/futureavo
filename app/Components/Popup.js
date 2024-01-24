// components/Popup.js
import { useRef, useEffect, useState } from "react";
import GeneralForm from "./GeneralForm";
import HeadingMain from "./HeadingMain";
import { IoMdCloseCircle } from "react-icons/io";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const overlayRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && overlayRef.current === event.target) {
        // document.body.style.overflow = "auto";
        setIsClosing(true);

        // Add a delay before actually closing the popup to allow the animation to play
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 500); // Adjust the delay time according to your animation duration
      }
    };

    if (isOpen) {
      // document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const animationClass = isOpen ? "slide-in" : isClosing ? "slide-out" : "";

  return (
    <div
      className={`fixed w-full h-full  inset-0 z-20 flex items-center justify-center ${animationClass} ${
        isClosing ? "slide-out" : ""
      }`}
    >
      <div
        ref={overlayRef}
        className={`absolute z-10 w-full h-full !opacity-65 bg-[#000] `}
      ></div>
      <div className="relative z-30 items-center justify-center w-screen px-5 py-10 m-auto __gradientapp md:w-full lg:w-3/12 h-max">
        <button
          type="button"
          onClick={onClose}
          className="h-[30px] w-[30px] rounded-full absolute -top-3 -right-3 bg-black"
        >
          <IoMdCloseCircle className="text-3xl text-white rounded focus:outline-none focus:shadow-outline-blue" />
        </button>
        <div className="">
          <HeadingMain
            txt="get free consultation"
            extclass="text-center text-white"
          />
          <GeneralForm />
        </div>
      </div>
    </div>
  );
};

export default Popup;
