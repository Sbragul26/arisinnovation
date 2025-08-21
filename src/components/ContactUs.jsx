import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { Link } from "react-router-dom";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const ContactUs = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          {/*}
          <ImageClipBox
            src="/images/digital.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/images/web.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
          */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
        {/*}
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
          */}
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-sans font-light text-xs uppercase tracking-[0.3em] text-gray-400">
            Partner with Aris
          </p>

         <AnimatedTitle
  title="let&#39;s cr<b>e</b>ate something <br /> extraordin<b>a</b>ry <br /> tog<b>e</b>ther."
  className="font-sans font-light !text-2xl xs:!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl xl:!text-7xl w-full !leading-[0.8] sm:!leading-[0.85] md:!leading-[0.9] tracking-wide px-2 sm:px-4"
/>
          <Link to={'/contact'}>
            <Button 
                title="start your project" 
                containerClass="mt-10 cursor-pointer" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;