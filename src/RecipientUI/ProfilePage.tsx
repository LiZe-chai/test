import React, { useState } from "react";
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Image, Modal, TextInput} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const ProfilePage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Chai");
  const [email, setEmail] = useState("Chai@example.com");
  const [phone, setPhone] = useState("+60123456789");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.07} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../assets/collectorProfile.jpg")}
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {Array.from({ length: 20 }, (_, i) => (
          <View key={i} style={styles.box}>
            <Text style={styles.text}>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => {
                if (text.length < 3) {
                  setPhone("+60"); // 防止删除前缀
                } else if (!text.startsWith("+60")) {
                  setPhone("+60" + text.replace(/[^0-9]/g, ""));
                } else {
                  setPhone("+60" + text.slice(3).replace(/[^0-9]/g, ""));
                }
              }}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
  },
  headerTitle: {
    fontSize: width * 0.07,
    fontWeight: "bold",
    color: "black",
    marginLeft: width * 0.03,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: width * 0.05,
    borderRadius: width * 0.03,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.02,
    elevation: 3,
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    backgroundColor: "#ddd",
  },
  profileDetails: {
    marginLeft: width * 0.04,
    flex: 1,
  },
  profileName: {
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: width * 0.04,
    color: "gray",
  },
  editButton: {
    marginTop: height * 0.01,
    padding: height * 0.015,
    backgroundColor: "#3498db",
    borderRadius: width * 0.02,
    alignSelf: "flex-start",
  },
  editButtonText: {
    color: "#fff",
    fontSize: width * 0.035,
    fontWeight: "bold",
  },
  scrollContent: {
    paddingTop: height * 0.03,
    paddingBottom: height * 0.05,
  },
  box: {
    backgroundColor: "#3498db",
    padding: width * 0.05,
    marginBottom: height * 0.02,
    borderRadius: width * 0.03,
    alignItems: "center",
    width: width * 0.9,
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: height * 0.03,
    borderRadius: width * 0.05,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: width * 0.02,
    padding: width * 0.03,
    marginBottom: height * 0.02,
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: height * 0.02,
  },
  saveButton: {
    backgroundColor: "#3498db",
    padding: width * 0.03,
    borderRadius: width * 0.02,
    marginRight: width * 0.02,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "gray",
    padding: width * 0.03,
    borderRadius: width * 0.02,
  },
  cancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ProfilePage;




