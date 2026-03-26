import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Bookmark } from 'lucide-react-native';

export default function Card({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={[styles.type, getTypeStyle(item.type)]}>{item.type}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        <View style={styles.footer}>
          {item.institution && <Text style={styles.institution}>Instituição: {item.institution}</Text>}
          {item.isSaved && (
            <View style={styles.bookmarkContainer}>
              <Bookmark color="#0056b3" fill="#0056b3" size={20} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

function getTypeStyle(type) {
  switch (type) {
    case 'Cursos': return { color: '#00ad6c' };
    case 'Workshop': return { color: '#00ad6c' };
    case 'Vagas': return { color: '#00ad6c' };
    case 'Eventos': return { color: '#00ad6c' };
    default: return { color: '#00ad6c' };
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#00ad6c',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 10,
    color: '#00ad6c',
    fontWeight: 'bold',
  },
  type: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  description: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 4,
  },
  institution: {
    fontSize: 10,
    color: '#888',
  },
  bookmarkContainer: {
    padding: 2,
  }
});
