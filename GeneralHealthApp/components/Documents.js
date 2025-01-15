import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card, Button, Avatar, IconButton, MD3Colors } from 'react-native-paper';

const Documents = () => {
    const [collapsedSections, setCollapsedSections] = useState({
        medications: false,
        vaccinations: false,
        testResults: false
    });

    // Example documents for each section
    const documents = {
        medications: [
            { id: 1, title: "Aspirin Prescription", preview: "Prescription for Aspirin, dosage 1 tablet at 8:00 AM.", file: "aspirin_prescription.pdf" },
            { id: 2, title: "Paracetamol Prescription", preview: "Prescription for Paracetamol, dosage 1 tablet every 6 hours.", file: "paracetamol_prescription.pdf" }
        ],
        vaccinations: [
            { id: 1, title: "Flu Vaccine Record", preview: "Flu vaccination record for 2024, administered on Jan 5, 2024.", file: "flu_vaccine_record.pdf" },
            { id: 2, title: "COVID-19 Vaccine Certificate", preview: "COVID-19 vaccination certificate, dose 2 completed on Dec 15, 2024.", file: "covid_vaccine_certificate.pdf" }
        ],
        testResults: [
            { id: 1, title: "Blood Test Results", preview: "Blood test results showing normal levels of hemoglobin and white blood cells.", file: "blood_test_results.pdf" },
            { id: 2, title: "X-Ray Report", preview: "Chest X-ray report showing no abnormalities.", file: "xray_report.pdf" }
        ]
    };

    const toggleSection = (section) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Medications Section */}
            <TouchableOpacity onPress={() => toggleSection('medications')}>
                <Card style={styles.card}>
                    <Card.Title
                        title="Medications"
                        left={(props) => <Avatar.Icon {...props} icon="pill" />}
                        right={(props) => (
                            <IconButton
                                {...props}
                                icon={collapsedSections.medications ? "chevron-down" : "chevron-right"}
                                color={MD3Colors.primary30}
                            />
                        )}
                    />
                </Card>
            </TouchableOpacity>
            {collapsedSections.medications && documents.medications.map((doc) => (
                <Card key={doc.id} style={styles.card}>
                    <Card.Title title={doc.title} />
                    <Card.Content>
                        <Text style={styles.cardText}>{doc.preview}</Text>
                        <Button mode="outlined" onPress={() => alert(`Downloading ${doc.file}`)}>
                            Download
                        </Button>
                    </Card.Content>
                </Card>
            ))}

            {/* Vaccinations Section */}
            <TouchableOpacity onPress={() => toggleSection('vaccinations')}>
                <Card style={styles.card}>
                    <Card.Title
                        title="Vaccinations"
                        left={(props) => <Avatar.Icon {...props} icon="shield" />}
                        right={(props) => (
                            <IconButton
                                {...props}
                                icon={collapsedSections.vaccinations ? "chevron-down" : "chevron-right"}
                                color={MD3Colors.primary30}
                            />
                        )}
                    />
                </Card>
            </TouchableOpacity>
            {collapsedSections.vaccinations && documents.vaccinations.map((doc) => (
                <Card key={doc.id} style={styles.card}>
                    <Card.Title title={doc.title} />
                    <Card.Content>
                        <Text style={styles.cardText}>{doc.preview}</Text>
                        <Button mode="outlined" onPress={() => alert(`Downloading ${doc.file}`)}>
                            Download
                        </Button>
                    </Card.Content>
                </Card>
            ))}

            {/* Test Results Section */}
            <TouchableOpacity onPress={() => toggleSection('testResults')}>
                <Card style={styles.card}>
                    <Card.Title
                        title="Test Results"
                        left={(props) => <Avatar.Icon {...props} icon="chart-line" />}
                        right={(props) => (
                            <IconButton
                                {...props}
                                icon={collapsedSections.testResults ? "chevron-down" : "chevron-right"}
                                color={MD3Colors.primary30}
                            />
                        )}
                    />
                </Card>
            </TouchableOpacity>
            {collapsedSections.testResults && documents.testResults.map((doc) => (
                <Card key={doc.id} style={styles.card}>
                    <Card.Title title={doc.title} />
                    <Card.Content>
                        <Text style={styles.cardText}>{doc.preview}</Text>
                        <Button mode="outlined" onPress={() => alert(`Downloading ${doc.file}`)}>
                            Download
                        </Button>
                    </Card.Content>
                </Card>
            ))}

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
    cardText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
});

export default Documents;
