import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, Pressable } from "react-native";

export default function App() {
  const [secondNumber, setSecondNumber] = useState("");

  const [operand, setOperand] = useState("");

  const [firstNumber, setFirstNumber] = useState("");
  const handleClick = () => {
    setFirstNumber(secondNumber);
    setSecondNumber("");
  };

  const negativeNumbers = () => {
    if ((operand === "" || operand !== "") && secondNumber !== "") {
      setOperand("-");
      handleClick();
    } else if (secondNumber === "") {
      setSecondNumber("-");
    }
  };

  const operation = () => {
    switch (operand) {
      case "+":
        var result = Number(firstNumber) + Number(secondNumber);
        setSecondNumber(result.toString());
        break;

      case "-":
        var result = Number(firstNumber) - Number(secondNumber);
        setSecondNumber(result.toString());
        break;

      case "/":
        var result = Number(firstNumber) / Number(secondNumber);
        setSecondNumber(result.toString());
        break;

      case "×":
        var result = Number(firstNumber) * Number(secondNumber);
        setSecondNumber(result.toString());
        break;

      default:
        Alert.alert("OPERATION NOT FOUND");
    }
    setOperand("");
    setFirstNumber("");
  };
  const SetCalcul = new String(
    firstNumber + " " + operand + " " + secondNumber
  );
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.mainText}>{SetCalcul}</Text>
      </View>
      <StatusBar style="light" />
      <View style={styles.orizontal}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "7")}
          secondNumber="7"
        >
          <Text style={styles.textButtton}>7</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "8")}
        >
          <Text style={styles.textButtton}>8</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "9")}
        >
          <Text style={styles.textButtton}>9</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            setOperand("+");
            handleClick();
          }}
        >
          <Text style={styles.textButtton}>+</Text>
        </Pressable>
      </View>
      <View style={styles.orizontal}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "4")}
        >
          <Text style={styles.textButtton}>4</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "5")}
        >
          <Text style={styles.textButtton}>5</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "6")}
        >
          <Text style={styles.textButtton}>6</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={negativeNumbers}>
          <Text style={styles.textButtton}>-</Text>
        </Pressable>
      </View>
      <View style={styles.orizontal}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "1")}
        >
          <Text style={styles.textButtton}>1</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "2")}
        >
          <Text style={styles.textButtton}>2</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "3")}
        >
          <Text style={styles.textButtton}>3</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            setOperand("×");
            handleClick();
          }}
        >
          <Text style={styles.textButtton}>×</Text>
        </Pressable>
      </View>
      <View style={styles.orizontal}>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + "0")}
        >
          <Text style={styles.textButtton}>0</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber(secondNumber + ".")}
        >
          <Text style={styles.textButtton}>.</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => setSecondNumber("")}
        >
          <Text style={styles.textButtton}>AC</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            setOperand("/");
            handleClick();
          }}
        >
          <Text style={styles.textButtton}>/</Text>
        </Pressable>
      </View>
      <Pressable style={styles.enterButton} onPress={operation}>
        <Text style={styles.textButtton}>Enter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21242f",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
  orizontal: {
    flexDirection: "row",
  },
  buttonContainer: {
    backgroundColor: "#4ba37b",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "17%",
    marginVertical: 10,
    marginHorizontal: 3,
  },
  textButtton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  enterButton: {
    backgroundColor: "#4ba37b",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "30%",
    marginVertical: 10,
    marginHorizontal: 5,
  },

  mainText: {
    fontWeight: "600",
    fontSize: 32,
    color: "#4ba37b",
    margin: 10,
  },
  resultContainer: {
    maxWidth: "80%",
  },
});
