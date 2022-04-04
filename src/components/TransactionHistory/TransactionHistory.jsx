import {
  StyleTable,
  StyleTd,
  StyleThead,
  StyleTh,
  StyleTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <StyleTable>
      <StyleThead>
        <tr>
          <StyleTh>Type</StyleTh>
          <StyleTh>Amount</StyleTh>
          <StyleTh>Currency</StyleTh>
        </tr>
      </StyleThead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <StyleTr key={id} indx={index}>
              <StyleTd>{type}</StyleTd>
              <StyleTd>{amount}</StyleTd>
              <StyleTd>{currency}</StyleTd>
            </StyleTr>
          );
        })}
      </tbody>
    </StyleTable>
  );
};
