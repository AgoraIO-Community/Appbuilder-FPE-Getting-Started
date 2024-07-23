import { useEffect } from "react";
import "./App.css";
import AgoraAppBuilder from "@appbuilder/react";

function App() {
  useEffect(() => {
    // AgoraAppBuilder.joinPrecall("3efb3f8f-4279-4ead-9228-6a79f863397a");
    const urlParams = new URLSearchParams(window.location.search);
    const isBot = urlParams.get("bot") ? true : false;
    console.log("user isBot ? : ", isBot);
    AgoraAppBuilder.joinPrecall(
      "1b65700f-8bd6-4945-be2c-570de666d2aa",
      "",
      isBot
    );
    AgoraAppBuilder.customize({
      i18n: [
        {
          locale: "en-us",
          label: "English",
          data: {
            precallJoinBtnText: "Start video appointment",
          },
        },
      ],
    });
  }, []);
  return (
    <>
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        <AgoraAppBuilder.View />
      </div>
    </>
  );
}

export default App;
