import { useState } from "react"
import { GptMessage, MyMessage, TypingLoader, TextMessageBox } from "../../components";
import { prosConsUseCase } from "../../../core/use-cases";



interface Message {
  text: string;
  isGpt: boolean;
}

export const ProsConsPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async(text: string) => {
    setIsLoading( true );
    setMessages( (prev) => [...prev, { text: text, isGpt: false }]);
    //TODO: Case use
    const { ok, content } = await prosConsUseCase( text );
    setIsLoading( false );

    if ( !ok ) return;

    setMessages( (prev) => [...prev, { text: content, isGpt: true }]);
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gay-y-2">
          <GptMessage text="Puedes perdirme cualquier cosas que quieras comparar" />
          {
            messages.map((message, index) => (
              message.isGpt
                ? (
                  <GptMessage key={index} text={ message.text } />
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
