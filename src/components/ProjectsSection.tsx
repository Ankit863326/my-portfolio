import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitFork, Github, Star, Users, FileText, Award } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Travel Planner",
      description:
        "A travel planning web app with manual itinerary mapping and budget tracking. Helps users organize trips, plan day-by-day activities, and manage travel expenses efficiently.",
      image:
        "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Ankit863326/travel-planner.git",
      demo: "https://github.com/Ankit863326/travel-planner.git",
      stats: { stars: 5, forks: 2, contributors: 1 },
    },
    {
      title: "SWAM – AI Desktop Assistant",
      description:
        "An AI-powered desktop assistant inspired by Jarvis that automates everyday tasks on your desktop. Features voice interaction, real-time listening, system monitoring, and a chat interface — all powered by Groq.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "HTML", "Groq API"],
      github: "https://github.com/Ankit863326/swayam-ai.git",
      demo: "https://github.com/Ankit863326/swayam-ai.git",
      stats: { stars: 10, forks: 3, contributors: 1 },
    },
    {
      title: "Compresso – Compression Analyzer",
      description:
        "A comparative analysis tool for compression algorithms including Huffman Coding, Run-Length Encoding, LZW, Image and Video Compression. Analyze text, image, and video compression side-by-side with beautiful charts — 100% lossless.",
      image:
        "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Chart.js"],
      github: "https://github.com/Ankit863326/Comparison-Analyzer-Huffman-.git",
      demo: "https://comparison-analyzer-huffman.onrender.com",
      stats: { stars: 8, forks: 4, contributors: 1 },
    },
  ];

  const certificates = [
    {
      title: "Agile with Atlassian Jira",
      description:
        "Agile Project Management using Jira — sprint planning, backlog grooming, and team workflows.",
      file: "/Agile with jira.pdf",
      issuer: "Coursera",
      issuerColor: "#2563eb",
    },
    {
      title: "Agile Project Management",
      description:
        "Comprehensive Agile methodology and project management course completion using Jira tools.",
      file: "/Coursera Agile Project Managemen.pdf",
      issuer: "Coursera",
      issuerColor: "#2563eb",
    },
    {
      title: "Blockchain Specialization",
      description:
        "Blockchain fundamentals, smart contracts, and decentralized application architecture.",
      file: "/Coursera Blockchain Platforms.pdf",
      issuer: "Coursera",
      issuerColor: "#d97706",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      className="py-20 text-white"
      style={{
        background: 'radial-gradient(circle at center, #11112b 0%, #0a0a1a 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* ───── PAGE HEADER ───── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-xs tracking-[0.3em] text-blue-400 uppercase mb-4 font-medium">
              What I've Built
            </p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Projects &{' '}
              <span className="bg-gradient-to-r from-[#b06ab3] to-[#4568dc] bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#b06ab3] to-[#4568dc] mx-auto rounded-full" />
          </motion.div>

          {/* ───── PROJECTS SECTION ───── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Projects Sub-header */}
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-xs tracking-[0.3em] text-blue-400 uppercase font-medium mb-2">
                Featured Work
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                My{' '}
                <span className="bg-gradient-to-r from-[#b06ab3] to-[#4568dc] bg-clip-text text-transparent">
                  Projects
                </span>
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#b06ab3] to-[#4568dc] rounded-full mt-3 mb-4" />
              <p className="text-gray-400 text-sm max-w-lg">
                Real-world applications I've designed and shipped — from AI-powered tools to full-stack web apps.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,117,252,0.15)]"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 z-20 text-3xl font-black text-white/5 select-none leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Top color bar */}
                  <div
                    className="h-1 w-full"
                    style={{
                      background: index === 0
                        ? 'linear-gradient(to right, #6366f1, #8b5cf6)'
                        : index === 1
                        ? 'linear-gradient(to right, #06b6d4, #3b82f6)'
                        : 'linear-gradient(to right, #10b981, #14b8a6)',
                    }}
                  />

                  {/* Image */}
                  <div className="relative overflow-hidden h-44">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent z-10 opacity-70" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors cursor-default">
                        <Star size={13} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-default">
                        <GitFork size={13} />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-default">
                        <Users size={13} />
                        <span>{project.stats.contributors}</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex-1 bg-white/5 border border-white/10 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Github size={14} />
                        Source Code
                      </motion.a>
                      {project.demo && project.demo !== project.github && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-1.5"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ───── CERTIFICATES SECTION ───── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Divider */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="w-full h-px bg-white/5 mb-10" />
              <p className="text-xs tracking-[0.3em] text-emerald-400 uppercase font-medium mb-2">
                Credentials
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                My{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Certificates
                </span>
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mt-3 mb-4" />
              <p className="text-gray-400 text-sm max-w-lg">
                Professional certifications and course completions that complement my hands-on experience.
              </p>
            </motion.div>

            {/* Certificates Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />

                  <div className="p-6">
                    {/* Icon + Issuer Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Award size={20} className="text-emerald-400" />
                      </div>
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                        style={{
                          color: cert.issuerColor,
                          borderColor: cert.issuerColor + '40',
                          background: cert.issuerColor + '15',
                        }}
                      >
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {cert.description}
                    </p>

                    {/* View Certificate Link */}
                    <motion.a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors group/link"
                    >
                      <FileText size={15} />
                      <span className="border-b border-emerald-400/30 group-hover/link:border-emerald-300 transition-colors">
                        View Certificate
                      </span>
                      <ExternalLink size={12} className="opacity-60" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;