import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="w-full min-h-screen relative bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white py-24 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-30 bg-[url('https://source.unsplash.com/random/1920x1080?abstract')] bg-cover bg-fixed bg-center animate-[parallax_60s_linear_infinite]"
          style={{
            backgroundPositionY: "var(--bg-position, 0px)",
          }}
        />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Header (Full-Width) */}
      <motion.div
        className="text-center mb-20 px-6 relative z-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold font-poppins tracking-tight mt-10">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Projects
          </span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
          These projects are my pride and joy, blending creativity and tech. They’re mostly open-source—jump in, explore the code, or add your spark to make them shine brighter. Let’s create together!
        </p>
      </motion.div>

      {/* Project Grid (Constrained Width) */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="relative group bg-gray-900/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/40 hover:border-cyan-300/60 transition-all duration-600 transform perspective-1000"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            whileHover={{
              scale: 1.04,
              rotateX: 4,
              rotateY: 4,
              boxShadow: "0 12px 35px rgba(0, 255, 255, 0.25)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Project Image */}
            {project.imageUrl && (
              <div className="w-full h-52 overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-1200"
                />
                {/* Reflective Shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-600" />
              </div>
            )}

            {/* Content */}
            <div className="p-7">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center transform group-hover:rotate-10 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-9 h-9 object-contain"
                  />
                </div>
              </div>
              <h4 className="text-xl font-poppins font-semibold text-white text-center">
                {project.name}
              </h4>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed text-center">
                {project.description}
              </p>
              <div className="mt-5 flex justify-center items-center gap-3">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cyan-200 hover:text-cyan-100 text-base transition-colors duration-300"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 object-contain transform group-hover:translate-x-2 transition-transform duration-400"
                />
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Divider (Constrained Width) */}
      <hr className="max-w-6xl mx-auto border-gray-700/50 my-16 relative z-10" />

      {/* CTA (Constrained Width) */}
      <motion.div
        className="max-w-6xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <CTA />
      </motion.div>
    </section>
  );
};

export default Projects;