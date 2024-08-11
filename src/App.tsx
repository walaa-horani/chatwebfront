import { useState } from "react";

import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

interface User {
  username: string;
  secret: string;
}

function App() {
  // Explicitly type the useState hook
  const [user, setUser] = useState<User | undefined>(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
