import React from 'react';
import PropTypes from 'prop-types';
import { StatsList, StatsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <StatsList>
      <StatsItem>Good: {good}</StatsItem>
      <StatsItem>Neutral: {neutral}</StatsItem>
      <StatsItem>Bad: {bad}</StatsItem>
      <StatsItem>Total: {total}</StatsItem>
      <StatsItem>Positive: {positivePercentage.toFixed(0, 2)}%</StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
