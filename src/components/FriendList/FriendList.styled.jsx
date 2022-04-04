import styled from '@emotion/styled';

export const StyleFriendsList = styled.ul`
  width: 250px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -webkit-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -moz-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  overflow: hidden;
  padding: 10px;
`;
export const StyleFriendsItem = styled.li`
  display: flex;
  align-items: center;

  padding: 5px 30px;
  margin-bottom: 10px;
  border-radius: 5px;

  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -webkit-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  -moz-box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);
  overflow: hidden;
`;
export const StyleAvatar = styled.img`
  display: inline-block;
  margin-right: 20px;
  border-radius: 10px;
  border-radius: 10%;
  background-color: #ccc;
`;
export const StyleName = styled.p`
  display: flex;
  align-items: center;
  font-size: 22px;
}
`;
export const StyleStatus = styled.p`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 10px;
  align-content: center;
  background-color: ${props => {
    return props.status ? 'red' : 'green';
  }};
`;
