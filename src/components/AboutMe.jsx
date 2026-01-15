import React, { useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfilePic from "../assests/Abdullah.jpg";
import SocialMedia from "./SocialMedia"

// React Icons 
import {
  FaBolt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaDownload,
  FaExternalLinkAlt,
  FaCubes,
  FaLayerGroup,
  FaChevronDown,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

// Static data
const heroSkills = [
  "React & Node.js",
  "UI/UX Design",
  "MERN STACK",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Solutions",
];


const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaCubes /> },
  { name: "Tailwind CSS", icon: <FaLayerGroup /> },
  { name: "Framer Motion", icon: <FaBolt /> },
];



export default function AboutMe() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSkillIndex((s) => (s + 1) % heroSkills.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden my-4">

      <section  className="relative overflow-hidden pb-28">
        <div className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Side: Text & Info */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium text-gray-600">
                  <span className="w-12 h-px bg-red-500"></span> Hello, I'm
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Muhammad</span>
                  <span className="text-red-600 block">Abdullah</span>
                </h1>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-2xl lg:text-3xl font-semibold text-gray-700 h-10"
                  >
                    {heroSkills[skillIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-2xl">
                  I'm a passionate full-stack developer who transforms ideas into
                  exceptional digital experiences. With expertise in modern web
                  technologies and a keen eye for design, I build scalable,
                  user-centric applications that drive business growth.
                </p>
                <p className="text-gray-600 leading-relaxed max-w-2xl text-justify">
                  I combine technical excellence with creative problem-solving,
                  ensuring every project not only meets requirements but exceeds
                  expectations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/recent-work"
                  className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> View My Work
                </a>
                <a
                  href="/Abdullah_CV.pdf"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <FaDownload /> Download CV
                </a>
              </div>

              <div className="pt-4">
                <SocialMedia />
              </div>
            </motion.div>

            {/* Right Side: Profile Image */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <img
                    src={ProfilePic}
                    alt="Abdullah Khan"
                    className="w-80 h-96 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section  className="">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h3
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8"
          >
            Core Technologies
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:from-red-100 hover:to-pink-100 hover:text-red-700 transition-all duration-300 cursor-pointer"
              >
                {tech.icon} {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      

      <section  className="">
        <div className="max-w-5xl mx-auto p-6">
          <motion.div
            className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">
                  Let's build something great
                </h3>
               </div>
              <div className="flex md:justify-end gap-3">
                <a
                  href="mailto:abdullahworld111@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                >
                  <FaEnvelope /> Email me
                </a>
                <a
                  href="tel:+923156215289"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-600 hover:text-red-600 transition"
                >
                  <FaPhone /> Call me
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
