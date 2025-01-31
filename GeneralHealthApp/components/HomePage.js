import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Card, Text, Button, Avatar, Icon, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
    const navigation = useNavigation();

    const appointmentReminder = "Upcoming appointment with Dr. Fritz on Jan 22 2025, at 7:00 AM.";
    const medicationReminder = "Take 1 tablet of Aspirin at 8:00 AM.";
    const aiInsight = "Based on your recent entries, it’s advisable to check your iron levels. Symptoms like fatigue, dizziness, and pale skin could indicate iron deficiency, which may affect your energy. A blood test is recommended.";
    const [symptom, setSymptom] = React.useState('');
    const [severity, setSeverity] = React.useState('');
    const [notes, setNotes] = React.useState('');

    const handleCardPress = () => {
        navigation.navigate('AI Insights'); // Ensure 'AI Insights' matches the name in your navigation setup
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Actions>
                    <Icon size={20} source="bell" color={MD3Colors.primary30}></Icon>
                    <Text>{medicationReminder}</Text>
                    <Button>Done</Button>
                </Card.Actions>
            </Card>
            <Card style={styles.card}>
                <Card.Title
                    title="Appointment Reminder"
                    subtitle={appointmentReminder}
                    titleNumberOfLines={1}
                    subtitleNumberOfLines={6}
                    titleEllipsizeMode="tail"
                    subtitleEllipsizeMode="tail"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" />}
                />
            </Card>
            {/* AI-Generated Insight */}
            <Card style={styles.card} onPress={handleCardPress}>
                <Card.Content>
                    <Text style={styles.cardTitle}>AI Health Insight</Text>
                    <Text style={styles.cardText}>{aiInsight}</Text>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title
                    title="Log Your Symptoms"
                    left={(props) => <Avatar.Icon {...props} icon="pencil" />}
                />
                <Card.Content>
                    <TextInput
                        label="Symptom"
                        placeholder={"Add a symptom"}
                        outlineColor={MD3Colors.primary30}
                        multiline={true}
                        value={symptom}
                        onChangeText={setSymptom}
                        style={styles.input}
                        mode="outlined"
                    />
                    <TextInput
                        label="Severity (1-10)"
                        placeholder={"Severity (1-10)"}
                        outlineColor={MD3Colors.primary30}
                        value={severity}
                        onChangeText={setSeverity}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Notes (optional)"
                        value={notes}
                        onChangeText={setNotes}
                        style={styles.input}
                        multiline
                    />
                    <Button mode="contained">
                        Submit Entry
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    card: {
        marginBottom: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // For Android shadow
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    cardText: {
        fontSize: 14,
        color: '#555',
    },
    input: {
        marginBottom: 10,
    },
});

export default HomePage;
