import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary || "#FFFFFF"};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3] || "16px"};
  background-color: ${(props) => props.theme.colors.bg.primary || "#FFFFFF"};
`;
export const RestaurantCardContent = styled(Card.Content)``;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3] || "16px"};
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2] || "8px"};
  padding-bottom: ${(props) => props.theme.space[2] || "8px"};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
