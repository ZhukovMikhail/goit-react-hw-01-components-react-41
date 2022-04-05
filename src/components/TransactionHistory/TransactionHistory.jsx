import PropTypes from 'prop-types';

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
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
