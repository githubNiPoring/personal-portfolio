import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";

interface AboutProps {
  isActive: boolean;
}

function About({ isActive }: AboutProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "2", label: "Projects Completed" },
    { number: "2", label: "Years Experience" },
    { number: "0", label: "Clients" },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building robust applications with modern web technologies and best practices.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ensuring fast, responsive, and efficient applications across all devices.",
    },
  ];

  return (
    <motion.div
      className="min-h-screen w-full p-5 md:p-10 bg-main flex flex-col justify-center overflow-hidden"
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="mb-12" variants={slideInVariants}>
        <motion.h1
          className="bokis text-5xl md:text-7xl text-active tracking-wider mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
        >
          ABOUT ME
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-active rounded-full"
          initial={{ width: 0 }}
          animate={isActive ? { width: 96 } : { width: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.p className="helvetica text-active text-lg leading-relaxed">
            I'm a passionate full-stack developer and graphic designer with a
            keen eye for creating seamless digital experiences. With expertise
            in modern web technologies and design principles, I transform ideas
            into elegant solutions.
          </motion.p>

          <motion.p className="helvetica text-active text-lg leading-relaxed">
            My journey in tech started with a curiosity to build things, and
            it's evolved into a commitment to delivering high-quality products
            that make a real impact. I believe in continuous learning and
            staying ahead of industry trends.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 mt-8"
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="border-2 border-active rounded-lg p-4 text-center hover:bg-active/10 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <p className="bokis text-active text-3xl md:text-4xl mb-1">
                  {stat.number}
                </p>
                <p className="helvetica text-active text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Skills */}
        <motion.div className="space-y-6" variants={containerVariants}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                className="group border-2 border-active rounded-xl p-6 hover:bg-active/5 transition-all cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  boxShadow: "0 10px 30px rgba(194, 54, 67, 0.15)",
                }}
              >
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="p-3 bg-active/20 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-active" />
                  </motion.div>
                  <div>
                    <h3 className="helvetica-bold text-active text-lg mb-2">
                      {skill.title}
                    </h3>
                    <p className="helvetica text-active text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-active via-active to-transparent"
        initial={{ width: 0 }}
        animate={isActive ? { width: "100%" } : { width: 0 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </motion.div>
  );
}

export default About;
