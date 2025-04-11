import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import useAlert from "../hooks/useAlert";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rawan Atef",
          from_email: form.email,
          to_email: "atron944@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");
          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="w-full min-h-screen relative bg-gradient-to-b from-gray-900 via-blue-950 to-black text-white pt-40 pb-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-30 bg-[url('https://source.unsplash.com/random/1920x1080?abstract')] bg-cover bg-fixed bg-center animate-[parallax_60s_linear_infinite]"
          style={{ backgroundPositionY: "var(--bg-position, 0px)" }}
        />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Alert */}
      {alert.show && (
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Alert {...alert} />
        </motion.div>
      )}

      {/* Content (Constrained Width) */}
      <motion.div
        className="max-w-6xl mx-auto px-6 flex lg:flex-row flex-col gap-12 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Form */}
        <motion.div
          className="flex-1 min-w-0 flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold font-poppins tracking-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              Touch
            </span>
          </h1>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8 mt-12 bg-gray-900/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/40 shadow-lg"
          >
            <label className="text-gray-200 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="mt-3 bg-gray-800/50 text-white border border-gray-600/50 rounded-lg p-3 w-full focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 shadow-inner"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-gray-200 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="mt-3 bg-gray-800/50 text-white border border-gray-600/50 rounded-lg p-3 w-full focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 shadow-inner"
                placeholder="john@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-gray-200 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="mt-3 bg-gray-800/50 text-white border border-gray-600/50 rounded-lg p-3 w-full focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 shadow-inner"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <motion.button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg px-6 py-3 shadow-lg hover:from-cyan-300 hover:to-blue-400 focus:ring-4 focus:ring-cyan-300 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>
          </form>
        </motion.div>

        {/* Fox Canvas */}
        <motion.div
          className="lg:w-1/2 w-full lg:h-auto md:h-[600px] h-[400px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
            className="rounded-3xl border border-gray-700/40 shadow-lg"
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.6, 0.6, 0.6]}
              />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;