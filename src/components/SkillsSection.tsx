import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Code,
  Brush,
  Storage,
  CloudQueue,
  MobileFriendly,
  BugReport,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  technologies: string[];
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code />,
    description: 'Creating responsive and interactive user interfaces',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Backend Development',
    icon: <Storage />,
    description: 'Building robust server-side applications and APIs',
    technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL'],
  },
  {
    name: 'UI/UX Design',
    icon: <Brush />,
    description: 'Designing user-centered and visually appealing interfaces',
    technologies: ['Figma', 'Adobe XD', 'Material UI', 'Framer Motion'],
  },
  {
    name: 'Cloud & DevOps',
    icon: <CloudQueue />,
    description: 'Deploying and managing applications in the cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    name: 'Mobile Development',
    icon: <MobileFriendly />,
    description: 'Building cross-platform mobile applications',
    technologies: ['React Native', 'Flutter', 'Expo', 'PWA'],
  },
  {
    name: 'Testing & QA',
    icon: <BugReport />,
    description: 'Ensuring code quality through comprehensive testing',
    technologies: ['Jest', 'Cypress', 'Testing Library', 'Selenium'],
  },
];

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box
      id="skills"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              color: 'text.primary',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            I'm passionate about leveraging cutting-edge technologies to build
            scalable and user-friendly applications.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[12],
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: theme.custom.gradients.primary,
                        color: 'white',
                        fontSize: '2rem',
                        mb: 3,
                      }}
                    >
                      {skill.icon}
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        color: 'text.primary',
                        fontWeight: 600,
                      }}
                    >
                      {skill.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {skill.description}
                    </Typography>

                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: 'center',
                      }}
                    >
                      {skill.technologies.map((tech) => (
                        <Box
                          key={tech}
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: '12px',
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 500,
                            opacity: 0.8,
                          }}
                        >
                          {tech}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;