import styled from "styled-components";

const TopSmall = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
  padding-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled.View`
  padding-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
`;

export const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }

  return <TopSmall />;
};
