import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import CTA from "../components/CTA";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
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
        className="text-center mb-10 px-6 relative z-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl sm:text-7xl font-extrabold font-poppins tracking-tight mt-10">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Rawan Atef
          </span>{" "}
          👋
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
          Software Engineer based in Egypt, passionate about crafting innovative solutions through hands-on learning and collaborative development.
        </p>
      </motion.div>

      {/* Skills (Constrained Width) */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h3 className="text-3xl sm:text-4xl font-semibold font-poppins text-center text-cyan-200">
          My Skills
        </h3>
        <motion.div
          className="mt-12 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative group bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 flex justify-center items-center border border-gray-700/40 hover:border-cyan-300/60 transition-all duration-500 transform perspective-1000"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.1,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 10px 25px rgba(0, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />
              <span className="absolute -bottom-8 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Work Experience (Constrained Width) */}
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h3 className="text-3xl sm:text-4xl font-semibold font-poppins text-center text-cyan-200">
          Work Experience
        </h3>
        <p className="mt-6 text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
          I’ve collaborated with diverse teams, honing my skills and delivering impactful projects. Here’s my journey:
        </p>
        <motion.div
          className="mt-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <VerticalTimeline lineColor="rgba(0, 255, 255, 0.2)">
            {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  date={experience.date}
                  iconStyle={{
                    background: experience.iconBg,
                    boxShadow: "0 0 0 4px rgba(0, 255, 255, 0.3)",
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[70%] h-[70%] object-contain"
                      />
                    </div>
                  }
                  contentStyle={{
                    background: "rgba(17, 24, 39, 0.8)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0, 255, 255, 0.2)",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(0, 255, 255, 0.3)",
                  }}
                >
                  <div>
                    <h3 className="text-white text-lg font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-cyan-200 font-medium text-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-gray-300 font-normal text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
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

export default About;