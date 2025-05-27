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

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../assets/header.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Categorías</Text>

      <View style={styles.categoryList}>
        <Text style={styles.categoryTitle}>Arroz, legumbres y pastas</Text>

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
    justifyContent: 'space-around',
    marginTop: 10,
  },
  imageItem: {
    alignItems: 'center',
    marginHorizontal: 10,
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
