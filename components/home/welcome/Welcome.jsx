import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Carlos</Text>
        <Text style={styles.welcomeMessage}>Fin your perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onChange={() => {}}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                router.push(`/search/${item}`);
                setActiveJobType(item);
              }}
            >
              <Text style={styles.tab(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
