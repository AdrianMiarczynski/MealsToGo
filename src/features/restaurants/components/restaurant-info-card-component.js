import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

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
        <Text style={styles.title}>{name}</Text>
        <Text style>{address}</Text>
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
  title: {
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 16,
  },
});
