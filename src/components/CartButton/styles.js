import styled from 'styled-components';

export const ContainerButton = styled.button`
  background-color: #9758a5;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 8px;
  font-size: 30px;
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme.secondDarkPurple};
  }
`;
