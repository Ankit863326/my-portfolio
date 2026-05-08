import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Edit,
  AutoStories,
  RocketLaunch,
  SportsCricket,
  CameraAlt,
  MusicNote,
  Code,
  Storage,
  CloudQueue,
  DeveloperMode,
  Build,
  Dns,
  School,
  LocationOn,
  Favorite,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const quickFacts = [
  { icon: <School sx={{ fontSize: 20 }} />, label: 'B.Tech CSE @ Your University', color: '#60a5fa' },
  { icon: <Code sx={{ fontSize: 20 }} />, label: 'Full-Stack Developer', color: '#a78bfa' },
  { icon: <LocationOn sx={{ fontSize: 20 }} />, label: 'Your City → Destination', color: '#34d399' },
  { icon: <Favorite sx={{ fontSize: 20 }} />, label: 'Poet · Stargazer · Cricket Fan', color: '#f87171' },
];

const stats = [
  { value: '10+', label: 'Projects Built' },
  { value: '2+', label: 'Years Coding' },
  { value: '8.5', label: 'CGPA' },
];

const skills = [
  { name: 'Frontend', icon: <Code fontSize="large" />, technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'], color: '#00D8FF' },
  { name: 'Backend', icon: <Storage fontSize="large" />, technologies: ['Node.js', 'Python', 'Java', 'Express.js'], color: '#4CAF50' },
  { name: 'Database', icon: <Dns fontSize="large" />, technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'], color: '#FF9800' },
  { name: 'Cloud & DevOps', icon: <CloudQueue fontSize="large" />, technologies: ['GCP', 'AWS', 'Docker', 'Git', 'Linux'], color: '#9C27B0' },
  { name: 'Technologies', icon: <DeveloperMode fontSize="large" />, technologies: ['IoT', 'REST APIs', 'GraphQL', 'WebSockets'], color: '#E91E63' },
  { name: 'Tools', icon: <Build fontSize="large" />, technologies: ['VS Code', 'Postman', 'Figma', 'Jira'], color: '#2196F3' },
];

const interests = [
  { name: 'Writing Poems', icon: <Edit />, color: '#FF6B6B' },
  { name: 'Reading', icon: <AutoStories />, color: '#4ECDC4' },
  { name: 'Astrophysics', icon: <RocketLaunch />, color: '#A55EEA' },
  { name: 'Cricket', icon: <SportsCricket />, color: '#45B7D1' },
  { name: 'Photography', icon: <CameraAlt />, color: '#FDA7DF' },
  { name: 'Music', icon: <MusicNote />, color: '#F7B731' },
];

const AboutSection: React.FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <Box
      id="about"
      ref={ref}
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* ── Section Heading ── */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{ display: 'block', textAlign: 'center', letterSpacing: '0.25em', color: 'text.secondary', mb: 1, fontSize: '0.75rem' }}
            >
              GET TO KNOW ME
            </Typography>
            <Box sx={{ textAlign: 'center', mb: 1 }}>
              <Typography variant="h2" component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                About{' '}
              </Typography>
              <Typography
                variant="h2"
                component="span"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Me
              </Typography>
            </Box>
            <Box sx={{ mx: 'auto', mb: 8, width: 60, height: 3, borderRadius: 2, background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)' }} />
          </motion.div>

          {/* ── Bio + Quick Facts — FLEX SIDE BY SIDE ── */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'flex-start',
                mb: 8,
              }}
            >
              {/* LEFT BIO — 60% width */}
              <Box sx={{ flex: '0 0 58%', width: { xs: '100%', md: '58%' } }}>
                <Stack spacing={3}>
                  {/* Avatar + title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        position: 'relative',
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: '2px solid',
                        borderColor: alpha('#2575fc', 0.4),
                        boxShadow: '0 8px 24px rgba(37,117,252,0.2)',
                      }}
                    >
                      <Avatar
                        src="ankit1.jpg"
                        alt="Ankit Singh"
                        variant="square"
                        sx={{ width: '100%', height: '100%' }}
                      />
                      <Box
                        sx={{
                          position: 'absolute', bottom: 7, right: 7,
                          width: 11, height: 11, borderRadius: '50%',
                          bgcolor: '#22c55e', border: '2px solid', borderColor: 'background.default',
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', lineHeight: 1.3 }}>
                        Passionate Developer & Problem Solver
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#2575fc', mt: 0.5 }}>
                        B.Tech CSE · Your University · 2022–Present
                      </Typography>
                    </Box>
                  </Box>

                  {/* Bio */}
                  <Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 1.5 }}>
                      I'm a dedicated software engineering student with a passion for creating innovative digital solutions. My journey in tech started with curiosity and has grown into a deep commitment to building things that matter.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 1.5 }}>
                      With experience across the full stack — from crafting pixel-perfect UIs to architecting scalable backends — I thrive on solving hard problems end-to-end.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      When I'm not coding, you'll find me exploring the cosmos, writing poetry, or playing BGMI.
                    </Typography>
                  </Box>

                  {/* Stats */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                    {stats.map((stat) => (
                      <Card
                        key={stat.label}
                        sx={{
                          textAlign: 'center', py: 2,
                          bgcolor: alpha(theme.palette.background.default, 0.6),
                          backdropFilter: 'blur(10px)',
                          border: '1px solid', borderColor: 'divider',
                          borderRadius: 3, transition: 'all 0.3s',
                          '&:hover': { borderColor: alpha('#2575fc', 0.5), transform: 'translateY(-3px)' },
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                            backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                      </Card>
                    ))}
                  </Box>
                </Stack>
              </Box>

              {/* RIGHT QUICK FACTS — 40% width */}
              <Box sx={{ flex: '0 0 40%', width: { xs: '100%', md: '40%' } }}>
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                      Quick Facts
                    </Typography>
                    <Stack spacing={1.5}>
                      {quickFacts.map((fact, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex', alignItems: 'center', gap: 2,
                            p: 1.5, borderRadius: 2,
                            bgcolor: alpha(fact.color, 0.06),
                            border: '1px solid', borderColor: alpha(fact.color, 0.15),
                            transition: 'all 0.2s',
                            '&:hover': { bgcolor: alpha(fact.color, 0.12) },
                          }}
                        >
                          <Box sx={{ color: fact.color, display: 'flex', flexShrink: 0 }}>{fact.icon}</Box>
                          <Typography variant="body2" color="text.secondary">{fact.label}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                      <Box
                        sx={{
                          width: 8, height: 8, borderRadius: '50%',
                          bgcolor: '#22c55e', boxShadow: '0 0 8px #22c55e', flexShrink: 0,
                          animation: 'pulse 2s infinite',
                          '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
                        }}
                      />
                      <Typography variant="body2" sx={{ color: '#22c55e', fontWeight: 500 }}>
                        Open to internships & opportunities
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </motion.div>

          {/* ── Technical Skills ── */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="overline"
              sx={{ display: 'block', textAlign: 'center', letterSpacing: '0.25em', color: 'text.secondary', mb: 1, fontSize: '0.75rem' }}
            >
              WHAT I WORK WITH
            </Typography>
            <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, fontWeight: 700, color: 'text.primary' }}>
              Technical Skills
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3, mb: 10,
            }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} style={{ display: 'flex' }}>
                <Card
                  sx={{
                    width: '100%', display: 'flex', flexDirection: 'column',
                    bgcolor: alpha(theme.palette.background.default, 0.6),
                    backdropFilter: 'blur(10px)', borderRadius: 4,
                    border: '1px solid', borderColor: 'divider',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 10px 30px ${alpha(skill.color, 0.2)}`,
                      borderColor: skill.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.5, borderRadius: 2,
                          background: `linear-gradient(135deg, ${skill.color}, ${alpha(skill.color, 0.7)})`,
                          color: 'white', display: 'flex',
                          boxShadow: `0 4px 12px ${alpha(skill.color, 0.4)}`,
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography variant="h5" fontWeight="bold">{skill.name}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skill.technologies.map((tech) => (
                        <Chip
                          key={tech} label={tech} size="small"
                          sx={{
                            borderRadius: 1,
                            bgcolor: alpha(skill.color, 0.1),
                            border: '1px solid', borderColor: alpha(skill.color, 0.2),
                            fontWeight: 500, color: 'text.primary',
                            '&:hover': { bgcolor: alpha(skill.color, 0.2) },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* ── Interests ── */}
          <Box sx={{ textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h4" sx={{ mb: 5, fontWeight: 700 }}>
                Interests & Hobbies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    icon={interest.icon}
                    label={interest.name}
                    variant="outlined"
                    sx={{
                      px: 2, py: 3, borderRadius: '50px',
                      fontSize: '1rem', fontWeight: 600,
                      borderColor: alpha(interest.color, 0.3),
                      color: 'text.primary', bgcolor: alpha(interest.color, 0.05),
                      transition: 'all 0.3s ease',
                      '& .MuiChip-icon': { color: interest.color },
                      '&:hover': {
                        borderColor: interest.color,
                        bgcolor: alpha(interest.color, 0.15),
                        boxShadow: `0 0 15px ${alpha(interest.color, 0.3)}`,
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>

        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;