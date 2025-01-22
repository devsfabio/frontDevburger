import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  cursor: grab;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  div {
    width: 100%;
    height: 80px; /* Ajuste se necessário */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;

    p {
      font-size: 18px;
      color: ${(props) => props.theme.orange};
      line-height: 20px;
      font-weight: 700;
      margin-top: 10px; /* Ajuste a margem conforme necessário */
    }

    strong {
      font-size: 22px;
      color: #363636;
      font-weight: 800;
      line-height: 20px;
    }
  }
`;

export const CardImage = styled.img`
  max-width: 100%; /* Preenche o contêiner */
  height: auto; /* Mantém a proporção da imagem */
  max-height: 100px; /* Limita a altura máxima, ajuste conforme necessário */
  object-fit: cover; /* Corta a imagem se necessário, mantendo a proporção */
  border-radius: 8px; /* Adiciona bordas arredondadas, opcional */
  margin-bottom: -30px; /* Ajusta para que a imagem fique sobrepondo a div se necessário */
`;
