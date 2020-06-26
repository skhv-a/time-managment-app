import styled, { css } from 'styled-components';

//!Headers

const inProcessHeader = css`
  background-color: #1f206f;
`;

const doneHeader = css`
  background-color: #242583;
`;

//!LogoContainer

const mainLogoContainer = css`
  background-image: linear-gradient(90deg, #3b3dc5 25%, #ef820d 95%);
  border: 2px solid #ffa100;
`;

const inProcessLogoContainer = css`
  background-color: #3b3dc5;
`;

const doneLogoContainer = css`
  background-color: #ef820d;
`;

const setHeaderStylesFromProps = ({ props }) => {
  if (props.inProcess) {
    return inProcessHeader;
  } else if (props.done) {
    return doneHeader;
  }
};

const setLogoContainerStylesFromProps = ({ props }) => {
  if (props.mainLogo) {
    return mainLogoContainer;
  } else if (props.inProcess) {
    return inProcessLogoContainer;
  } else {
    return doneLogoContainer;
  }
};

export const CustomHeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${setHeaderStylesFromProps};
`;

export const LogoContainer = styled.div`
  min-width: 200px;
  height: 70px;
  border-radius: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${setLogoContainerStylesFromProps}
`;

export const LogoTitle = styled.span`
  font-family: Roboto-Medium;
  font-size: min(2vw, 32px);
  padding: 0 20px;

  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
`;