import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PreferenceBus = () => {
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const [showDepartureTimeOptions, setShowDepartureTimeOptions] = useState(false);

  const destinations = [
    { label: 'Dakar - Parcelle', price: '1000f' },
    { label: 'Dakar - Rufisque', price: '2000f' },
    { label: 'Dakar - Keur Massar', price: '1500f' },
  ];

  const departureTimes = [
    { label: '12h00 - 12h10', departure: '12:00', arrival: '12:10' },
    { label: '16h00 - 16h20', departure: '16:00', arrival: '16:20' },
    { label: '17h00 - 17h15', departure: '17:00', arrival: '17:15' },
  ];

  const handleDestinationSelect = (selectedDestination) => {
    setDestination(selectedDestination);
    const selectedPrice = destinations.find((item) => item.label === selectedDestination)?.price;
    setPrice(selectedPrice || '');
    setShowDestinationOptions(false);
  };

  const handleDepartureTimeSelect = (selectedOption) => {
    const selectedTime = departureTimes.find((item) => item.label === selectedOption);
    setDepartureTime(selectedTime.departure);
    setArrivalTime(selectedTime.arrival);
    setShowDepartureTimeOptions(false);
  };

  const renderDropdownArrow = () => {
    return <FontAwesome name="angle-down" size={20} color="gray" />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choisissez votre ticket</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Destination :</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => setShowDestinationOptions(!showDestinationOptions)}>
          <Text style={styles.dropdownText}>{destination || 'Sélectionner une destination'}</Text>
          {renderDropdownArrow()}
        </TouchableOpacity>
        {showDestinationOptions && (
          <FlatList
            data={destinations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.optionItem} onPress={() => handleDestinationSelect(item.label)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <Text style={styles.label}>Prix :</Text>
        <TouchableOpacity style={styles.dropdown} onPress={() => {}}>
          <Text style={styles.dropdownText}>{price || 'Sélectionner un prix'}</Text>
          {renderDropdownArrow()}
        </TouchableOpacity>
        <Text style={styles.label}>Prénom :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre prénom"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.label}>Nom :</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.label}>Heure de départ - Heure d'arrivée :</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowDepartureTimeOptions(!showDepartureTimeOptions)}
        >
          <Text style={styles.dropdownText}>
            {departureTime && arrivalTime ? `${departureTime} - ${arrivalTime}` : 'Sélectionner une heure de départ'}
          </Text>
          {renderDropdownArrow()}
        </TouchableOpacity>
        {showDepartureTimeOptions && (
          <FlatList
            data={departureTimes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.optionItem} onPress={() => handleDepartureTimeSelect(item.label)}>
                <Text style={styles.optionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Réserver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  optionItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default PreferenceBus;
