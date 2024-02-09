import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalSeparator = ({ percentage }) => {
  return <View style={[styles.separator, { width: `${percentage}%` }]}></View>;
};

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.7,
    borderColor: "#424242",
    alignSelf: "center", // Alinea la línea en el centro horizontalmente
    marginVertical: 10, // Espacio vertical opcional entre elementos
    borderRadius: 100,
  },
});

export default HorizontalSeparator;
