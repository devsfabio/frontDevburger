import styled from 'styled-components';
import BannerHamburger from '../../assets/menu-logo.svg';
import Background from '../../assets/background-fundo.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.secondWhite};

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  background: url('${BannerHamburger}') no-repeat;
  background-position: center;
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  position: relative;
  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    line-height: 65px;
    color: ${(props) => props.theme.white};
    position: absolute;

    right: 20%;
    top: 30%;
  }

  span {
    display: block;
    color: ${(props) => props.theme.white};
    font-size: 20px;
    font-weight: 400;
    font-family: 'Road Rages', sans-serif;
  }
`;

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.$isActiveCategory ? (props) => props.theme.purple : '#696969'};
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) =>
    props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
  display: grid;
  gap: 60px;
  justify-content: center;
  margin: 50px auto 0;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  max-width: 1280px;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.purple};
  border-radius: 15px;
  border: none;
  font-family: '${(props) => props.theme.roadRageFont}', sans-serif;
  font-size: 30px;
  color: ${(props) => props.theme.white};
  padding: 10px 20px;
  display: block;
  width: 125px;
  margin: 15px auto;
  text-align: center;
`;
