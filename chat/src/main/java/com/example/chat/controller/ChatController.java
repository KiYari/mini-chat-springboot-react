package com.example.chat.controller;

import com.example.chat.model.ChatNotification;
import com.example.chat.model.Message;
import com.example.chat.services.ChatRoomService;
import com.example.chat.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    @Autowired private MessageService messageService;
    @Autowired private ChatRoomService chatRoomService;

    @MessageMapping("/chat")
    public void processMessage(@Payload Message chatMessage) {
        String chatId = chatRoomService
                .getChatId(chatMessage.getSenderId(), chatMessage.getRecipientId());
        chatMessage.setChatId(chatId);

        System.out.println(chatMessage);

        Message saved = messageService.save(chatMessage);

        messagingTemplate.convertAndSendToUser(
                String.valueOf(chatMessage.getRecipientId()),"/queue/messages",
                new ChatNotification(
                        saved.getId(),
                        saved.getSenderId(),
                        saved.getSenderName()));
    }
}
