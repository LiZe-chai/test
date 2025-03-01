import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { TextInput, Button} from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");

const data = [
  { label: 'Kualiti Alam', value: '1' },
  { label: 'ECO eWaste Solutions', value: '2' },
  { label: 'Meriahtek (M) Sdn Bhd', value: '3' },
  { label: 'Safe & Clean Disposal', value: '4' },
  { label: 'Ewaste Recycling Malaysia', value: '5' },
  { label: 'Pentas Flora', value: '6' },
  { label: '3R Quest', value: '7' },
  { label: 'Reclaimtek (M) Sdn Bhd', value: '8' },
];

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Names</Text>
      <Text style={styles.subtitle}>Recipient</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Your Company' : '...'}
        searchPlaceholder="Search... "
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <TextInput
        label="Email Address"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isVisible}
        right={
          <TextInput.Icon
            icon={isVisible ? "eye-off" : "eye"}
            onPress={() => setIsVisible(!isVisible)}
          />}
        style={styles.input}
      />

      <TouchableOpacity onPress={() => console.log("Forgot Password")}>
        <Text style={styles.linkText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Create Account")}>
        <Text style={styles.linkText}>Create a New Account</Text>
      </TouchableOpacity>

      <Button mode="contained" onPress={() => console.log("Login")} style={styles.loginButton}>
        LOGIN
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: height * 0.01,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    marginBottom: height * 0.08,
    color: "#0a0a0a",
  },
  subtitle: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#555",
    marginBottom: height * 0.07,
  },
  dropdown: {
    height: height * 0.06,
    width: "80%",
    borderColor: "#0a0a0a",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: height * 0.03,
  },
  placeholderStyle: {
    color: "#161717",
    fontSize: width * 0.04,
  },
  selectedTextStyle: {
    color: "#2645f0",
    fontSize: width * 0.04,
  },
  input: {
    width: "80%",
    maxWidth: 450,
    backgroundColor: "white",
    marginBottom: height * 0.02,
  },
  loginButton: {
    width: "60%",
    maxWidth: 400,
    marginTop: height * 0.04,
  },
  linkText: {
    color: "blue",
    marginTop: height * 0.03,
    fontSize: width * 0.04,
  },
});

export default LoginPage;