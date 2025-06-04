import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const boxSize = Dimensions.get('window').width * 0.4;

export default function InicioScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inkly</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require('../assets/header.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />

        <View style={styles.grid}>
          <TouchableOpacity style={styles.box} activeOpacity={0.8}>
            <Feather name="list" size={24} color="#333" />
            <Text style={styles.boxText}>Mi lista</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} activeOpacity={0.8}>
            <Feather name="tag" size={24} color="#333" />
            <Text style={styles.boxText}>Ofertas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            activeOpacity={0.8}
            onPress={() => router.push('/categorias')}
          >
            <Feather name="grid" size={24} color="#333" />
            <Text style={styles.boxText}>Categorías</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} activeOpacity={0.8}>
            <Feather name="shopping-cart" size={24} color="#333" />
            <Text style={styles.boxText}>Supermercados</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // fondo blanco
  },
  header: {
    height: 60,
    backgroundColor: '#c8a2d6', // solo la barra superior en morado
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    elevation: 4,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#fff', // también blanco
  },
  headerImage: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  box: {
    width: boxSize,
    height: boxSize,
    backgroundColor: '#ececec',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  boxText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
});
