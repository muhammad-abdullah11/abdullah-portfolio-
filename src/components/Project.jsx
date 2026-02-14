import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaPaintBrush, FaCheckCircle, FaChevronRight } from "react-icons/fa";
import AllProjects from "../assests/projects.json";

const Project = () => {
  const { id } = useParams();
  const project = AllProjects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2d3a33]">Project not found</h2>
          <Link to="/recent-work" className="px-8 py-3 bg-[#a4c3b2] text-white rounded-full font-bold">
            Back to recent-work
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-[#fbfcfa] text-[#2d3a33] selection:bg-[#a4c3b2] selection:text-white overflow-x-hidden min-h-screen font-display" ref={containerRef}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] bg-[#a4c3b2] z-[1000] origin-left shadow-[0_0_20px_rgba(164,195,178,0.5)]"
        style={{ scaleX: smoothProgress }}
      />

      <main>
        <section className="relative min-h-[100vh] lg:min-h-[120vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 lg:px-20 bg-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-[-20%] left-[-10%] w-[100%] md:w-[80%] h-[80%] bg-[#a4c3b2]/10 blur-[100px] md:blur-[150px] rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 pt-24 pb-20">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8"
              >
                <span className="px-6 py-2 rounded-full border border-[#a4c3b2]/20 bg-white shadow-sm text-[10px] font-black uppercase tracking-[0.4em] text-[#6b8e7d]">
                  {project.category}
                </span>
              </motion.div>

              <div className="overflow-hidden mb-8 md:mb-12">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tightest text-[#1b2521] uppercase"
                >
                  {project.title}
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-5xl aspect-video mb-12 md:mb-20 group"
              >
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-[#a4c3b2]/20 to-transparent blur-xl md:blur-2xl rounded-[2rem] md:rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative h-full overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-white">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="max-w-3xl mb-12"
              >
                <p className="text-[#4a5d52] text-lg md:text-2xl leading-relaxed font-medium italic opacity-80 px-4">
                  "{project.description}"
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center px-4">
                {project.links.live && (
                  <MagneticButton href={project.links.live} primary>
                    Launch <FaChevronRight className="text-lg" />
                  </MagneticButton>
                )}
                {project.links.github && (
                  <MagneticButton href={project.links.github}>
                    Code <FaGithub className="text-2xl" />
                  </MagneticButton>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 bg-red-400 border-y border-[#f1f5f3]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
              <DetailCard
                title="Structure"
                subtitle="The Digital Backbone"
                icon={<FaCode />}
                color="#a4c3b2"
              >
                <div className="space-y-10 md:space-y-12">
                  <StackCategory title="Visual Interface" items={project.tech.frontend} />
                  <StackCategory title="Logic Engine" items={project.tech.backend} />
                  <StackCategory title="Utility Hub" items={project.tech.services} />
                </div>
              </DetailCard>

              <DetailCard
                title="Philosophy"
                subtitle="Experience Strategy"
                icon={<FaPaintBrush />}
                color="#ccd5ae"
                dark
              >
                <div className="grid gap-8 md:gap-10">
                  {project.ui_features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 md:gap-6 group/item"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-[#a4c3b2] text-lg md:text-xl font-black">
                        0{i + 1}
                      </div>
                      <p className="text-white/80 font-medium text-sm md:text-base leading-snug">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </DetailCard>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfcfa] py-10 md:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="hidden md:block text-[12rem] font-black text-[#1b2521] tracking-tighter mb-4 leading-none opacity-[0.03] absolute left-0 right-0 top-1/2 -translate-y-1/2 uppercase select-none pointer-events-none">
                Artifacts
              </h2>
              <h2 className="text-5xl md:text-9xl font-black text-[#1b2521] tracking-tighter relative z-10 uppercase">
                Visuals
              </h2>
              <div className="w-24 h-[1px] bg-[#a4c3b2] mx-auto mt-6 md:mt-10" />
            </motion.div>
          </div>

          <div className="space-y-8 md:space-y-24 pb-20">
            {project.images.map((img, i) => (
              <ParallaxMedia
                key={i}
                src={img}
                index={i}
                type={i % 2 === 0 ? "left" : "right"}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-white/98 backdrop-blur-3xl p-4 md:p-6 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Selected Artifact"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl md:rounded-[4rem] shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 md:top-0 md:right-0 p-4 md:p-10 text-[#2d3a33] text-3xl md:text-6xl"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const MagneticButton = ({ children, href, primary }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -5, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 md:px-16 py-4 md:py-8 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] flex items-center gap-4 transition-all duration-500 shadow-xl ${primary
      ? "bg-[#a4c3b2] text-white"
      : "bg-white text-[#4a5d52] border-2 border-[#f1f5f3] hover:border-[#a4c3b2]"
      }`}
  >
    {children}
  </motion.a>
);

const DetailCard = ({ title, subtitle, icon, color, children, dark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-20 overflow-hidden border border-[#f1f5f3] shadow-xl ${dark ? "bg-[#1b2521] text-white" : "bg-[#fbfcfa] text-[#1b2521]"}`}
    >
      <header className="flex flex-col mb-12 md:mb-20 relative z-10">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center text-white text-2xl md:text-3xl mb-8 shadow-lg"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <h3 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter uppercase">{title}</h3>
        <p className="text-[#a4c3b2] font-black uppercase tracking-[0.4em] text-[10px]">{subtitle}</p>
      </header>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const StackCategory = ({ title, items }) => (
  <div className="group/cat">
    <h4 className="text-xl font-black uppercase tracking-[0.5em] text-[#a4c3b2] mb-6 md:mb-8">{title}</h4>
    <div className="flex flex-wrap gap-3 md:gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="px-6 md:px-8 py-2 rounded-xl md:rounded-2xl bg-white border border-[#f1f5f3] text-[#2d3a33] font-bold text-xs shadow-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const ParallaxMedia = ({ src, index, type, onClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // More subtle motion for better visibility, especially on mobile
  const x = useTransform(scrollYProgress, [0, 1], type === "left" ? [-40, 40] : [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <div ref={ref} className="max-w-[100vw] overflow-visible flex items-center justify-center">
      <motion.div
        style={{ x, opacity, scale }}
        className="w-full max-w-6xl relative rounded-2xl md:rounded-[4rem] overflow-hidden shadow-2xl bg-white group cursor-zoom-in mx-4 md:mx-6"
        onClick={onClick}
      >
        <img
          src={src}
          alt={`Focus ${index + 1}`}
          className="w-full h-auto object-contain max-h-[70vh] md:max-h-[85vh] mx-auto p-2 md:p-8"
        />

        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <span className="text-[#a4c3b2] text-5xl md:text-8xl font-black italic opacity-20 select-none">
            0{index + 1}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;