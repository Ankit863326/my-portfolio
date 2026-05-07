import React, { useRef } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';

interface TimelineEntry {
  year: string;
  badge: string;
  badgeType: 'school' | 'university' | 'present';
  title: string;
  bullets: string[];
}

const entries: TimelineEntry[] = [
  {
    year: '2020',
    badge: 'Secondary School',
    badgeType: 'school',
    title: "Class X · St. Xavier's Inter College, Jaunpur",
    bullets: [
      'Completed with strong scores in Science & Mathematics',
      'Developed early interest in computers and logical thinking',
      'First exposure to basic programming and problem solving',
    ],
  },
  {
    year: '2022',
    badge: 'Higher Secondary',
    badgeType: 'school',
    title: "Class XII · St. Xavier's Inter College, Jaunpur",
    bullets: [
      'Studied Physics, Chemistry, Mathematics & Computer Science',
      'Deepened programming knowledge — data structures and algorithms',
      'Decided to pursue Computer Science Engineering at university level',
    ],
  },
  {
    year: '2023',
    badge: 'University · Year 1',
    badgeType: 'university',
    title: 'B.Tech CSE · Pimpri Chinchwad University, Pune',
    bullets: [
      'Enrolled in B.Tech Computer Science Engineering',
      'Began competitive programming on LeetCode — 300+ problems solved',
      'Explored web development: HTML, CSS, JavaScript, and React',
    ],
  },
  {
    year: '2024',
    badge: 'University · Year 2',
    badgeType: 'university',
    title: 'Projects, Courses & Open Source',
    bullets: [
      'Built full-stack web projects using React, Node.js & MongoDB',
      'Completed AWS Cloud Architect & Full-Stack Development courses',
      'Participated in hackathons and open-source contributions',
      'Explored AI/ML fundamentals and IoT gesture-controlled systems',
    ],
  },
  {
    year: '2025',
    badge: 'University · Year 3 · Present',
    badgeType: 'present',
    title: 'Google Cloud Arcade Champion & SDE Preparation',
    bullets: [
      'Earned Google Cloud Arcade Champion badge — 12 weeks of consistent GCP learning',
      'Mastered VPCs, firewall rules, subnets & cloud security on Google Cloud Skills Boost',
      'Actively preparing for Software Development Engineer roles',
      'Building advanced projects and strengthening system design fundamentals',
    ],
  },
];

const dotColor: Record<TimelineEntry['badgeType'], string> = {
  school: '#70a5fd',
  university: '#bf91f3',
  present: '#38bdae',
};

const badgeBg: Record<TimelineEntry['badgeType'], string> = {
  school: 'rgba(112,165,253,0.12)',
  university: 'rgba(191,145,243,0.12)',
  present: 'rgba(56,189,174,0.12)',
};

const badgeBorder: Record<TimelineEntry['badgeType'], string> = {
  school: 'rgba(112,165,253,0.3)',
  university: 'rgba(191,145,243,0.3)',
  present: 'rgba(56,189,174,0.3)',
};

// ── Scroll-animated vertical track ──────────────────────────────────────────
const AnimatedTrack: React.FC<{ containerRef: React.RefObject<HTMLDivElement> }> = ({
  containerRef,
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <Box
      sx={{
        position: 'absolute',
        left: { xs: '20px', md: '120px' },
        top: 0,
        bottom: 0,
        width: '2px',
        zIndex: 0,
      }}
    >
      {/* Dim background track */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(112,165,253,0.08)',
          borderRadius: '2px',
        }}
      />

      {/* Scroll-driven glowing fill */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          scaleY,
          transformOrigin: 'top',
          height: '100%',
          background: 'linear-gradient(to bottom, #70a5fd, #bf91f3, #38bdae)',
          borderRadius: '2px',
          boxShadow: '0 0 8px rgba(112,165,253,0.5)',
        }}
      />
    </Box>
  );
};

