import PropTypes from 'prop-types';

import {
  StyleFriendsList,
  StyleFriendsItem,
  StyleAvatar,
  StyleName,
  StyleStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyleFriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <StyleFriendsItem key={id}>
          <StyleStatus status={isOnline}></StyleStatus>
          <StyleAvatar src={avatar} alt={name} width="48" />
          <StyleName>{name}</StyleName>
        </StyleFriendsItem>
      ))}
    </StyleFriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
