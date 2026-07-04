"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/60 border-white/10 shadow-lg" : "bg-black/20 border-white/5"}
        backdrop-blur-md border-b`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-black font-bold text-sm">
            DT
          </div>

          <span className="text-white font-semibold tracking-tight">
            Dariusz Tulik · IT Consultant
          </span>
        </div>
  
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#services" className="hover:text-white transition">Expertise</a>
            <a href="#about" className="hover:text-white transition">About</a>

            <a
              href="https://www.linkedin.com/in/dariusz-tulik-b58b65a8/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
  
      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-20 pt-28">
  
        {/* HERO */}
        <motion.section
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* LEFT SIDE */}
          <div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-2 h-2 bg-sky-400 rounded-full opacity-70 mb-6"
            />

            <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
              IT Consultant / Software Architect
            </p>

            <h1 className="text-5xl lg:text-4xl font-semibold tracking-tight mb-6 text-white leading-tight">
              ImagiNET Dariusz Tulik
            </h1>

            <p className="opacity-60 mb-6 max-w-lg">
              Based in Poland · Enterprise systems · Backend architecture
            </p>

            <p className="text-l text-sky-400 mb-3">
              I help teams design and build reliable, scalable backend systems. Focused on backend architecture, performance, and long-term system stability.
            </p>

            <div className="h-px w-16 bg-white/10 mb-8" />

            <div className="flex gap-4">
              <a
                href="mailto:dariusz.tulik@imaginet.pl"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-black font-semibold hover:scale-105 transition"
              >
                Contact me
              </a>

              <a
                href="https://www.linkedin.com/in/dariusz-tulik-b58b65a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:border-white/40 transition"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group isolate"
          >
            {/* glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-2xl rounded-2xl opacity-60 group-hover:opacity-90 transition" />

            {/* image wrapper */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20">
              <Image
                src="/hero.png"
                alt="Backend systems architecture"
                width={1200}
                height={700}
                className="block w-full h-auto max-h-[320px] md:max-h-none object-cover group-hover:scale-[1.02] transition duration-500"
              />
            </div>

            {/* label */}
            <p className="text-xs opacity-40 mt-3 text-center tracking-wide">
              Backend architecture • Scalability • System design
            </p>
          </motion.div>

        </motion.section>

        <div className="h-px w-full bg-white/10 md:bg-white/5 my-20" />
  
        {/* SERVICES */}
        <motion.section
          className="mb-24"
          id="services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8">Expertise</h2>
  
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {[
              "System architecture",
              "Backend (.NET)",
              "Performance optimization",
              "Debugging complex systems",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl bg-white/5 border border-white/15 md:border-white/15 md:border-white/10
                  backdrop-blur-md hover:bg-white/10 hover:-translate-y-1
                  hover:border-sky-400 transition-all duration-300 ease-out
                  hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              >
                {item}
              </div>
            ))}
            </div>
          </motion.section>

          <div className="h-px w-full bg-white/5 my-20" />

          {/* WHY ME */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-semibold mb-8">Why companies work with me</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="font-semibold mb-2">Real systems experience</h3>
                <p className="text-sm opacity-70">
                  I work with production systems, not toy projects.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="font-semibold mb-2">Pragmatic approach</h3>
                <p className="text-sm opacity-70">
                  No overengineering. Just what works in real environments.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h3 className="font-semibold mb-2">Business impact</h3>
                <p className="text-sm opacity-70">
                  I focus on outcomes that improve system stability and delivery speed.
                </p>
              </div>

            </div>
          </motion.section>
  
        {/* ABOUT */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-6">About</h2>
  
          <p className="opacity-80 leading-relaxed max-w-2xl">
            I help teams build and maintain reliable backend systems with a focus on scalability, performance, and simplicity.
            Clean architecture, pragmatic decisions, and systems that survive production.
          </p>
        </section>
  
      </main>
    </>
  );
}