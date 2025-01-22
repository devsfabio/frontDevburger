import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import BackgroundFundo from '../../assets/background-fundo.svg';

import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: #252525;
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 50%;

  img {
    width: 70%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 50%;

  background: url('${BackgroundFundo}');

  p {
    text-align: center;
    margin-top: 5px;
    color: ${(props) => props.theme.white};
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const Title = styled.h2`
  font-family: '${(props) => props.theme.roadRageFont}', sans-serif;
  font-size: 40px;
  font-weight: 400;
  color: ${(props) => props.theme.purple};
  margin-bottom: 50px;
  line-height: 40px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  width: 100%;
  max-width: 400px;
`;

export const InpuntConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 52px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    color: ${(props) => props.theme.white};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;
