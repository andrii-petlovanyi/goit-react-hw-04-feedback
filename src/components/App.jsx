import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Box } from './Box';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = type => {
    this.setState({ [type]: this.state[type] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  render() {
    const { good, neutral, bad } = this.state;
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
              options={Object.keys(this.state)}
              onBtnClick={this.onClick}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                positivePercentage={this.countPositiveFeedbackPercentage()}
                total={this.countTotalFeedback()}
              />
            ) : (
              <Notification message="Sorry, no feedback..." />
            )}
          </Section>
        </Box>
      </>
    );
  }
}
