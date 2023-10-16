import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 250,
    padding: SIZES.xLarge,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    borderRadius: SIZES.medium,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    overflow: "hidden", // Important: Clip the blurred gradient background within the container
    position: "relative", // Important: Make sure the blurred gradient background covers the whole container
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
    opacity: 0.9, // Adjust the opacity as needed
    // Add gradient colors here using the "linear-gradient" syntax
    // For example: "linear-gradient(to bottom, #4c669f, #3b5998, #192f6a)"
    // Or you can use COLORS.primary and COLORS.secondary if you have defined them in constants
    backgroundColor: "linear-gradient(to bottom, #4c669f, #3b5998, #192f6a)",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
