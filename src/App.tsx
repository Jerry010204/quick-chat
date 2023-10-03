import GPTicon from "./assets/chatGPT4.png";
import ChatBox from "./Chat/ChatBox";
import AppLogo from "./assets/favicon.ico";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div
      style={{
        backgroundColor: " #282c34 ",
        position: "absolute",
        top: "0%",
        bottom: "0%",
        width: "100%",
        overflow: "auto",
      }}
    >
      <Helmet>
        <link rel="icon" type="image/ico" href={AppLogo} />
        <title>Quick-Chat</title>
      </Helmet>
      <div
        style={{
          position: "fixed",
          left: "40%",
          top: "1.5%",
          display: "inline-block",
        }}
      >
        <img
          src={GPTicon}
          alt=""
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "7px",
          }}
        />
        <span
          style={{
            display: "inline-block",
            color: "#dddee4",
            fontWeight: "bold",
            position: "relative",
            top: "-10.5px",
            left: "15px",
          }}
        >
          ChatGPT-4
        </span>
      </div>
      <ChatBox />
    </div>
  );
}

export default App;
