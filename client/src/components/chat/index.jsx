import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "@/components/customHeader"
import StandardMessageForm from "@/components/customMessageForms/standardMessageForm"


const Chat = () => {
  
    // this takes user auth arguments and returns a state management Object
    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "testuser"
    )

    return (
        <div style={{ flexBasis: "100%" }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow
                {...chatProps}
                style={{ height: "100vh" }}
                //setting custom header of chat window
                renderChatHeader={(chat) =>  <Header chat={chat} /> }
                renderMessageForm={(props) => {
                    return (
                        <StandardMessageForm props = { props } activeChat={props.activeChat }/>
                    )
                }}
            />
        </div>
    )
}

export default Chat
