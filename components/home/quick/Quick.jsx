import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./Quick.style";

import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Quick = () => {
  const router = useRouter();

//   const { data, isLoading, error } = useFetch("search", {
//     query: "React",
//     num_pages: 1,
//   });

  const [selectedJob, setSelectedJob] = useState();
  // console.log(data);

  const handleCardPress = (item) => {
    // router.push(`/job-details/${item.job_id}`);
    // setSelectedJob(item.job_id);
  };
  // give some dummy data 
    const data = [
        {
            job_id: 1,
            job_title: "Crucea Rosie",
            job_type: "Full Time",
            job_location: "Remote",
            job_salary: "1000",
        },
        {
            job_id: 2,
            job_title: "Inima Copiilor",
            job_type: "Full Time",
            job_location: "Remote",
            job_salary: "1000",
        }
    ]
    const isLoading = false;
    const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Voluntariat</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Arata tot</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Quick;
