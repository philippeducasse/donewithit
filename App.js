import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground
} from "react-native";

export default function App() {
  // make sure to remove these for production, otherwise leads to performance issues
  console.log(Dimensions.get('screen'));
  let x = 1;
  return (
    // these views all get converted into their native versions. they are just representations
    // safeareaview only works on IOS
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("./assets/background.jpg")} resizeMode="cover" style={styles.image} />
      <View style={styles.logoContainer}>
        <Image source= {require('./assets/logo-red.png')} style= {styles.logo}/>
        <Text>Sell yo stuff</Text>
      </View>
      <View style={styles.login}/>
      <View style={styles.register}/>
      {/* <Text numberOfLines={1} onPress={() => console.log("hello")}>
        Open up App.js to start working on your app! lorem fdg gfsdfg sdfg dsfg
        sdfg sdfg dsfg sdfg sdg dsg sd{" "}
      </Text> */}
      {/* require is for assets */}
      {/* <Image source={require("./assets/splash.png")} />  */}
      {/* for urls we use  this object with uri property and DEFINE DIMENSIONS*/}
      {/* <TouchableNativeFeedback
        onPress={() => {
          console.log("image touched");
        }}
      > */}
        {/* <Image
          fadeDuration={1000}
          width={200}
          height={300}
          source={{ uri: "https://picsum.photos/200/300" }}
        /> */}
        {/* <View
          style={{ width: '100%', height: '30%', backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <Button title="click me!" onPress={() => Alert.alert('Achtung','Button Tapped',[{text: 'Yes'}, {text: 'Nein'}])} />
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

// this is not css, it is a representation that then gets compiled into the native styling through react native
// StyleSheet.create is an api that validates our styling code
// if you enter invalid stuff inline it doesnt through any errors
// recommended to use stylsheet API
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex:10,
    height: '100%',
    width: '100%',
  },
  login: {
    flex:1,
    backgroundColor: 'dodgerblue',
    width:'100%',
  },
  register: {
    flex: 1,
    backgroundColor: 'tomato',
    width:'100%',
  },
  logoContainer:{
    position: 'absolute',
    top: 150,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  logo:{
    width:100,
    height: 100,
    marginBottom: 20
  }
});

//
