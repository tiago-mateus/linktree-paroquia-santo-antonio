import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-YH4VHPJWD7"); // Substitua pelo seu Measurement ID
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
