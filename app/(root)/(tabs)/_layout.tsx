import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-2 mt-3 flex flex-col items-center ">
    <Image
      source={icon}
      className="size-6"
      tintColor={focused ? "#0061FF" : "#666876"}
      resizeMode="contain"
    />
    <Text
      className={`${
        focused
          ? "text-primary-300  font-rubik-medium"
          : "text-black-200 font-rubik "
      } text-sm w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <TabIcon icon={icons.home} focused={focused} title="Home" />
          ),
        }}
      />
       <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: () => (
            <TabIcon icon={icons.search} focused={false} title="Explore" />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: () => (
            <TabIcon icon={icons.person} focused={false} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
