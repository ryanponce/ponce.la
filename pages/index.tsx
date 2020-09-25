import React from "react";
import styled from "styled-components";

export default function IndexPage() {
  return (
    <div>
      <GreetingText>Hi, I'm Ryan</GreetingText>
    </div>
  );
}

const GreetingText = styled.p`
  color: ${(props) => props.theme.colors.main};
`;
