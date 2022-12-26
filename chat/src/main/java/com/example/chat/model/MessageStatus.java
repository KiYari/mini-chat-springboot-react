package com.example.chat.model;

public enum MessageStatus {
    RECEIVED ("received"),
    DELIVERED ("delivered");

    private String title;

    MessageStatus(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    @Override
    public String toString() {
        return "{" +
                "title='" + title + '\'' +
                '}';
    }
}
