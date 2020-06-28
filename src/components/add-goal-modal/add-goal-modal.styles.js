import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const ModalForm = styled.form`
  width: 30vw;
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 2;

  background-color: white;
  border-radius: 25px;

  padding: 50px 0;
  ${scaleUpAnimation};
`;
