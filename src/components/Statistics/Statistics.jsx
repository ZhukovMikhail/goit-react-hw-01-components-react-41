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
