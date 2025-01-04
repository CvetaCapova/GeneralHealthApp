// HomePage.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Button, Modal, TextInput, FlatList } from 'react-native';
import { Card, Avatar, MD3Colors } from 'react-native-paper';
import { Calendar as RNCalendar } from 'react-native-calendars';

const CalendarFeature = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [appointments, setAppointments] = useState({
        '2025-01-05': [{ title: 'Doctor Appointment', time: '10:00 AM', doctor: 'Dr. Smith', address: '123 Health St.' }],
        '2025-01-07': [{ title: 'Therapy Session', time: '02:00 PM', doctor: 'Dr. Taylor', address: '456 Wellness Ave.' }],
    });
    const [symptomLogs, setSymptomLogs] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [symptomEntry, setSymptomEntry] = useState('');

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const addSymptomLog = () => {
        setSymptomLogs((prevLogs) => ({
            ...prevLogs,
            [selectedDate]: symptomEntry,
        }));
        setSymptomEntry('');
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <RNCalendar
                    style={styles.calendar}
                    theme={{
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#2d4150',
                        selectedDayBackgroundColor: MD3Colors.primary50,
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: MD3Colors.primary50,
                        dayTextColor: '#2d4150',
                        arrowColor: MD3Colors.primary50,
                        monthTextColor: MD3Colors.primary50,
                        indicatorColor: MD3Colors.primary50,
                    }}
                    onDayPress={handleDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, marked: true, selectedColor: MD3Colors.primary50 },
                        ...Object.keys(appointments).reduce((acc, date) => {
                            acc[date] = { marked: true, dotColor: MD3Colors.secondary50 };
                            return acc;
                        }, {}),
                    }}
                />
            </Card>

            <Card style={styles.card}>
                <Card.Title
                    title={`Details for ${selectedDate || 'Select a date'}`}
                    left={(props) => <Avatar.Icon {...props} icon="calendar" />}
                />
                <Card.Content>
                    {appointments[selectedDate] ? (
                        <FlatList
                            data={appointments[selectedDate]}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.entryContainer}>
                                    <Text style={styles.entryText}>{item.title} at {item.time}</Text>
                                    <Text style={styles.entryText}>Doctor: {item.doctor}</Text>
                                    <Text style={styles.entryText}>Address: {item.address}</Text>
                                </View>
                            )}
                        />
                    ) : <Text style={styles.entryText}>No appointments on this date.</Text>}

                    {symptomLogs[selectedDate] ? (
                        <Text style={{ ...styles.entryText, marginBottom: 15 }}>Symptom Log: {symptomLogs[selectedDate]}</Text>
                    ) : <Text style={{ ...styles.entryText, marginBottom: 15 }}>No symptom log for this date.</Text>}

                    <Button title="Add Symptom Log" onPress={() => setModalVisible(true)} color={MD3Colors.primary50} style={{ ...styles.roundedButton, marginBottom: 15 }} />
                </Card.Content>
            </Card>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <Card style={styles.modalCard}>
                        <Card.Title title={`Log Symptoms for ${selectedDate}`} />
                        <Card.Content>
                            <TextInput
                                style={{ ...styles.input, marginBottom: 15 }}
                                placeholder="Describe your symptoms..."
                                value={symptomEntry}
                                onChangeText={setSymptomEntry}
                            />
                            <Button title="Save" onPress={addSymptomLog} color={MD3Colors.primary50} style={{ ...styles.roundedButton, marginBottom: 20 }} />
                            <Button title="Cancel" onPress={() => setModalVisible(false)} color={MD3Colors.secondary50} style={{ ...styles.roundedButton, marginBottom: 10 }} />
                        </Card.Content>
                    </Card>
                </View>
            </Modal>
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
        elevation: 5,
    },
    calendar: {
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 20,
    },
    entryContainer: {
        marginBottom: 10,
    },
    entryText: {
        fontSize: 14,
        color: '#555',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalCard: {
        width: '90%',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        padding: 10,
    },
    roundedButton: {
        borderRadius: 25,
        marginVertical: 5,
    },
});

export default CalendarFeature;
