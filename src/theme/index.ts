import { extendTheme } from "@chakra-ui/react";

import { FormLabel } from "./components/formLabel";
import { colors } from "./colors";
import { breakpoints } from "./breakpoints";
import { Text } from "./components/text";

const layerStyles = {
  dashboardCard: {
    border: "0.5px solid rgba(191, 187, 214, 0.36)",
    // boxShadow:
    //   "4px 4px 14px rgba(0, 0, 0, 0.03), 4px 4px 14px rgba(121, 109, 182, 0.14);",
    borderRadius: "16px",
    bg: "white",
  },
  disabledCard: {
    border: "0.5px solid rgba(191, 187, 214, 0.36)",
    borderRadius: "16px",
    bg: "white",
    filter: "grayscale(100%)",
    opacity: 0.6,
    position: "relative",
    "&:after": {
      content: '"Coming Soon"',
      position: "absolute",
      right: "24px",
      top: "-8px",
      bg: "gray",
      color: "white",
      fontSize: ".625rem",
      p: "4px 8px",
      borderRadius: "4px",
    },
  },
  buttonShadow: {
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  formCard: {
    border: "0.5px solid rgba(191, 187, 214, 0.36)",
    borderRadius: "15px",
    bg: "white",
    px: { xs: "20px", lg: "24px" },
    py: "24px",
  },
};

const textStyles = {
  paragraph: {
    fontSize: "1rem",
    fontWeight: "normal",
    letterSpacing: "0.7px",
    color: "text.black",
  },
  cardHeading: {
    fontSize: "1rem",
    color: "text.veryDarkBlue",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  pageHeading: {
    fontSize: "1.5rem",
    lineHeight: "45px",
    letterSpacing: "0.03em",
    fontWeight: "600",
  },
  helper: {
    fontSize: "0.75rem",
    lineHeight: "15px",
    color: "text.formLabel",
  },
  authPageHeading: {
    fontSize: "1.875rem",
    color: "text.veryDarkBlue",
    fontWeight: "600",
  },
  statsCount: {
    fontSize: "2rem",
    fontWeight: "600",
  },
};

export const theme = extendTheme({
  layerStyles,
  textStyles,
  colors,
  fonts: {
    body: "Epilogue , sans-serif",
    heading:"Epilogue , sans-serif"
  },
  breakpoints,
  components: {
   
    Text,
    FormLabel,
  },
});
