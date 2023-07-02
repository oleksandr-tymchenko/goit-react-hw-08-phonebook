import { useDispatch } from 'react-redux';

import { UserName, Wrapper, Btn } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Btn type="button" onClick={handleLogOut}>
        Logout
      </Btn>
    </Wrapper>
  );
};
