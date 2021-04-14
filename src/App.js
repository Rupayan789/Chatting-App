import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const {REACT_APP_PROJECT_ID}=process.env;
function App() {
  
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height="100vh"
    projectID={`${REACT_APP_PROJECT_ID}`}
    userName={localStorage.getItem('username')}

    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
    />
  );
}

export default App;
