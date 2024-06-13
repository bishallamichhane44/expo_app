import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me!"
        onPress={() => console.log("Button pressed!")}
        color="#4CAF50"
      />
      {/* You can remove this Text component or update its content */}
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Index;
