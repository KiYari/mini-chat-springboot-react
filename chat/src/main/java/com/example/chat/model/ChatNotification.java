package com.example.chat.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ChatNotification {
    private int id;
    private int senderId;
    private String senderName;
}
