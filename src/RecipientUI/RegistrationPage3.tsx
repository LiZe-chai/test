import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

const registrationTypes = [
  { label: "Company Registration Number Old", value: "company_old" },
  { label: "Business Registration Number Old", value: "business_old" },
  { label: "Company Registration Number New", value: "company_new" },
  { label: "Business Registration Number New", value: "business_new" },
  { label: "LLP Registration Number", value: "llp" },
];

const RegistrationPage2 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Names-Partner</Text>
      <Text style={styles.subtitle}>Enter your company profile</Text>
      <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={registrationTypes}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Your Registration type' : '...'}
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
        label="Business register number"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Set Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!isPasswordVisible}
        right={
          <TextInput.Icon
            icon={isPasswordVisible ? "eye-off" : "eye"}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />}
        style={styles.input}
      />
      <TextInput
        label="Set Confirm Password"
        mode="outlined"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!isConfirmPasswordVisible}
        right={
          <TextInput.Icon
            icon={isConfirmPasswordVisible ? "eye-off" : "eye"}
            onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
          />}
        style={styles.input}
      />

      <Button mode="contained" onPress={() => console.log("Next")} style={styles.NextButton}>
        Next
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
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#0a0a0a",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 50,
  },

  input: {
    width: "70%",
    maxWidth: 400,
    backgroundColor: "white",
    marginBottom: 25,
  },
  NextButton: {
    width: "50%",
    maxWidth: 400,
    marginTop: 40,
  },

});