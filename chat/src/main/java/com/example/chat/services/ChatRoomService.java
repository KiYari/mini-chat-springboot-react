package com.example.chat.services;

import com.example.chat.repository.ChatRoomRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Data
@Service
@AllArgsConstructor
public class ChatRoomService {
    @Autowired private final ChatRoomRepository chatRoomRepository;

    public String getChatId(int senderId, int recipientId) {
        return String.valueOf(senderId) + String.valueOf(recipientId);
    }
}
