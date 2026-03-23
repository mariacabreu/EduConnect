import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, SafeAreaView } from 'react-native';
import { Search } from 'lucide-react-native';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

export default function SearchScreen({ navigation }) {
  const { opportunities, incrementView } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = opportunities.filter(item => {
    if (!searchQuery) return false; // Show nothing if search is empty
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.institution.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handlePressCard = (item) => {
    incrementView();
    navigation.navigate('Details', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search color="#00ad6c" size={20} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar cursos, vagas, eventos..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
        </View>
      </View>

      {searchQuery === '' ? (
        <View style={styles.emptyState}>
          <Search color="#ccc" size={48} />
          <Text style={styles.emptyStateText}>O que você quer aprender hoje?</Text>
        </View>
      ) : filteredData.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>Nenhum resultado encontrado para "{searchQuery}"</Text>
        </View>
      ) : (
        <FlatList 
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card 
              item={item} 
              onPress={() => handlePressCard(item)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00ad6c',
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#f9f9f9',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    marginTop: 16,
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
    paddingTop: 16,
  }
});
