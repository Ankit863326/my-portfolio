import React from 'react';
import { Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const MyTimeline: React.FC = () => {
  return (
    <div style={{ padding: '40px 20px', width: '100%' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
        My Journey
      </Typography>
      <Timeline position="alternate">
        {/* Item 1: School Education */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2018 - 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              High School & Higher Secondary
            </Typography>
            <Typography>St. Xavier's Inter College</Typography>
          </TimelineContent>
        </TimelineItem>

        {/* Item 2: University */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            2023 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              B.Tech in CSE (3rd Year)
            </Typography>
            <Typography>Pimpri Chinchwad University, Pune</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default MyTimeline;