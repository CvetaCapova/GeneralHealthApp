import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const AI_Insights = () => {
    const [messages, setMessages] = useState([
        { text: 'Ask any question you have.', type: 'ai' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, type: 'user' }]);
            setInput('');
        }
    };

    return (
        <View style={styles.container}>
            {/* Top Card */}
            <Card style={styles.card}>
                <Card.Content>
                    <Text style={styles.title}>Insight summary</Text>
                    <Text style={styles.description}>
                        Based on your recent entries, it’s advisable to check your iron levels. Symptoms like fatigue, dizziness, and pale skin could indicate iron deficiency, which may affect your energy. A blood test is recommended.
                    </Text>
                </Card.Content>
            </Card>

            {/* Chat Interface */}
            <View style={styles.chatContainer}>
                <ScrollView style={styles.chatMessages} contentContainerStyle={{ padding: 10 }}>
                    {messages.map((message, index) => (
                        <View
                            key={index}
                            style={[
                                styles.messageBubble,
                                message.type === 'user' ? styles.userBubble : styles.aiBubble,
                            ]}
                        >
                            <Text style={styles.messageText}>{message.text}</Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your question..."
                        value={input}
                        onChangeText={setInput}
                    />
                    <Button mode="contained" style={styles.sendButton} onPress={handleSend}>
                        Send
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f8f9fa',
    },
    card: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    chatContainer: {
        flex: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    chatMessages: {
        flex: 1,
    },
    messageBubble: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
        maxWidth: '80%',
    },
    userBubble: {
        alignSelf: 'flex-end',
        backgroundColor: '#d1e7ff',
    },
    aiBubble: {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0',
    },
    messageText: {
        fontSize: 14,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
        height: 40,
    },
    sendButton: {
        height: 40,
        justifyContent: 'center',
    },
});

export default AI_Insights;

