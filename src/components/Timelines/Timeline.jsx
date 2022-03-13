import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const MaterialTimeline = () => {
    return (
        <React.Fragment>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
               1972
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW E12</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              1981
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW E28</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
                1988
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW E34</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
                1995
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW E39</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
                2003
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW E60</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
                2011
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW F10</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
                2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>BMW F90</TimelineContent>
          </TimelineItem>
        </Timeline>
      </React.Fragment>
    )
}

export default MaterialTimeline;