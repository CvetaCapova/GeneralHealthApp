import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons

// Import your custom components (HomePage, etc.)
import HomePage from './components/HomePage'; // Assuming HomePage.js is in the same directory
import Calendar from './components/Calendar'; // Example, create a MusicPage component similarly
import Documents from './components/Documents'; // Example, create an AlbumsPage component similarly
import AI_Insights from './components/AI_Insights'; // Example, create an AlbumsPage component similarly

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = 'home';
                            } else if (route.name === 'Calendar') {
                                iconName = 'calendar';
                            } else if (route.name === 'Documents') {
                                iconName = 'document';
                            } else if (route.name === 'AI Insights') {
                                iconName = 'chatbubble-ellipses-outline';
                            }
                            // Return the icon with the specified color
                            return <Icon name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'rgba(33, 0, 93, 1)',  // Active tab color
                        tabBarInactiveTintColor: 'gray',  // Inactive tab color
                    })}
                >
                    <Tab.Screen name="Home" component={HomePage} />
                    <Tab.Screen name="Calendar" component={Calendar} />
                    <Tab.Screen name="AI Insights" component={AI_Insights} />
                    <Tab.Screen name="Documents" component={Documents} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
