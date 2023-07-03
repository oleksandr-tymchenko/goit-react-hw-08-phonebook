import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';
import { theme } from 'styles';

export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  gap: 8px;
  border: solid 1px grey;
  width: ${props => props.theme.spacing(120)};
  border-radius: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const Label = styled.label`
  margin-top: 10px;
  /* box-shadow: ${({ theme }) => theme.shadows.small}; */
`;

export const Input = styled(Field)`
  height: 25px;
  border-radius: ${props => props.theme.spacing(2)};
  cursor: pointer;
`;

export const ErrMessage = styled(ErrorMessage)`
  color: red;
  text-align: center;
`;
export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  background: white;
  color: black;
  /* background: ${theme.colors.mainBackground}; */
  /* background-color: ${props => props.theme.colors.tagBackground}; */
  /* color: ${props => props.theme.colors.light}; */
  border-radius: ${props => props.theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: gray;
    /* background: ${props => props.theme.colors.light}; */
    color: ${props => props.theme.colors.accent};
  }
`;
