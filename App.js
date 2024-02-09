import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HorizontalSeparator from "./components/HorizontalSeparator";

export default function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [operationHistory, setOperationHistory] = useState([]);
  const [theme, setTheme] = useState("dark");

  const handleButtonPress = (value) => {
    if (value === "=") {
      try {
        const result = eval(operation);
        setDisplayValue(result.toString());
        setOperationHistory((prevHistory) => [
          ...prevHistory,
          `${operation} = ${result}`,
        ]);
        setOperation(result.toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    } else if (value === "C") {
      setDisplayValue("0");
      setOperation("");
      setOperationHistory([]);
    } else {
      setOperation((prevOperation) => prevOperation + value);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const styles = theme === "dark" ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <View style={styles.historyContainer}>
        <FlatList
          data={operationHistory}
          renderItem={({ item }) => (
            <Text style={styles.historyItem}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          inverted
        />
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{operation || displayValue}</Text>
      </View>
      <HorizontalSeparator percentage={96} />
      <View style={styles.buttonRow}>
        {[{ value: 7 }, { value: 8 }, { value: 9 }, { value: "+" }].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                item.special ? styles.specialButton : null,
              ]}
              onPress={() => handleButtonPress(item.value)}
            >
              <Text style={styles.buttonText}>{item.value}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={styles.buttonRow}>
        {[{ value: 4 }, { value: 5 }, { value: 6 }, { value: "-" }].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                item.special ? styles.specialButton : null,
              ]}
              onPress={() => handleButtonPress(item.value)}
            >
              <Text style={styles.buttonText}>{item.value}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={styles.buttonRow}>
        {[{ value: 1 }, { value: 2 }, { value: 3 }, { value: "*" }].map(
          (item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                item.special ? styles.specialButton : null,
              ]}
              onPress={() => handleButtonPress(item.value)}
            >
              <Text style={styles.buttonText}>{item.value}</Text>
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={styles.buttonRow}>
        {[
          { value: 0 },
          { value: "=", special: true },
          { value: "C" },
          { value: "/" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, item.special ? styles.specialButton : null]}
            onPress={() => handleButtonPress(item.value)}
          >
            <Text style={styles.buttonText}>{item.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={toggleTheme} style={styles.themeButton}>
        <Text style={styles.themeButtonText}>Cambiar tema</Text>
      </TouchableOpacity>
    </View>
  );
}

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    paddingTop: 20,
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "#212121",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  historyItem: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "right",
  },
  displayContainer: {
    backgroundColor: "#212121",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  displayText: {
    fontSize: 48,
    color: "#FFFFFF",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#424242",
    alignItems: "center",
    justifyContent: "center",
  },
  specialButton: {
    backgroundColor: "#FFA000",
  },
  buttonText: {
    fontSize: 36,
    color: "#FFFFFF",
  },
  themeButton: {
    marginTop: 20,
    backgroundColor: "#FFA000",
    padding: 10,
    borderRadius: 10,
  },
  themeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 20,
  },
  historyContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  historyItem: {
    fontSize: 16,
    color: "#000000",
    textAlign: "right",
  },
  displayContainer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  displayText: {
    fontSize: 48,
    color: "#000000",
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
  },
  specialButton: {
    backgroundColor: "#FFA000",
  },
  buttonText: {
    fontSize: 36,
    color: "#000000",
  },
  themeButton: {
    marginTop: 20,
    backgroundColor: "#FFA000",
    padding: 10,
    borderRadius: 10,
  },
  themeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
