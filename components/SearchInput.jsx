import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <View
      className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200
        ${focused ? "border-secondary" : ""} items-center flex flex-row space-x-4`}
    >
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        onPress={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
