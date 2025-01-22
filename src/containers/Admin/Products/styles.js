import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
  background: #f1f1f1;
`;

export const EditButton = styled.button`
  border: 0;
  background: ${(props) => props.theme.secondWhite};
  height: 32px;
  width: 32px;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 17px;
    width: 17px;
  }

  &:hover {
    background: ${(props) => props.theme.purple};

    svg {
      fill: ${(props) => props.theme.white};
    }
  }
`;
