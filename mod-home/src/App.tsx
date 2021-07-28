import React from "react";
import WrapperComponent from "library/components/WrapperComponent";
import { AppType } from "./interfaces";
import Typography from "@material-ui/core/Typography";

const App: AppType = () => {
  return (
    <WrapperComponent>
      <Typography variant="h2">Home Page</Typography>
      <hr />
      <Typography variant="h5">This is the homepage</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id congue
        metus. Mauris quis magna commodo, pellentesque orci vitae, posuere diam.
        Nulla felis lacus, finibus eu consequat non, pretium pharetra metus. Sed
        sit amet dignissim urna. Quisque quis rutrum ipsum. Donec commodo
        rhoncus arcu, vel ornare dolor facilisis eget. In pulvinar iaculis arcu,
        ultrices vestibulum ante feugiat at. Donec nec tortor vitae neque
        ullamcorper pretium quis a felis.
      </Typography>
    </WrapperComponent>
  );
};

export default App;
