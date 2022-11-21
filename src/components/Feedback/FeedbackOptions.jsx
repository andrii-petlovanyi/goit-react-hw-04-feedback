import { ButtonsList, ListItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onBtnClick }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button onClick={() => onBtnClick(option)} type="button">
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          </ListItem>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onBtnClick: PropTypes.func.isRequired,
};
