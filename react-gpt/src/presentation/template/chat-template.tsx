import { useState } from "react"
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from "../components";


interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async(text: string) => {
    setIsLoading( true );
    setMessages( (prev) => [...prev, { text: text, isGpt: false }]);
    //TODO: Case use
    setIsLoading( false );
    //TODO: Agregar el mensaje de isGPT en true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gay-y-2">
          <GptMessage text="Hola mundo" />
          {
            messages.map((message, index) => (
              message.isGpt
                ? (
                  <GptMessage key={index} text="Esto es OpenAi" />
                ) : (
                  <MyMessage key={index} text={message.text} />
                )
            ))
          }
          {
            isLoading && (
              <div className="col-start-1 col-end-12 fade-in">
                <TypingLoader />
              </div>

            )
          }
        </div>
      </div>

      <TextMessageBox
        onSendMessage={ handlePost }
        placeholder="Cualquier texto"
        disableCorrections
      />
    </div>
  )
}
