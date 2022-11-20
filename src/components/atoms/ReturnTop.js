import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const getColorText = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.danger.text;
    default:
      return "#212121";
  }
};

const ButtonACT = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 8px 200px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};
  display: inline-block;
  text-decoration: none;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

function ReturnDoc() {
  window.scroll({
    top: document.body.offsetTop,
    left: 0,
    behavior: "smooth",
  });
}

const ReturnTop = ({ icon }) => (
  <ButtonACT onClick={ReturnDoc}>{icon}</ButtonACT>
);

ReturnTop.defaultProps = {
  icon: undefined,
};

ReturnTop.propTypes = {
  icon: PropTypes.node,
};

export default ReturnTop;
