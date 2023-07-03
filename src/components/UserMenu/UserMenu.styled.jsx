import styled from '@emotion/styled';
// import { theme } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const UserName = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 1000;
  align-items: center;
  margin-bottom: 0;
  font-style: italic;
  /* padding-top: 16px; */
`;

export const Btn = styled.button`
  /* margin-left: auto;
  margin-right: auto;
  display: flex; */
  color: black;
  /* font-weight: 600; */
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  background: white;
  border-radius: ${props => props.theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: grey;
    /* background: ${props => props.theme.colors.light}; */
    color: ${props => props.theme.colors.accent};
  }
`;
