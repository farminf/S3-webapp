import React from "react";
import NavigationbarDesktop from "../components/navigationbars/Desktop";
import NavigationbarMobile from "../components/navigationbars/Mobile";

export const ResponsiveContainer = props => (
  <div>
    <NavigationbarDesktop>{props.children}</NavigationbarDesktop>
    <NavigationbarMobile>{props.children}</NavigationbarMobile>
  </div>
);

export default ResponsiveContainer;
