import PropTypes from 'prop-types';

import {
  StyleStatistics,
  StyleTitle,
  StyleStatList,
  StyleStatItem,
  StyleLabel,
  StylePercent,
} from './Statistics.styled';
export const Statistics = ({ stats, title }) => {
  return (
    <StyleStatistics>
      {title && <StyleTitle>{title}</StyleTitle>}
      <StyleStatList>
        {stats.map(stat => (
          <StyleStatItem
            key={stat.id}
            style={{
              backgroundColor: `rgb(${Math.random() * 150}, ${
                Math.random() * 150
              }, ${Math.random() * 150})`,
            }}
          >
            <StyleLabel>{stat.label}</StyleLabel>
            <StylePercent>{stat.percentage}</StylePercent>
          </StyleStatItem>
        ))}
      </StyleStatList>
    </StyleStatistics>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
