import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
  
  const ChatsPage = (props) => {
    const projectID = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;
    const chatProps = useMultiChatLogic(
      projectID,
      props.user.username,
      props.user.secret
    );
  
    return (
      <div style={{ height: '100vh' }}>
        <MultiChatWindow {...chatProps} />
        <MultiChatSocket {...chatProps} style={{ height: '100%' }} />
      </div>
    );
  };
  
  export default ChatsPage;
  