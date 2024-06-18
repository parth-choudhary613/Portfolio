import React from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "UI/UX Design",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quaerat atque totam quisquam incidunt",
    link: "Learn more",
  },
  {
    name: "Development",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quaerat atque totam quisquam incidunt",
    link: "Learn more",
  },
  {
    name: "Designer",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quaerat atque totam quisquam incidunt",
    link: "Learn more",
  },
  {
    name: "Influencer",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates quaerat atque totam quisquam incidunt",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text-images*/}
          <motion.div
           variants={fadeIn("right", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm Freelancer in Mern-Stack Development over 1 year of experience
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* services */}
          <div>
            {/* service text */}
            <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
            
            >

              {services.map((services, index) => {
                // destructure service
                const { name, discription, link } = services;
                return(
                <div className=" border-b border-white/20 h-[146px] mb--[38px] flex" key={index}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                    <p className="font-secondary leading-tight">{discription}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a className="btn w-9 h-9 mb-[30px] flex justify-center items-center" href="
                    #"><FaArrowUpRightDots /></a>
                    <a className="text-gradient text-sm" href="
                    #">{link}</a>
                  </div>
                </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
