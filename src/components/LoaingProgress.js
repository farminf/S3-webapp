import React from "react";
import { Loader, Grid, Dimmer } from "semantic-ui-react";

export default () => {
  return (
    <Grid
      container
      columns={4}
      textAlign="center"
      style={{
        paddingTop: "80px",
        height: "calc(100% - 1px)"
      }}
    >
      <Dimmer active inverted>
        <Loader indeterminate inverted content="Loading" size="huge" />
      </Dimmer>
    </Grid>
  );
};