// ── Single timeline card ─────────────────────────────────────────────────────
const TimelineCard: React.FC<{
  entry: TimelineEntry;
  index: number;
  isDark: boolean;
}> = ({ entry, index, isDark }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const color = dotColor[entry.badgeType];
  const isPresent = entry.badgeType === 'present';

  const bg = isDark ? '#0d1117' : '#f5f7ff';
  const cardBg = isDark ? '#111827' : '#ffffff';
  const cardBorder = isDark ? '#1e2a3a' : '#e2e8f0';
  const textPrimary = isDark ? '#e0e6f0' : '#1a202c';
  const textSecondary = isDark ? '#8b93b8' : '#64748b';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Box sx={{ display: 'flex', mb: { xs: 4, md: 5 }, position: 'relative' }}>

        {/* Year label — desktop only */}
        <Box
          sx={{
            width: { xs: '20px', md: '120px' },
            flexShrink: 0,
            pt: '6px',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
          >
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 700,
                color: color,
                textAlign: 'right',
                pr: '22px',
              }}
            >
              {entry.year}
            </Typography>
          </motion.div>
        </Box>

        {/* Dot with pulse for present */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '13px', md: '113px' },
            top: '10px',
            zIndex: 2,
          }}
        >
          {isPresent && (
            <motion.div
              style={{
                position: 'absolute',
                top: '-6px',
                left: '-6px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                border: `2px solid ${color}`,
              }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.08 + 0.1,
              type: 'spring',
              stiffness: 200,
            }}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: `2px solid ${color}`,
              backgroundColor: isPresent ? color : bg,
              boxShadow: isPresent ? `0 0 14px ${color}88` : 'none',
            }}
          />
        </Box>

        {/* Card */}
        <motion.div
          style={{ marginLeft: '44px', flex: 1 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <Box
            sx={{
              bgcolor: cardBg,
              border: `1px solid ${isPresent ? color + '44' : cardBorder}`,
              borderRadius: '12px',
              p: { xs: 2.5, md: 3.5 },
              transition: 'border-color 0.25s, box-shadow 0.25s',
              '&:hover': {
                borderColor: color + '88',
                boxShadow: `0 8px 32px ${color}22`,
              },
            }}
          >
            {/* Mobile year */}
            <Typography
              sx={{
                display: { xs: 'block', md: 'none' },
                fontSize: '12px',
                fontWeight: 700,
                color: color,
                mb: 1,
              }}
            >
              {entry.year}
            </Typography>

            {/* Badge */}
            <Box
              sx={{
                display: 'inline-block',
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                px: 1.25,
                py: '4px',
                borderRadius: '4px',
                mb: 1.5,
                bgcolor: badgeBg[entry.badgeType],
                border: `1px solid ${badgeBorder[entry.badgeType]}`,
                color: color,
              }}
            >
              {entry.badge}
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '17px' },
                fontWeight: 600,
                color: textPrimary,
                mb: 2,
              }}
            >
              {entry.title}
            </Typography>

            {/* Bullets */}
            <Box
              component="ul"
              sx={{
                m: 0,
                p: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {entry.bullets.map((b, j) => (
                <motion.li
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.08 + 0.25 + j * 0.06,
                  }}
                  style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                >
                  <Box
                    sx={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      bgcolor: color,
                      flexShrink: 0,
                      mt: '8px',
                    }}
                  />
                  <Typography
                    sx={{ fontSize: '14px', color: textSecondary, lineHeight: 1.7 }}
                  >
                    {b}
                  </Typography>
                </motion.li>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

// ── Main Section ─────────────────────────────────────────────────────────────
const ExperienceSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  const bg = isDark ? '#0d1117' : '#f5f7ff';
  const textPrimary = isDark ? '#e0e6f0' : '#1a202c';

  return (
    <Box
      id="experience"
      sx={{ py: { xs: 8, md: 12 }, background: bg, overflow: 'hidden' }}
    >
      <Container maxWidth="lg">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              fontSize: '11px',
              letterSpacing: '4px',
              color: '#70a5fd',
              textTransform: 'uppercase',
              mb: 1.5,
              fontWeight: 600,
            }}
          >
            Journey So Far
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: { xs: 6, md: 8 },
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              color: textPrimary,
              '& span': { color: '#bf91f3' },
            }}
          >
            Experience &amp; <span>Education</span>
          </Typography>
        </motion.div>

        {/* Timeline */}
        <Box ref={sectionRef} sx={{ position: 'relative' }}>
          <AnimatedTrack containerRef={sectionRef as React.RefObject<HTMLDivElement>} />

          {entries.map((entry, i) => (
            <TimelineCard key={i} entry={entry} index={i} isDark={isDark} />
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default ExperienceSection;