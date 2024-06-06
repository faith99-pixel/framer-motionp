'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {}
const ButtonFeedback = (props: Props) => {
    return (
        <section className=" h-[100vh] w-[90vw] bg-[#131519] p-10">
            <div className="hidden">
                <motion.button
                    className="relative -bottom-60 flex items-end mx-auto bg-[#FA7710] px-14 text-center rounded-xl text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'linear' }}
                >
                    SUBMIT FEEDBACK
                </motion.button>

            </div>


            <div className="h-[70vh] w-[60vw] bg-[#1E262F] mx-auto rounded-2xl">
                <div className="">
                    <Image src='/images/star.png' alt='' width={30} height={30} className="rounded-sm text-transparent"/>
                    <h3 className="text-center text-4xl font-bold ] mb-10">Feedback</h3>
                    <p className="text-center ] text-2xl font-bold mb-10"></p>

                    


                </div>
            </div>

        </section>

    )
}
export default ButtonFeedback