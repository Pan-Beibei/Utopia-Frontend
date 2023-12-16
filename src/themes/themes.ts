const baseTheme = {
  breakpoints: {
    mobile: "393px",
    tablet: "834px",
    desktop: "1440px",
  },
  fontSizes: {
    mobile: {
      bulletSize: "1.2rem",
      drinkMenu: "1.6rem",
      story: {
        title: "1.6rem",
        content: "1.4rem",
        large: "1.2rem",
      },
    },
    tablet: {
      bulletSize: "1.4rem",
      drinkMenu: "2rem",
      story: {
        title: "1.6rem",
        content: "1.4rem",
        large: "1.2rem",
      },
    },
    desktop: {
      bulletSize: "1.4rem",
      drinkMenu: "2.4rem",
      story: {
        title: "1.6rem",
        content: "1.4rem",
        large: "1.2rem",
      },
    },
  },
  borderRadius: "2.6rem",
  padding: {
    tiny: "0.4rem",
    small: "0.8rem",
    medium: "1.2rem",
    big: "1.6rem",
  },
  PingFangSC: '"PingFang SC", serif',
};

const warmTheme = {
  colors: {
    bgColor: "#F1F3F4",
    black: "#000000",
    secondary: "#CC995A",
    primary: "#B05F25",
    white: "#FFFFFF",
    gray: "#8E8E8EA3",
  },
};

export { baseTheme, warmTheme };
