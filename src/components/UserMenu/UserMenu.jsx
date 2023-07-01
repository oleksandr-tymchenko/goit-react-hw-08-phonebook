import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';

import { UserName, Wrapper } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
// !!! глюк

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    console.log('ckick');
    // dispatch(logOut);
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};
