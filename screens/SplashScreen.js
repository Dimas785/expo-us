import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Button, Layout, Text } from "@ui-kitten/components";

const SpalshScreen = () => {
  return (
    <View>
      <Image
        source={require("../assets/bank.png")}
        style={{ padding: 20, margin: 89, top: 230 }}
      />
    </View>
  );
};

export default SpalshScreen;
