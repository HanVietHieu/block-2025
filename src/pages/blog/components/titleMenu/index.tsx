import type { TitleProps } from "antd/es/typography/Title";
import React from "react";
import styled from "styled-components";

const TitleMenu: React.FC<TitleProps> = ({ content = "" }) => {
  return <TitleHeader className="title-blog">{content}</TitleHeader>;
};

export default TitleMenu;

const TitleHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  position: relative;
  width: max-content;
  color: #173b6c;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background: #149ddd;
    bottom: -5px;
    left: 0;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  } 
`;
