import styled from 'styled-components';
import Texture from '../../assets/texture.svg';
import Background from '../../assets/background-fundo.svg';
export const Container = styled.div`
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`;

export const Banner = styled.div`
  background: url(${Texture});
  background-color: ${(props) => props.theme.mainBlack};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 150px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.green};
  text-align: center;
  position: relative;
  margin-top: 12px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  gap: 40px;
  margin: 0 auto;
`;
