import styled from '@emotion/styled';

export const FilterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  height: 25px;
  border-radius: ${props => props.theme.spacing(2)};
  margin-top: 5px;
`;
