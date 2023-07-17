import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MesRecus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Historique de mes reçus</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Prénom :</Text>
          <Text style={styles.value}>Marie</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nom :</Text>
          <Text style={styles.value}>Ndour</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Destination :</Text>
          <Text style={styles.value}>Dakar - Parcelle</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Prix :</Text>
          <Text style={styles.value}>1000f</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Heure de départ - Heure d'arrivée :</Text>
          <Text style={styles.value}>12:00 - 12:10</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Prénom :</Text>
          <Text style={styles.value}>Marie</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Nom :</Text>
          <Text style={styles.value}>Ndour</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Destination :</Text>
          <Text style={styles.value}>Dakar -Rufisque</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Prix :</Text>
          <Text style={styles.value}>2000f</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Heure de départ - Heure d'arrivée :</Text>
          <Text style={styles.value}>17:00 - 17:15</Text>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {},
});

export default MesRecus;
