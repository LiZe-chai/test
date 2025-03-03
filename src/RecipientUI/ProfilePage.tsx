import React, { useState } from "react";
import {ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, Image, Modal, TextInput,Button,FlatList} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Checkbox } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";


const { width, height } = Dimensions.get("window");


const ProfilePage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("Chai");
  const [email, setEmail] = useState("Chai@example.com");
  const [phone, setPhone] = useState("+60123456789");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
  const [modal1Visible, setModal1Visible] = useState(false);

  const eWasteOptions = ["Air Conditioner","Computer/Laptop", "Mobile Phone", "Refrigerator", "Television", "Washing Machine"];
  const statesWithCities = {
      "Selangor": ["Shah Alam", "Petaling Jaya", "Subang Jaya"],
      "Kuala Lumpur": ["Bukit Bintang", "Cheras", "Mont Kiara"],
      "Johor": ["Johor Bahru", "Muar", "Batu Pahat"],
    };
  const toggleSelection = (item) => {
      setSelectedTypes((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };
  const toggleCitySelection = (city) => {
      setSelectedCities((prevSelected) =>
        prevSelected.includes(city) ? prevSelected.filter((c) => c !== city) : [...prevSelected, city]
      );
    };

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
         <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.toggleButton}>
                 <Text style={styles.toggleButtonText}>
                   {isExpanded ? "Hide E-Waste Type Selection ▲" : "E-Waste Specification"}
                 </Text>
               </TouchableOpacity>

               {isExpanded && (
                 <View style={styles.eWasteTypeContainer}>
                   {eWasteOptions.map((item, index) => (
                     <TouchableOpacity key={index} onPress={() => toggleSelection(item)} style={styles.optionContainer}>
                       <Checkbox status={selectedTypes.includes(item) ? "checked" : "unchecked"} />
                       <Text style={styles.optionText}>{item}</Text>
                     </TouchableOpacity>
                   ))}
                 </View>
               )}
          <TouchableOpacity onPress={() => setModal1Visible(true)} style={styles.toggleButton}>
           <Text style={styles.toggleButtonText}>
                          Service Area Specification
                    </Text>
           </TouchableOpacity>

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
                  setPhone("+60");
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
            <Modal visible={modal1Visible} animationType="slide" transparent={true}>
                       <View style={styles.modal1Container}>
                         <View style={styles.modal1Content}>
                           <Text style={styles.modal1Title}>Select Service Area</Text>

                           <Picker
                             selectedValue={selectedState}
                             onValueChange={(itemValue) => {
                               setSelectedState(itemValue);
                               setSelectedCities([]);
                             }}
                             style={styles.picker}
                           >
                             <Picker.Item label="Select State" value="" />
                             {Object.keys(statesWithCities).map((state) => (
                               <Picker.Item key={state} label={state} value={state} />
                             ))}
                           </Picker>
                           {selectedState !== "" && (
                             <>
                               <Text style={{ fontSize: width*0.04, fontWeight: "bold", marginTop: 10,color: "black" }}>Select Cities:</Text>
                               <FlatList
                                 data={statesWithCities[selectedState]}
                                 keyExtractor={(item) => item}
                                 renderItem={({ item }) => (
                                   <TouchableOpacity
                                     onPress={() => toggleCitySelection(item)}
                                     style={{
                                       flexDirection: "row",
                                       alignItems: "center",
                                       paddingVertical: 5,
                                     }}
                                   >
                                     <View
                                       style={{
                                         width: width*0.05,
                                         height: width*0.05,
                                         borderRadius:2,
                                         borderWidth: 2,
                                         borderColor: "black",
                                         backgroundColor: selectedCities.includes(item) ? "black" : "white",
                                         marginRight: width*0.03,
                                       }}
                                     />
                                     <Text>{item}</Text>
                                   </TouchableOpacity>
                                 )}
                               />
                             </>
                           )}

                           <Button title="Confirm" onPress={() => setModal1Visible(false)} />
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
    width: width * 0.9,
  },
 toggleButton: {
    backgroundColor: "#007bff",
    padding: width * 0.04,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  serviceAreaButton:{
      backgroundColor: "#007bff",
      padding: width * 0.04,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 10,
      },
  eWasteTypeContainer: {
    backgroundColor: "#f8f9fa",
    padding: width *0.02,
    borderRadius: 5,
    marginBottom: height * 0.02,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: width *0.02,
  },
  optionText: {
    marginLeft: width * 0.02,
    fontSize: width*0.05,
    color:"black"
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
  modal1Container:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)"
   },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: width * 0.01,
    borderRadius: width * 0.05,
    alignItems: "center",
    zIndex: 10,
  },
  modal1Content:{
      backgroundColor: "white",
      padding: width*0.05,
      borderRadius: 10,
      marginHorizontal: width*0.05
    },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
  modal1Title: {
      fontSize: width*0.05,
      fontWeight: "bold",
      marginBottom: 10 ,
      color:"black"
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
 picker: {
    height: height*0.1,
    marginBottom: 10,
  },

  citySelectionText: {
    fontSize: width*0.03,
    fontWeight: "bold",
    marginTop: 10,
  },
  cityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "white",
    marginRight: 10,
  },
});

export default ProfilePage;




