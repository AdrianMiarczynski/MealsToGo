import styled from "styled-components/native";
import { Text as NativeText } from "react-native";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
font-size: ${theme.fontSizes.body};
`;
const hint = (theme) => `
font-size: ${theme.fontSizes.body};
`;
const error = (theme) => `
color: ${theme.colors.text.error};
`;
const caption = (theme) => `
font-size: ${theme.fontSizes.caption};
font-weight: ${theme.fontWeights.body};
`;

const label = (theme) => `
font-family: ${theme.fonts.heading};
font-size: ${theme.fontSizes.body};
font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled(NativeText)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => {
    const variantStyle = variants[variant];
    return variantStyle ? variantStyle(theme) : variants.body(theme);
  }}
`;
// Text.defaultProps = {
//   variant: "body",
// };
