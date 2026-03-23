import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import { Filter, Search } from 'lucide-react-native';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

const filters = ['Cursos', 'Workshop', 'Vagas', 'Eventos'];

export default function HomeScreen({ navigation }) {
  const { opportunities, incrementView } = useAppContext();
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredData = opportunities.filter(item => {
    if (activeFilter && item.type !== activeFilter) return false;
    return true;
  });

  const handlePressCard = (item) => {
    incrementView();
    navigation.navigate('Details', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/mn35dy33-0p5ga4g.png')} style={styles.logo} resizeMode="contain" />
        <TouchableOpacity 
          style={styles.searchContainer}
          onPress={() => navigation.navigate('Buscar')}
        >
          <Text style={styles.searchPlaceholder}>Buscar...</Text>
          <Search color="#00ad6c" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={styles.filterIcon}
          onPress={() => setActiveFilter(null)}
        >
          <Filter color="#fff" size={16} />
        </TouchableOpacity>
        <FlatList 
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filters}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.filterBtn, activeFilter === item && styles.activeFilterBtn]}
              onPress={() => setActiveFilter(activeFilter === item ? null : item)}
            >
              <Text style={[styles.filterText, activeFilter === item && styles.activeFilterText]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  logo: {
    width: 180,
    height: 72,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00ad6c',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginLeft: 16,
    height: 40,
    justifyContent: 'space-between',
  },
  searchPlaceholder: {
    color: '#888',
    fontSize: 14,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterIcon: {
    backgroundColor: '#0056b3',
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  filterBtn: {
    backgroundColor: '#00ad6c',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  activeFilterBtn: {
    backgroundColor: '#0056b3',
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  activeFilterText: {
    color: '#fff',
  },
  listContent: {
    paddingBottom: 20,
  }
});
