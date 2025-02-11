import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  const [focused, setFocused] = useState(false);

  return (
    <View
      className={`w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200
        ${focused ? "border-secondary" : ""} items-center flex flex-row space-x-4`}
    >
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#cdcde0"
        onChangeText={(e) => setQuery(e)}
        onPress={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query)
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database."
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
