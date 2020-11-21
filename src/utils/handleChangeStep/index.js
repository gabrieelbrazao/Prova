import { Animated, Dimensions, Keyboard } from "react-native";

export default (stepsAnimation) => {
  Keyboard.dismiss();

  Animated.spring(stepsAnimation, {
    toValue: Dimensions.get("window").width * -1,
    speed: 3,
    bounciness: 5,
    useNativeDriver: true,
  }).start();
};
