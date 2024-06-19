import { ToolbarPreset, ToolbarComponents } from "customization-api";
import React from "react";

const Bottombar = () => {
  return (
    <ToolbarPreset
      align="bottom"
      defaultItemsConfig={{
        more: {
          fields: {
            caption: {
              hide: "yes",
            },
            transcript: {
              hide: "yes",
            },
          },
        },
      }}
    />
  );
};

export default Bottombar;
