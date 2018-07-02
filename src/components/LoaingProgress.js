import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

export default ({ content, size }) => {
  return (
    <Dimmer active inverted>
      <Loader inverted content={content} size={size} />
    </Dimmer>
  );
};
