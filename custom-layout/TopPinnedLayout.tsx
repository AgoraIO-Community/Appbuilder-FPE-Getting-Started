import React, { useState } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { $config, useContent, VideoRenderer } from "customization-api";

const topPinned = true;

const TopPinnedVideo = ({ renderData }) => {
  const { defaultContent } = useContent();

  const [collapse, setCollapse] = useState(false);

  const [dim, setDim] = useState([
    Dimensions.get("window").width,
    Dimensions.get("window").height,
    Dimensions.get("window").width > Dimensions.get("window").height,
  ]);
  let onLayout = () => {
    setTimeout(() => {
      let { height, width } = Dimensions.get("window");
      let isLandscape = width > height;
      setDim([width, height, isLandscape]);
    }, 20);
  };
  // **********************************
  const isSidePinnedlayout = topPinned === true ? false : dim[2]; // if either explicity set to false or auto evaluation
  const [maxUid, ...minUids] = renderData;
  return (
    <View
      style={{
        flexDirection: isSidePinnedlayout ? "row" : "column",
        flex: 1,
        padding: 4,
      }}
      onLayout={onLayout}
    >
      {isSidePinnedlayout && (
        <Pressable
          onPress={() => setCollapse(!collapse)}
          style={{
            position: "absolute",
            zIndex: 50,
            marginTop: 5,
            width: 35,
            height: 35,
            marginLeft: collapse ? 5 : "20.1%",
            backgroundColor: $config.SECONDARY_ACTION_COLOR + "aa",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              justifyContent: "center",
              color: $config.PRIMARY_ACTION_BRAND_COLOR,
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            {collapse ? ">" : "<"}
          </Text>
        </Pressable>
      )}
      {!collapse && (
        <ScrollView
          horizontal={!isSidePinnedlayout}
          decelerationRate={0}
          style={
            isSidePinnedlayout
              ? { width: "20%", paddingHorizontal: 8 }
              : { flex: 1 }
          }
        >
          {minUids.map((minUid, i) => (
            <Pressable
              style={
                isSidePinnedlayout
                  ? {
                      width: "100%",
                      height: dim[0] * 0.1125 + 2, // width * 20/100 * 9/16 + 2
                      zIndex: 40,
                      paddingBottom: 8,
                    }
                  : {
                      width: ((dim[1] / 3) * 16) / 9 / 2 + 12, //dim[1] /4.3
                      height: "100%",
                      zIndex: 40,
                      paddingRight: 8,
                      paddingVertical: 4,
                    }
              }
              key={"minVideo" + i}
              onPress={() => {}}
            >
              <VideoRenderer user={defaultContent[minUid]} />
            </Pressable>
          ))}
        </ScrollView>
      )}
      <View
        style={
          isSidePinnedlayout
            ? collapse
              ? style.width100
              : style.width80
            : style.flex4
        }
      >
        <VideoRenderer user={defaultContent[maxUid]} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  width80: { width: "80%" },
  width100: { width: "100%" },
  flex2: { flex: 2 },
  flex4: { flex: 4, backgroundColor: "#ffffff00" },
  flex1: { flex: 1 },
});

export default TopPinnedVideo;
