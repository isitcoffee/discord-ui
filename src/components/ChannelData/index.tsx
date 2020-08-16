import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage'; 

export const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        { Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          author="Arnold Schwarzenegger"
          date="28/06/2020"
          content="Testando o envio de mensagens"
        />
        ))}
        <ChannelMessage 
          author="Mark Zuckerberg"
          date="28/06/2020"
          content={
            <>
            <Mention>@Bruno Moeller</Mention>, Testando menções nas mensagens.
            </>
          }
          hasMention
          isBot
        />

      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;