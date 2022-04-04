import styled from '@emotion/styled';

export const StyleProfile = styled.div`
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 3%;
  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -webkit-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -moz-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  overflow: hidden;
`;
export const StyleDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const StyleAvater = styled.img`
  margin: 0 auto;
  width: 150px;
  border-radius: 50%;
  background-color: grey;
  justify-content: center;
`;
export const StyleName = styled.p`
  font-size: 25px;
  font-weight: 600;
  align-content: center;
  text-align: center;
  margin-top: 15px;
`;
export const StyleTag = styled.p`
  margin-top: 10px;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  color: rgba(114, 112, 112, 0.85);
`;
export const StyleLocation = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: rgba(114, 112, 112, 0.85);
  text-align: center;
  margin-bottom: 25px;
`;
export const StyleStats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: rgb(231, 231, 231);
  border-radius: 5%;
`;
export const StyleStatsItem = styled.li`
  border-width: 1px;
  outline-color: rgb(212, 212, 212);
  outline-style: solid;
  outline-width: 1px;
  list-style: none;
  padding: 20px 0;
  align-content: space-between;
  flex-basis: calc(100% / 3);
`;
export const StyleStatsLabel = styled.span`
  display: block;
  align-content: center;
  text-align: center;
  font-size: 153x;
  color: rgba(114, 112, 112, 0.85);
`;
export const StyleStatsQuantity = styled.span`
  display: block;
  align-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: black;
`;
