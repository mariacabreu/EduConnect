import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useAppContext } from '../context/AppContext';

export default function DetailsScreen({ route, navigation }) {
  const { item: initialItem } = route.params;
  const { opportunities, toggleSave, toggleEnroll } = useAppContext();
  const item = opportunities.find(o => o.id === initialItem.id) || initialItem;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft color="#0056b3" size={24} />
        </TouchableOpacity>
        <Image source={require('../../assets/images/mn35dy33-0p5ga4g.png')} style={styles.logo} resizeMode="contain" />
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <Image source={item.image} style={styles.mainImage} resizeMode="cover" />
        
        <View style={styles.metaRow}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>

        {item.details && (
          <View style={styles.detailsContainer}>
            <Text style={styles.paragraph}>{item.details.content1}</Text>
            
            <Text style={styles.sectionTitle}>O que você vai aprender?</Text>
            {item.details.learn.map((point, index) => (
              <Text key={index} style={styles.listItem}>• {point}</Text>
            ))}

            <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Informações Importantes</Text>
            {item.details.info.map((info, index) => (
              <Text key={index} style={styles.listItem}>• {info}</Text>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.enrollBtn}
          onPress={() => toggleEnroll(item.id)}
        >
          <Text style={styles.enrollBtnText}>
            {item.isEnrolled ? 'Inscrito' : 'Inscreva-se'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.saveBtn, item.isSaved && styles.savedBtn]}
          onPress={() => toggleSave(item.id)}
        >
          <Text style={[styles.saveBtnText, item.isSaved && styles.savedBtnText]}>
            {item.isSaved ? 'Remover dos Salvos' : 'Salvar'}
          </Text>
        </TouchableOpacity>
        <Text style={styles.footerInstitution}>Instituição: {item.institution}</Text>
      </View>
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
  backBtn: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0056b3',
  },
  logo: {
    width: 180,
    height: 72,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  type: {
    color: '#00ad6c',
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    color: '#00ad6c',
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },
  detailsContainer: {
    paddingBottom: 40,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    marginLeft: 8,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  enrollBtn: {
    backgroundColor: '#00ad6c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  enrollBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  saveBtn: {
    backgroundColor: '#0056b3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  savedBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0056b3',
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  savedBtnText: {
    color: '#0056b3',
  },
  footerInstitution: {
    fontSize: 10,
    color: '#666',
    flex: 1,
    textAlign: 'right',
  }
});
