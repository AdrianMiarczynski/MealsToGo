import styled from "styled-components/native";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfoCard } from "../components/restaurant-info-card-component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space?.[3] || "16px"};
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space?.[3] || "16px"};
  background-color: ${(props) => props.theme.colors.bg?.tertiary || "#f4e1e3"};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <ListContainer>
        <RestaurantsInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f4e1e3",
//   },
// });
