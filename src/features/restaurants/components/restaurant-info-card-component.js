import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  font-weight: bold;
  padding-top: 16;
  padding-bottom: 16;
`;

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://th.bing.com/th/id/OIP.0U5z2dJ9fxsVtgHFTzKKZAHaJ3?&rs=1&pid=ImgDetMain",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isCloseTemporary = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Content>
        <Title>{name}</Title>
        <Text>{address}</Text>
        {isOpenNow ? <Text>Open Now</Text> : <Text>Closed Now</Text>}
        {isCloseTemporary && <Text>Close Temporary</Text>}
        <Text>Rating: {rating}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
