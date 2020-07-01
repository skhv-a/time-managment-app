import styled, { css } from 'styled-components';
import { scaleUpAnimation } from '../../animations/animations';

//Goals

const setStylesToGoalsContainer = ({ whichComponent }) => {
  if (whichComponent === 'inProcess' || whichComponent === 'done') {
    return css`
      width: 95%;
      height: calc(100% - 100px - 5vh);
      margin-top: 5vh;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 300px);
      grid-auto-rows: min-content;
      row-gap: 35px;
    `;
  }
};

export const Goals = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-self: center;

  flex: 1;

  overflow-x: hidden;
  overflow-y: scroll;

  margin: 0 auto;

  ${setStylesToGoalsContainer}
`;

//NothingMessage

const nothingInProcessMessageStyles = css`
  font-family: Roboto-Regular;
  font-size: min(1.7vw, 25px);
  min-height: 60px;

  background-color: #3b3dc5;
`;

const setStylesToNothingMessage = ({ whichComponent }) => {
  if (whichComponent === 'inProcess') {
    return nothingInProcessMessageStyles;
  }
};

export const NothingMessage = styled.span`
  font-family: RobotoCondensed-Light;
  font-size: 25px;
  color: white;

  margin: auto auto;
  padding: 25px;
  border-radius: 26px;
  background-color: #242582;
  ${setStylesToNothingMessage};
  ${scaleUpAnimation};

  @media only screen and (min-width: 1472px) {
    font-size: min(1.5vw, 28px);
  }
`;
