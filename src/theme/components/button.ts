export const Button = {
  baseStyle: {
    transition: "all ease 0.3s",
    outline: "none",
    boxShadow: "none",
    borderRadius: "8px",
    "&:active": {
      transform: "scale(0.95)",
    },
    "&:focus": {
      outline: "none !important",
      boxShadow: "none !important",
    },
    h: "auto",

    _hover: {
      _disabled: {
        background: "",
      },
    },
  },
  sizes: {
    sm: {
      fontSize: "0.875rem",
      px: "16px",
      py: "8px",
      maxHeight: "none",
      height: "auto",
      minHeight: "32px",
    },
    md: {
      fontSize: ".875rem",
      py: "15px",
      px: "24px",
      maxHeight: "none",
      height: "auto",
      minHeight: "44px",
    },
    lg: {
      fontSize: "1rem",
      py: "14px",
      px: "20px",
      maxHeight: "none",
      height: "auto",
    },
  },
  variants: {
    primary: {
      color: "white",
      bg: "primary",
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
