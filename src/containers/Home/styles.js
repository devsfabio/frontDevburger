import styled from 'styled-components';
import BannerHome from '../../assets/fundo-home-lanche.svg';
import Background from '../../assets/background-fundo.svg';

export const Banner = styled.div`
  background: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 300px;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.white};
    position: absolute;
    right: 10%;
    top: 7%;
    font-weight: 500;
  }
`;

export const Container = styled.section`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  height: 900px;
`;
