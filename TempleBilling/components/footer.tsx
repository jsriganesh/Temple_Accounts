import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { colors } from "../../utils/colors";
// import { ScreenName } from "../../utils/screenNames";
import { localizationText } from "@/constants/commonMenthod";
import { appColors } from "@/constants/constant";
import { updateActiveFooter } from "@/redux/slices/footerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "expo-router";


const Footer = () => {

  const footerOptions = [
    {
      label: localizationText("Common","home"),
      icon: require("./../assets/images/footerImage/home.png"),
      key: "home",
      navigateTo: '/(auth)/home',
    },
    {
      label: localizationText("Common","address"),
      icon: require("./../assets/images/footerImage/address.png"),
      key: "address",
      navigateTo: '/(auth)/addressBook',
    },
    {
      label: localizationText("Common","reports"),
      icon: require("./../assets/images/footerImage/report.png"),
      navigateTo: '/(auth)/reports',
      key: "Reports",
    },
  
    {
      label: localizationText("Common","profile"),
      icon: require("./../assets/images/footerImage/profile.png"),
      key: "Profile",
    },
  ];

  
  const dispatch = useAppDispatch();
  const { selectedFooterOption } = useAppSelector((state) => state.footer);
  const router = useRouter()

  return (
    <View style={styles.container}>
      {footerOptions.map((opt, index) => {
        return (
          <TouchableOpacity
            onPress={() => {
              dispatch(updateActiveFooter(opt.key));
              if (opt.navigateTo) {
                router.replace(opt.navigateTo as never);
                // navigation.navigate(opt.navigateTo as never);
              }
            }}
            key={index}
            style={
              selectedFooterOption === opt.key
                ? styles.activeSyle
                : styles.inActiveSyle
            }
          >
            <Image
              tintColor={
                selectedFooterOption === opt.key
                  ? appColors.themeColor
                  : 'white'
              }
              source={opt.icon}
              style={{ height: 20, width: 20 }}
            />
            {selectedFooterOption === opt.key && (
              <Text style={{ color: appColors.themeColor, marginLeft: 5 }}>
                {opt.label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 50,
    backgroundColor: appColors.themeColor,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeSyle: {
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
    height: 30,
    backgroundColor: 'white',
    alignItems: "center",
  },
  inActiveSyle: {
    flexDirection: "row",
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "center",
    verticalAlign: "middle",
    height: 35,
    width: 45,
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center",
  },
});
