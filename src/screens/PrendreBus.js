import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const PrendreBus = () => {
  const navigation = useNavigation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleModulePress = (moduleName) => {
    setSelectedModule(moduleName);

    if (moduleName === 'Acheter ticket') {
      navigation.navigate('PreferenceBus'); // Naviguer vers la route "PreferenceBus"
    } else if (moduleName === 'InfosDuTer') {
      navigation.navigate('InfosDuTer'); // Naviguer vers la route "InfosDuTer"
    } else if (moduleName === 'MesRecus') {
      navigation.navigate('MesRecus'); // Naviguer vers la route "historique-de-mes-recus"
    }
  };

  return (
    <ImageBackground
      source={require('../../src/screens/Images/TER.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>CHOISISSEZ VOTRE TER</Text>
        </View>
        <TouchableOpacity style={styles.sidebarButton} onPress={toggleSidebar}>
          <FontAwesome5 name="bars" size={16} color="green" />
          <Text style={styles.sidebarButtonText}>MENU</Text>
        </TouchableOpacity>
        {sidebarOpen && (
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={[
                styles.sidebarItem,
                selectedModule === 'Acheter ticket' && styles.selectedModule,
              ]}
              onPress={() => handleModulePress('Acheter ticket')}
            >
              <Text style={styles.sidebarItemText}>Acheter ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sidebarItem,
                selectedModule === 'InfosDuTer' && styles.selectedModule,
              ]}
              onPress={() => handleModulePress('InfosDuTer')}
            >
              <Text style={styles.sidebarItemText}>InfosDuTer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sidebarItem,
                selectedModule === 'MesRecus' && styles.selectedModule,
              ]}
              onPress={() => handleModulePress('MesRecus')}
            >
              <Text style={styles.sidebarItemText}>MesRecus</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.contentContainer}>
          {selectedModule && (
            <View style={styles.moduleContainer}>
              <Text style={styles.moduleText}>Contenu du module : {selectedModule}</Text>
              {/* Ajoutez le contenu spécifique à chaque module ici */}
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 50,
  },
  sidebarButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
  sidebarButtonText: {
    fontSize: 16,
    marginLeft: 5,
    color: 'green',
  },
  sidebar: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 200,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    top: 100,
    bottom: 0,
    left: 0,
  },
  sidebarItem: {
    marginTop: 20,
    paddingVertical: 15,  // Augmenter la taille de la zone de touche
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#90CAF9',
  },
  sidebarItemText: {
    fontSize: 16,
    color: '#546E7A',
  },
  selectedModule: {
    backgroundColor: 'lightblue',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 5,
  },
  moduleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PrendreBus;
