import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Box';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const onClick = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const totalFeeds = Object.values(feedback).reduce(
      (acc, feed) => acc + feed,
      0
    );
    return totalFeeds;
  };

  const countPositiveFeedbackPercentage = () => {
    return (100 / countTotalFeedback()) * feedback.good;
  };

  return (
    <>
      <Box
        width={240}
        display="flex"
        flexDirection="column"
        alignItems="flextStart"
        listStyle="none"
        mx="auto"
        mt="20px"
        p="10px"
        border="1px solid black"
        borderRadius="10px"
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onBtnClick={onClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              positivePercentage={countPositiveFeedbackPercentage()}
              total={countTotalFeedback()}
            />
          ) : (
            <Notification message="Sorry, no feedback..." />
          )}
        </Section>
      </Box>
    </>
  );
};
