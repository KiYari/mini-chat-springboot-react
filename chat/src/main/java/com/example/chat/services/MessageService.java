package com.example.chat.services;

import com.example.chat.model.Message;
import com.example.chat.repository.MessageRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Data
@AllArgsConstructor
public class MessageService {
    @Autowired private final MessageRepository messageRepository;

    public Message save(Message input) {
        messageRepository.save(input);
        return input;
    }
}
