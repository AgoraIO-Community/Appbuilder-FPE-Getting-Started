import React from "react";
import { View, Text, Button } from "react-native";
import { customize, ToolbarPreset, useSidePanel } from "customization-api";

const TestButton1 = () => {
  const { setSidePanel } = useSidePanel();
  return (
    <View>
      <Button
        title="Test1"
        onPress={() => {
          setSidePanel("side-panel-1");
        }}
      />
    </View>
  );
};

const TestButton2 = () => {
  const { setSidePanel } = useSidePanel();
  return (
    <View>
      <Button title="Test2" onPress={() => setSidePanel("side-panel-2")} />
    </View>
  );
};

const useCustomBottomToolbar = () => {
  const { setSidePanel } = useSidePanel();
  return (
    <ToolbarPreset
      align="bottom"
      items={{
        more: {
          fields: {
            test: {
              component: TestButton1,
              onPress: () => {
                setSidePanel("side-panel-1");
              },
            },
            test2: {
              component: TestButton2,
              onPress: () => {
                setSidePanel("side-panel-2");
              },
            },
          },
        },
      }}
    />
  );
};

const Sidepanel1 = () => {
  return (
    <View>
      <Text style={{ color: "white" }}> Sidepanel1 content</Text>
    </View>
  );
};
const Sidepanel2 = () => {
  return (
    <View>
      <Text style={{ color: "white" }}> Sidepanel2 content</Text>
    </View>
  );
};

const config = customize({
  components: {
    videoCall: {
      customSidePanel: () => {
        return [
          {
            name: "side-panel-1",
            component: Sidepanel1,
            title: "SidePanel - One",
            onClose: () => {},
          },
          {
            name: "side-panel-2",
            component: Sidepanel2,
            title: "SidePanel - Two",
          },
        ];
      },
      bottomToolBar: useCustomBottomToolbar,
    },
  },
});

export default config;
