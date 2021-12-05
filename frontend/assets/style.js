import {ImageBackground, View, StyleSheet} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  menuWrap:{
    backgroundColor: "#FBE8B3",
    marginTop: 30,
    borderRadius: 25,
    width: 800,
    height: "90%",
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 4,
    overflow: "hidden",
  },

  wrap:{
    align: "center",
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  image: {
    marginTop: -10,
    marginBottom: 20,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#A1869E",
    borderRadius: 30,
    width: "30%",
    height: 40,
    marginBottom: 14,
    alignItems: "center",
  },

  loginText:{
    fontFamily: "Garamond, serif",
    fontWeight: "bold",
    color: "white",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontFamily: "Garamond, serif",
    fontSize: 14,
    fontWeight: "bolder",
    marginTop: -10,
    marginBottom: 10,
    padding: 20,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },

  registerBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },
});