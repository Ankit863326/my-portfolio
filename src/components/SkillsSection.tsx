import React, { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Code,
  Storage,
  CloudQueue,
  DeveloperMode,
  Build,
  Dns,
  AutoStories,
  CameraAlt,
  MusicNote,
  RocketLaunch,
  Edit,
  SportsCricket,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

// --- DATA: Skills ---
interface Skill {
  name: string;
  icon: React.ReactNode;
  technologies: string[];
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Frontend',
    icon: <Code fontSize="large" />,
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    color: '#00D8FF', // Cyan
  },
  {
    name: 'Backend',
    icon: <Storage fontSize="large" />,
    technologies: ['Node.js', 'Python', 'Java', 'Express.js'],
    color: '#4CAF50', // Green
  },
  {
    name: 'Database',
    icon: <Dns fontSize="large" />,
    technologies: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    color: '#FF9800', // Orange
  },
  {
    name: 'Cloud & DevOps',
    icon: <CloudQueue fontSize="large" />,
    technologies: ['AWS', 'Docker', 'Git', 'Linux'],
    color: '#9C27B0', // Purple
  },
  {
    name: 'Technologies',
    icon: <DeveloperMode fontSize="large" />,
    technologies: ['IoT', 'REST APIs', 'GraphQL', 'WebSockets'],
    color: '#E91E63', // Pink
  },
  {
    name: 'Tools',
    icon: <Build fontSize="large" />,
    technologies: ['VS Code', 'Postman', 'Figma', 'Jira'],
    color: '#2196F3', // Blue
  },
];

// --- DATA: Interests ---
const interests = [
  { name: 'Writing Poems', icon: <Edit />, color: '#FF6B6B' },
  { name: 'Reading', icon: <AutoStories />, color: '#4ECDC4' },
  { name: 'Astrophysics', icon: <RocketLaunch />, color: '#A55EEA' },
  { name: 'Cricket', icon: <SportsCricket />, color: '#45B7D1' },
  { name: 'Photography', icon: <CameraAlt />, color: '#FDA7DF' },
  { name: 'Music', icon: <MusicNote />, color: '#F7B731' },
];

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                mb: 8,
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Technical Skills
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <Grid container spacing={3} alignItems="stretch">
            {skills.map((skill) => (
              // CHANGED HERE: md={4} creates 3 columns on desktop
              <Grid item xs={12} sm={6} md={4} key={skill.name} sx={{ display: 'flex' }}>
                <motion.div variants={itemVariants} style={{ width: '100%' }}>
                  <Card
                    sx={{
                      height: '100%',
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
                              '&:hover': {
                                bgcolor: alpha(skill.color, 0.2),
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Interests & Hobbies Section */}
          <Box sx={{ mt: 12, textAlign: 'center' }}>
            <motion.div variants={itemVariants}>
              <Typography variant="h4" sx={{ mb: 5, fontWeight: 700 }}>
                Interests & Hobbies
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 3,
                }}
              >
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    icon={interest.icon}
                    label={interest.name}
                    variant="outlined"
                    sx={{
                      px: 2,
                      py: 3,
                      borderRadius: '50px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderColor: alpha(interest.color, 0.3),
                      color: 'text.primary',
                      bgcolor: alpha(interest.color, 0.05),
                      transition: 'all 0.3s ease',
                      '& .MuiChip-icon': {
                        color: interest.color,
                      },
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

export default SkillsSection;