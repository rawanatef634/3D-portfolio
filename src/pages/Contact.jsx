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
          <h1 className="text-5xl sm:text-7xl font-extrabold 
