import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Button from "./Button";
import AnimatedTitle from "../gsap/AnimatedTitle";

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black 
    [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] 
    ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
  />
));
Card.displayName = "Card";

// Slot positions for stacked layout
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const FloatingImage = ({
  width = 700,
  height = 500,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 3000,
  pauseOnHover = true,
  skewAmount = 6,
  easing = "power1.inOut",
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  // images
  const images = ["/images/ui-ux-design.png", "/img/intro.jpg", "/images/hero.png"];
  const childArr = useMemo(
    () =>
      images.map((src, i) => (
        <Card key={i}>
          <img
            src={src}
            alt={`Creative workspace ${i + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
        </Card>
      )),
    []
  );

  const refs = useMemo(() => childArr.map(() => React.createRef()), [childArr.length]);
  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    );

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      }, undefined, "return");
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        { y: backSlot.y, duration: config.durReturn, ease: config.ease },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
        })
      : child
  );

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: black;
          }
        `}
      </style>
      <div id="story" className="min-h-screen w-full bg-black text-blue-50">
        <div className="flex size-full flex-col items-start py-10 pb-24 px-10 md:px-20">
          {/* Section Label */}
          <p className="font-thin text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
            
          </p>

          <div className="relative w-full flex flex-col md:flex-row items-start">
            {/* LEFT TEXT */}
            <div className="w-full md:w-1/2 pr-10 flex flex-col items-start text-left">
              <AnimatedTitle
                title="OUR VISION COMES TO LIFE"
                containerClass="
                  mt-5 pointer-events-none mix-blend-difference z-10
                  font-light
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                  tracking-wide
                  leading-tight
                  whitespace-normal
                  max-w-4xl
                  mr-24
                  -ml-43
                "
                style={{ fontSize: '2rem', lineHeight: '2.5rem', maxWidth: '56rem' }}
              />
              <p className="mt-6 max-w-md font-thin text-base text-violet-50 leading-loose text-left">
                Where creativity meets strategy, lies Aris and endless possibilities.
                Discover our approach and elevate your brand with innovative solutions
                tailored for success.
              </p>
              <Link to={"/products"}>
                <Button id="portfolio-btn" title="VIEW OUR PORTFOLIO" containerClass="mt-8" />
              </Link>
            </div>

            {/* RIGHT STACK */}
            <div
              ref={container}
              className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible 
                         max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] 
                         max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
              style={{ width, height }}
            >
              {rendered}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingImage;