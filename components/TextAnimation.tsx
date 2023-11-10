"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";
import useAnimationText from "@/hooks/useAnimationText";

export default function TextAnim() {
  const [finish1, setFinish1] = useState(false);
  const [finish2, setFinish2] = useState(false);
  const [finish3, setFinish3] = useState(false);

  const { isFinished, onFinished } = useAnimationText();

  const text1 = `\[._.]/ Hey there I'm Max Vo`;
  const text2 = `A "Full Stack" Engineer`;
  const text3 = `Welcome to my world`;
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const rounded3 = useTransform(count3, (latest) => Math.round(latest));

  const displayText1 = useTransform(rounded1, (latest) =>
    text1.slice(0, latest)
  );
  const displayText2 = useTransform(rounded2, (latest) =>
    text2.slice(0, latest)
  );
  const displayText3 = useTransform(rounded3, (latest) =>
    text3.slice(0, latest)
  );

  useEffect(() => {
    const control1 = animate(count1, text1.length, {
      type: "tween",
      duration: 4,
      ease: "easeInOut",
      onComplete: () => setFinish1(true)
    });
    const control2 = animate(count2, text2.length, {
      type: "tween",
      duration: 4,
      delay: 5,
      ease: "easeInOut",
      onComplete: () => setFinish2(true)
    });
    const control3 = animate(count3, text3.length, {
      type: "tween",
      duration: 4,
      delay: 11,
      ease: "easeInOut",
      onComplete: () => {
        setFinish3(true);
        onFinished();
      }
    });
    control3.stop;
  }, []);

  return (
    <div>
      <p><motion.span>{displayText1}</motion.span><CursorBlinker className={ finish1 ? 'hidden' : '' }/></p>
      { finish1 && <p><span className='text-green-300'>$ </span><motion.span>{displayText2}</motion.span><CursorBlinker className={ finish2 ? 'hidden' : '' }/></p> }
      { finish2 && <p><span className='text-green-300'>$ </span><motion.span>{displayText3}</motion.span><CursorBlinker className={ finish3 ? 'hidden' : '' }/></p> }
    </div>
  );
}