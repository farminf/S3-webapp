/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

export default ({ content, size }) => {
  return (
    <Dimmer active inverted>
      <Loader inverted content={content} size={size} />
    </Dimmer>
  );
};
