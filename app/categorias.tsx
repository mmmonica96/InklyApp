import { useState } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';

const CATEGORIES = ['Arroz, legumbres y pastas', 'Bebidas'];

const PRODUCTS: Record<string, { name: string; image: any }[]> = {
  Bebidas: [
    { name: 'Agua', image: require('../assets/images/bebidas/agua.png') },
    { name: 'Coca-Cola', image: require('../assets/images/bebidas/coca-cola.png') },
    { name: 'Cerveza', image: require('../assets/images/bebidas/cerveza.png') },
    { name: 'Cola Cao', image: require('../assets/images/bebidas/colacao.png') },
    { name: 'Zumo melocotón', image: require('../assets/images/bebidas/zumo-melocoton.png') },
    { name: 'Aquarius limón', image: require('../assets/images/bebidas/aquarius-limon.png') },
  ],
};

export default function CategoriasScreen() {
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('Bebidas');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleSwitch = (productName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };
=======
  const [showBebidas, setShowBebidas] = useState(false);
  const [showAlp, setShowAlp] = useState(false); 
>>>>>>> origin/monica

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/header.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Categorías</Text>

<<<<<<< HEAD
      <View style={styles.content}>
        {/* Panel lateral */}
        <View style={styles.sidebar}>
          <ScrollView contentContainerStyle={styles.sidebarContent}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Productos */}
        <ScrollView style={styles.products}>
          <View style={styles.grid}>
            {PRODUCTS[selectedCategory]?.map((product, index) => (
              <View key={index} style={styles.productItem}>
                <Image source={product.image} style={styles.productImage} />
                <View style={styles.productLabelRow}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Switch
                    value={checkedItems[product.name] || false}
                    onValueChange={() => toggleSwitch(product.name)}
                    trackColor={{ false: '#ccc', true: '#81b0ff' }}
                    thumbColor={checkedItems[product.name] ? '#007aff' : '#f4f3f4'}
                    style={{ marginLeft: 8 }}
                  />
                </View>
              </View>
            ))}
=======
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
>>>>>>> origin/monica
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
<<<<<<< HEAD
=======
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
>>>>>>> origin/monica
  },
  sidebar: {
    flex: 0.2,
    backgroundColor: '#f5f5f5',
  },
  sidebarContent: {
    paddingVertical: 10,
    alignItems: 'center',
<<<<<<< HEAD
=======
    margin: 10,
    width: 120,
>>>>>>> origin/monica
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginVertical: 5,
    width: '90%',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#dcdcdc',
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  categoryTextActive: {
    fontWeight: 'bold',
    color: '#000',
  },
  products: {
    flex: 0.8,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  productItem: {
    width: '47%',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  productName: {
    fontSize: 13,
    flex: 1,
  },
});
