import { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function CategoriasScreen() {
  const [showBebidas, setShowBebidas] = useState(false);
  const [showAlp, setShowAlp] = useState(false); 

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/header.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Categorías</Text>

      <View style={styles.categoryList}>
        {/*Arroz, legumbres y pastas */}
        <TouchableOpacity
          onPress={() => setShowAlp(!showAlp)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Arroz, legumbres y pastas</Text>
        </TouchableOpacity>

        {showAlp && (
          <View style={styles.imageRow}>
            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/arroz/arroz.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Arroz redondo</Text>
            </View>

            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/arroz/basmati.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Arroz basmati</Text>
            </View>

            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/legumbres/garbanzos.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Garbanzo cocido</Text>
            </View>

            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/legumbres/pedrosillano.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Garbanzo pedrosillano</Text>
            </View>

            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/pastas/tagliatelle.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Tagliatelle al huevo</Text>
            </View>

            <View style={styles.imageItem}>
              <Image
                source={require('../assets/images/pastas/dinos.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.imageLabel}>Pasta Dinos vegetales para sopa</Text>
            </View>
          </View>
        )}

        {/* Categoría: Bebidas */}
        <TouchableOpacity
          onPress={() => setShowBebidas(!showBebidas)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Bebidas</Text>
        </TouchableOpacity>

        {showBebidas && (
          <View>
            <View style={styles.imageRow}>
              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/agua.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Agua</Text>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/coca-cola.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Coca-Cola</Text>
              </View>
              
              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/cerveza.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Cerveza</Text>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/cerveza.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Coca-Cola</Text>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/coca-cola.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Coca-Cola</Text>
              </View>

              <View style={styles.imageItem}>
                <Image
                  source={require('../assets/images/bebidas/coca-cola.png')}
                  style={styles.productImage}
                />
                <Text style={styles.imageLabel}>Coca-Cola</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 180,
    marginTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  categoryList: {
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  imageItem: {
    alignItems: 'center',
    margin: 10,
    width: 120,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageLabel: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});
