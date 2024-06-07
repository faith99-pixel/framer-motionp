"use client"

import Button from "@/app/components/animatedbutton/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex items-center justify-center h-dvh w-full bg-[#131519]">
      <AnimatePresence mode="wait">
        {showForm ? (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -50, opacity: 100 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            key={"form"}
          >
            <div className="px-6 py-8 w-[351px] bg-[#202831] rounded-3xl text-white">
              <div className="p-2.5 bg-[#272e3a] rounded-full w-fit">
                <img
                  src="/images/Vector.svg"
                  alt=""
                  className=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="font-semibold text-lg mt-6">How did we do?</h3>

              <p className="text-sm text-white text-opacity-80 mt-2">
                Please let us know we did with your support request. All
                feedback is appreciated to help us improve our service!{" "}
              </p>
              <div className="flex justify-between mt-8 ">
                {[1, 2, 3, 4, 5].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center rounded-full bg-[#272e3a] hover:animate-bounce hover:animate-once hover:delay-60 hover:bg-[#495364] p-2 w-[44.75px] h-[44.75px] cursor-pointer text-white/50 hover:text-white/100"
                  >
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                title="Submit"
                onClick={() => setShowForm(false)}
                className="mt-8 max-w-[287px] mx-auto uppercase text-black tracking-wide transition-transform scale-y-2"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 100, opacity: 100 }}
            animate={{ y: -50 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            key={"button"}
          >
            <Button
              title="Submit feedback"
              onClick={() => setShowForm(true)}
              className=" max-w-[300px] px-10 py-2 mx-auto uppercase text-white tracking-wider text-sm font-medium transition-transform scale-y-2"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
