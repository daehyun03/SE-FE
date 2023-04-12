import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

import { openColors } from "./openColor";
import { semanticColors } from "./semanticColor";

const buttonStyle: ComponentStyleConfig = {
  variants: {
    primary: {
      backgroundColor: semanticColors.primary,
      color: semanticColors["primary-content"],
      _hover: {
        bg: semanticColors["primary-focus"],
        backgroundColor: semanticColors["primary-focus"],
        _disabled: {
          backgroundColor: semanticColors.primary,
        },
      },
      _disabled: {
        bakgroundColor: semanticColors.primary,
      },
    },
    "primary-outline": {
      border: `1px solid ${semanticColors.primary}`,
      color: semanticColors.primary,
      _hover: {
        backgroundColor: semanticColors.primary,
        color: semanticColors["primary-content"],
      },
    },
    danger: {
      backgroundColor: semanticColors.error,
      _hover: {
        backgroundColor: semanticColors["error-focus"],
        _disabled: {
          backgroundColor: semanticColors.error,
        },
      },
      _disabled: {
        bakgroundColor: semanticColors.error,
      },
    },
    "danger-outline": {
      border: `1px solid ${semanticColors.error}`,
      color: semanticColors.error,
      _hover: {
        backgroundColor: semanticColors.error,
        color: semanticColors["error-content"],
      },
    },
  },
};

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: openColors.gray[7],
      },
    },
  },
  fonts: {
    heading: `"Noto Sans KR", sans-serif`,
    body: `"Noto Sans KR", sans-serif`,
  },
  colors: { ...openColors, ...semanticColors },
  components: {
    Button: buttonStyle,
  },
});
