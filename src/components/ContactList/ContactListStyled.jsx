import styled from '@emotion/styled';

export const ContactsCont = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  width: ${props => props.theme.spacing(110)};
  border: 1px solid #848b60;
  border-radius: ${props => props.theme.spacing(3)};
  box-shadow: ${({ theme }) => theme.shadows.regular};

  padding-left: 40px;
  padding-top: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnDel = styled.button`
  margin-left: 10px;
  padding: 2px 10px 4px 10px;

  color: ${props => props.theme.colors.dark};
  border: 1px solid #848b60;
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-color: white;
  &:hover {
    /* background-color: ${props => props.theme.colors.light}; */
    background-color: yellow;
    color: ${props => props.theme.colors.accent};
  }
`;

export const Name = styled.span`
  /* display: flex; */
  /* justify-content: space-between; */
  font-size: ${props => props.theme.fontSizes.medium};
  font-style: italic;
`;
