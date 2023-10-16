import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "OneTime"];
const Cities = ["Iasi", "Bucuresti", "Constanta", "Cluj-Napoca", "Timisoara","Brasov","Galati","Ploiesti","Oradea","Braila","Arad","Pitesti","Sibiu","Bacau","Targu Mures","Baia Mare","Buzau","Botosani","Satu Mare","Ramnicu Valcea","Suceava","Focsani","Piatra Neamt"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");
  const [activeCity, setActiveCity] = useState("Iasi");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Salut Username</Text>
        <Text style={styles.welcomeMessage}>Gaseste jobul perfect</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Cauti job?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
      <FlatList style={styles.marginBottom}
          data={Cities}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeCity, item)}
            >
              <Text style={styles.tabText(activeCity, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
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
