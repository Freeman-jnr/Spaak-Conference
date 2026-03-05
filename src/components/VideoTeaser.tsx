import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export const VideoTeaser = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <div className={`w-full py-16 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`} />
      <section className="w-full px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-black"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Write-up */}
          <motion.div
            className="flex flex-col justify-center px-8 py-12 md:px-12 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-4">
              A Glimpse Into Spaak
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Where Africa's Future Takes Shape
            </h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6 v-text">
              The Spaak Conference brings together policymakers, thought leaders, 
              and innovators to address the continent's most pressing challenges. 
              From governance and economic transformation to technology and 
              sustainable development — this is where actionable ideas meet 
              real-world impact.
            </p>
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 v-text">
              Join a curated gathering designed to spark dialogue, forge 
              partnerships, and chart a bold path forward for Africa and beyond.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div
            className="relative w-full h-[50vh] md:h-auto md:min-h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-none"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/public/videos/Spaak Conference Teaser.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
