import React from "react";
import { useVirtualBackground, type Option } from "customization-api";


const PreferenceWrapperContext = React.createContext({});

interface PreferenceWrapperProviderProps {
  children: React.ReactNode;
}
const PreferenceWrapperProvider = (props: PreferenceWrapperProviderProps) => {
  const {virtualBackgrounds, addVirtualBackgrounds} = useVirtualBackground();

  React.useEffect(() => {
    const update = async () => {
      const options = [
        ...virtualBackgrounds,

        {
          type: "image",
          path: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isBase64Image: false,
          id: "VB-236",
          isSelected: true,
        },

        {
          type: "image",
          path: "https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          isBase64Image: false,
          id: "VB-237",
        },

        {
          type: "image",
          path: "https://www.agora.io/en/wp-content/uploads/2022/01/how-rte-can-help-you-startup-scale-from-0-to-1.jpg",
          isBase64Image: false,
          id: "VB-238",
        },
      ] as Option[];
      await addVirtualBackgrounds(options);
    };
    update();
  }, []);
  return (
    <PreferenceWrapperContext.Provider value={{}}>
      {props.children}
    </PreferenceWrapperContext.Provider>
  );
};

export { PreferenceWrapperProvider, PreferenceWrapperContext };
