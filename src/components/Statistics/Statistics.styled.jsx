import styled from '@emotion/styled';
// import data from '../../data/data.json'

export const StyleContainer = styled.div`
  background-color: #ccc;
  display: flex;
`;
export const StyleStatistics = styled.div`
  background-color: #fff;

  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -webkit-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -moz-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  overflow: hidden;
`;
export const StyleTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  align-content: center;
  text-align: center;
  padding: 10px;
`;
export const StyleStatList = styled.li`
  display: flex;
  justify-content: space-around;
  background-color: rgb(231, 231, 231);
`;
export const StyleStatItem = styled.li`
  list-style: none;
  padding: 10px 0;
  align-content: space-between;
  flex-basis: calc(100% / 5);
`;

export const StyleLabel = styled.span`
  font-size: 12px;
  color: #fff;
  display: block;
  align-content: center;
  text-align: center;
`;

export const StylePercent = styled.span`
  font-size: 18px;
  color: #fff;
  display: block;
  align-content: center;
  text-align: center;
`;
