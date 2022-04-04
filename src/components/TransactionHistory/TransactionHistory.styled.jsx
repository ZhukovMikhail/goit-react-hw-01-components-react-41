import styled from '@emotion/styled';

export const StyleTable = styled.table`
  margin: 0 auto;s
  justify-content: center;
  background-color: #fff;
  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -webkit-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -moz-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  overflow: hidden;
  padding: 10px;
  width: 500px;
  border-radius: 5px;
`;
export const StyleTd = styled.td`
  text-align: center;
  font-size: 13px;
  color: grey;
  width: 150px;
  outline: solid 2px rgba(223, 223, 223, 0.322);
`;

export const StyleThead = styled.thead`
  background-color: teal;
  outline: solid 1px grey;
`;
export const StyleTh = styled.th`
  composes: td;
  color: white;
  font-size: 15px;
`;
export const StyleTr = styled.tr`
  background-color: ${props => (props.indx % 2 === 0 ? 'white' : 'wheat')};
`;
