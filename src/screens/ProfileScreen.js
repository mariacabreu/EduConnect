import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Pencil } from 'lucide-react-native';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

export default function ProfileScreen({ navigation }) {
  const { opportunities, userProfile, incrementView } = useAppContext();
  const enrolledOpportunities = opportunities.filter(item => item.isEnrolled);

  const handlePressCard = (item) => {
    incrementView();
    navigation.navigate('Details', { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/mn35dy33-0p5ga4g.png')} style={styles.logo} resizeMode="contain" />
        <View style={styles.profileInfo}>
          <View>
            <Text style={styles.userName}>{userProfile.name}</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Pencil color="#00ad6c" size={12} />
              <Text style={styles.editText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>
          <Image source={userProfile.avatar} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.tabHeader}>
        <Text style={styles.tabTitle}>Inscrições</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={[styles.statBox, { backgroundColor: '#00ad6c' }]}>
          <Text style={styles.statText}>Oportunidades visualizadas:</Text>
          <Text style={styles.statNumber}>{userProfile.views}</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: '#0056b3' }]}>
          <Text style={styles.statText}>Oportunidades Inscritas:</Text>
          <Text style={styles.statNumber}>{enrolledOpportunities.length}</Text>
        </View>
      </View>

      <FlatList 
        data={enrolledOpportunities}
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
    justifyContent: 'space-between',
    padding: 16,
  },
  logo: {
    width: 180,
    height: 72,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0056b3',
    marginRight: 8,
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00ad6c',
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginTop: 4,
    marginRight: 8,
  },
  editText: {
    fontSize: 10,
    color: '#00ad6c',
    marginLeft: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tabHeader: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00ad6c',
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabTitle: {
    color: '#00ad6c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  statBox: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
  },
  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  }
});
