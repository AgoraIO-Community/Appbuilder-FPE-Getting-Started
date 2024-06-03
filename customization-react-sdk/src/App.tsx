import { useEffect } from "react";
import "./App.css";
import AgoraAppBuilder from "@appbuilder/react";

function App() {
  useEffect(() => {
    // AgoraAppBuilder.joinPrecall("3efb3f8f-4279-4ead-9228-6a79f863397a");
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
