import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper'; // Using React Native Paper for cards

const App = () => {
  // Sample data
  const appointmentReminder = "Upcoming appointment with Dr. Smith on Jan 5, 2025, at 3:00 PM.";
  const medicationReminder = "Take 1 tablet of Aspirin at 8:00 AM.";
  const aiInsight = "Your recent symptom entries indicate a potential improvement in your stress levels.";

  return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Doctor Appointment and Medication Reminder */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Reminders</Text>
            <Text style={styles.cardText}>{appointmentReminder}</Text>
            <Text style={styles.cardText}>{medicationReminder}</Text>
          </Card.Content>
        </Card>

        {/* AI-Generated Insight */}
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>AI Health Insight</Text>
            <Text style={styles.cardText}>{aiInsight}</Text>
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
});

export default App;
