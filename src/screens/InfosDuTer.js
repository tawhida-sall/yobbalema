import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfosDuTer = () => {
  const tableData = [
    {
      destination: 'DAKAR-PARCELLE',
      prix: '1000',
      heureDepart: '12h - 12h10',
    },
    {
      destination: 'DAKAR-KEUR MASSAR',
      prix: '1500',
      heureDepart: '16h - 16h20',
    },
    {
      destination: 'DAKAR-RUFIQUE',
      prix: '2000',
      heureDepart: '17h - 17h15',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informations TER</Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>Destination</Text>
          <Text style={styles.headerCell}>Prix</Text>
          <Text style={styles.headerCell}>Heure Arrivée - Heure Départ</Text>
        </View>

        {tableData.map((rowData, index) => (
          <View key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <Text style={styles.cell}>{rowData.destination}</Text>
            <Text style={styles.cell}>{rowData.prix}</Text>
            <Text style={styles.cell}>{rowData.heureDepart}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1f5e1', // Couleur de fond verte claire
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#228b22', // Couleur du texte verte foncée
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#228b22', // Couleur des bordures verte foncée
    backgroundColor: '#fff', // Couleur de fond blanche
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#228b22', // Couleur des bordures verte foncée
  },
  oddRow: {
    flexDirection: 'row',
    backgroundColor: '#e1f5e1', // Couleur de fond verte claire
  },
  evenRow: {
    flexDirection: 'row',
    backgroundColor: '#f5fdf5', // Couleur de fond verte très claire
  },
  headerCell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: '#228b22', // Couleur du texte verte foncée
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    color: '#228b22', // Couleur du texte verte foncée
  },
});

export default InfosDuTer;
