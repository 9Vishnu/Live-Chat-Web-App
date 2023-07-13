import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '26bc4ec3-34e2-43ec-87b0-82feccbc15b3',
        props.user.username,
        props.user.secret
        );
    return (
    <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage;
