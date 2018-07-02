/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
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
