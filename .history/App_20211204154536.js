import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import logo from './frontend/assets/QU3ST2.png';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.wrap}>
       <Router>
        <Switch>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </View>
  );
}
