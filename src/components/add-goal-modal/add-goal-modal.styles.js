import styled from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

export const AddGoalModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
`;
