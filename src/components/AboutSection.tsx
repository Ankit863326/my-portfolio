import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const quickFacts = [
  'Aspiring Software Engineer',
  'Full-Stack Developer',
  'Tech Enthusiast',
  'Continuous Learner',
];

const skills = [
  {
    name: 'Frontend',
    icon: <Code fontSize="large" />,
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    color: '#00D8FF',
  },
  {
    name: 'Backend',
    icon: <Storage fontSize="large" />,
    technologies: ['Node.js', 'Python', 'Java', 'Express.js'],
    color: '#4CAF50',
  },
  {
    name: 'Database',
    icon: <Dns fontSize="large" />,
    technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    color: '#FF9800',
  },
  {
    name: 'Cloud & DevOps',
    icon: <CloudQueue fontSize="large" />,
    technologies: ['GCP', 'AWS', 'Docker', 'Git', 'Linux'],
    color: '#9C27B0',
  },
  {
    name: 'Technologies',
    icon: <DeveloperMode fontSize="large" />,
    technologies: ['IoT', 'REST APIs', 'GraphQL', 'WebSockets'],
    color: '#E91E63',
  },
  {
    name: 'Tools',
    icon: <Build fontSize="large" />,
    technologies: ['VS Code', 'Postman', 'Figma', 'Jira'],
    color: '#2196F3',
  },
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
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 700,
                background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About Me
            </Typography>
          </motion.div>

          {/* ── Bio + Quick Facts ── */}
          <Grid container spacing={6} alignItems="flex-start" sx={{ mb: 10 }}>
            {/* LEFT: Avatar + Title + Bio */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Stack spacing={3}>
                  {/* Avatar inline with title */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        position: 'relative',
                        width: 120,
                        height: 120,
                        borderRadius: '50%',
                        padding: '4px',
                        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                        boxShadow: '0 10px 30px rgba(37, 117, 252, 0.3)',
                      }}
                    >
                      <Avatar
                        src="ankit1.jpg"
                        alt="Ankit Singh"
                        sx={{
                          width: '100%',
                          height: '100%',
                          border: `4px solid ${theme.palette.background.default}`,
                        }}
                      />
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      Passionate Developer & Problem Solver
                    </Typography>
                  </Box>

                  {/* Bio text */}
                  <Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                      I'm a dedicated software engineering student with a passion for creating
                      innovative digital solutions. With experience in full-stack development,
                      I enjoy working across the entire stack to build scalable applications.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      When I'm not coding, you'll find me exploring the cosmos, writing poetry, or playing BGMI.
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* RIGHT: Quick Facts */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Card
                  sx={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-5px)' },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '6px', height: '100%',
                      background: 'linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                      Quick Facts
                    </Typography>
                    <Stack spacing={2}>
                      {quickFacts.map((fact, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              width: 8, height: 8, borderRadius: '50%',
                              bgcolor: index % 2 === 0 ? '#2575fc' : '#6a11cb',
                              boxShadow: '0 0 10px rgba(37, 117, 252, 0.5)',
                            }}
                          />
                          <Typography variant="body1" color="text.secondary">{fact}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* ── Technical Skills ── */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 6,
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Technical Skills
            </Typography>
          </motion.div>

          {/* 2 rows × 3 columns grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
              mb: 10,
            }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants} style={{ display: 'flex' }}>
                <Card
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: alpha(theme.palette.background.default, 0.6),
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: 'divider',
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
                          p: 1.5,
                          borderRadius: 2,
                          background: `linear-gradient(135deg, ${skill.color}, ${alpha(skill.color, 0.7)})`,
                          color: 'white',
                          display: 'flex',
                          boxShadow: `0 4px 12px ${alpha(skill.color, 0.4)}`,
                        }}
                      >
                        {skill.icon}
                      </Box>
                      <Typography variant="h5" fontWeight="bold">
                        {skill.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skill.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            borderRadius: 1,
                            bgcolor: alpha(skill.color, 0.1),
                            border: '1px solid',
                            borderColor: alpha(skill.color, 0.2),
                            fontWeight: 500,
                            color: 'text.primary',
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
                      px: 2, py: 3,
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: alpha(interest.color, 0.3),
                      color: 'text.primary',
                      bgcolor: alpha(interest.color, 0.05),
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