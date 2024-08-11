import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatsPageProps {
  user: {
    username: string;
    secret: string;
  };
}

const ChatsPage: React.FC<ChatsPageProps> = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="b89a498d-7151-4576-a4a9-3eec017e51ff"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
