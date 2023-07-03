import styled from '@emotion/styled';
import { theme } from 'styles';

export const Form = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  height: 20px;
  border-radius: ${props => props.theme.spacing(2)};
  margin-top: 5px;
  cursor: pointer;
`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 10px;
  background: white;
  color: black;
  /* background: ${theme.colors.mainBackground}; */
  border-radius: ${props => props.theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: grey;
    /* background: ${props => props.theme.colors.light}; */
    color: ${props => props.theme.colors.accent};
  }
`;
