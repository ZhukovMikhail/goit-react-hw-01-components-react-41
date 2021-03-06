import PropTypes from 'prop-types';

import {
  StyleProfile,
  StyleDescription,
  StyleAvater,
  StyleName,
  StyleTag,
  StyleLocation,
  StyleStats,
  StyleStatsItem,
  StyleStatsLabel,
  StyleStatsQuantity,
} from './Profile.styled';
export const Profile = ({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <StyleProfile>
      <StyleDescription>
        <StyleAvater src={avatar} alt={name} />
        <StyleName>{name}</StyleName>
        <StyleTag>{tag}</StyleTag>
        <StyleLocation>{location}</StyleLocation>
      </StyleDescription>

      <StyleStats>
        <StyleStatsItem>
          <StyleStatsLabel>Followers</StyleStatsLabel>
          <StyleStatsQuantity>
            {Math.floor(followers / 1000) + ',' + (followers % 1000)}
          </StyleStatsQuantity>
        </StyleStatsItem>
        <StyleStatsItem>
          <StyleStatsLabel>Views</StyleStatsLabel>
          <StyleStatsQuantity>
            {Math.floor(views / 1000) + ',' + (views % 1000)}
          </StyleStatsQuantity>
        </StyleStatsItem>
        <StyleStatsItem>
          <StyleStatsLabel>Likes</StyleStatsLabel>
          <StyleStatsQuantity>
            {Math.floor(likes / 1000) + ',' + (likes % 1000)}
          </StyleStatsQuantity>
        </StyleStatsItem>
      </StyleStats>
    </StyleProfile>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
