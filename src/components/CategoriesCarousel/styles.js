import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 40px;
  }
  .react-multiple-carousel__arrow--left {
    left: 18px;
    top: 10px;
  }
  .react-multiple-carousel__arrow--right {
    right: 58px;
    top: 10px;
  }
  padding-left: 40px;
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 12px;

  &::after {
    content: '';
    position: absolute;
    width: 56px;
    height: 4px;
    background: ${(props) => props.theme.purple};
    bottom: 0;
    left: calc(50% - 28px);
  }
`;

export const ContainerItems = styled.div`
  background: url('${(props) => props.imageurl}') no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  height: 220px;
  border-radius: 12px;
`;

export const CategoryButton = styled(Link)`
  color: ${(props) => props.theme.white};
  padding: 10px 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 24px;
  font-size: 22px;
  margin-top: 100px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
