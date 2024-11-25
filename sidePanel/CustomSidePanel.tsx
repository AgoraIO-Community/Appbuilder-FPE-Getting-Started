import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { CustomWrapperContext } from "../custom-context/CustomWrapper";
import { customEvents, UidType, useContent } from "customization-api";

const CustomSidePanel = () => {
  const { raisedHandUsers, setRaisedHandUsers } =
    useContext(CustomWrapperContext);
  const { defaultContent } = useContent();

  // Handler to lower a user's raised hand
  const handleLowerHand = (uid: UidType) => {
    const data = {
      hand_raised: false,
      user_uid: uid,
    };
    // Emit custom event to notify other Hosts
    customEvents.send("LowerHandEvent", JSON.stringify({ data }), uid);
    // Remove the uid from the raiseHandUsers List
    setRaisedHandUsers((prev) => prev.filter((user) => user.user_uid !== uid));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Filter and display only users with raised hands */}
        {raisedHandUsers
          .filter((user) => user.hand_raised)
          .map((user) => (
            <View key={user.user_uid} style={styles.userRow}>
              <Text style={styles.userName}>
                {defaultContent[user.user_uid].name}
              </Text>
              {/* Hand raised emoji indicator */}
              <Text style={styles.handStatus}>✋</Text>
              {/* Button to lower user's hand */}
              <TouchableOpacity
                onPress={() => handleLowerHand(user.user_uid)}
                style={styles.crossButton}
              >
                <Text style={styles.crossIcon}>❌</Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default CustomSidePanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  userName: {
    color: "white",
    flex: 1,
    fontSize: 16,
  },
  handStatus: {
    fontSize: 18,
    marginLeft: 8,
  },
  crossButton: {
    marginLeft: 8,
    padding: 4,
  },
  crossIcon: {
    fontSize: 14,
  },
});
