import styled from 'styled-components';

export const Container = styled.footer`
  height: 50px;
  background: ${(props) => props.theme.purple};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
  }
`;
