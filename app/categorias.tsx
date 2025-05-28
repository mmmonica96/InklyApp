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

const CATEGORIES = ['Arroz, legumbres y pastas', 'Bebidas', 'Bebé'];

const PRODUCTS: Record<string, { name: string; image: any }[]> = {
  'Arroz, legumbres y pastas': [
    { name: 'Arroz', image: require('../assets/images/arroz/arroz.jpg') },
    { name: 'Arroz Basmati', image: require('../assets/images/arroz/basmati.jpg') },
    { name: 'Garbanzos', image: require('../assets/images/legumbres/garbanzos.jpg') },
    { name: 'Pedrosillano', image: require('../assets/images/legumbres/pedrosillano.jpg') },
    { name: 'Dinos', image: require('../assets/images/pastas/dinos.jpg') },
    { name: 'Tagliatelle', image: require('../assets/images/pastas/tagliatelle.jpg') },
  ],
  'Bebidas': [
    { name: 'Agua', image: require('../assets/images/bebidas/agua.png') },
    { name: 'Coca-Cola', image: require('../assets/images/bebidas/coca-cola.png') },
    { name: 'Cerveza', image: require('../assets/images/bebidas/cerveza.png') },
    { name: 'Cola Cao', image: require('../assets/images/bebidas/colacao.png') },
    { name: 'Zumo melocotón', image: require('../assets/images/bebidas/zumo-melocoton.png') },
    { name: 'Aquarius limón', image: require('../assets/images/bebidas/aquarius-limon.png') },
  ],
  'Bebé': [
    { name: 'Papilla verduritas con merluza Hero Solo +6 meses', image: require('../assets/images/bebe/papilla.jpg') },
    { name: 'Preparado lácteo crecimiento +1 año', image: require('../assets/images/bebe/preparado.jpg') },
    { name: 'Leche de continuación en polvo 2 Nativa Nestlé +6 meses', image: require('../assets/images/bebe/leche.jpg') },
    { name: 'Papilla 8 cereales Hero Solo +6 meses 0% azúcares añadidos', image: require('../assets/images/bebe/cereales.jpg') },
    { name: 'Chupete silicona reversible +0 a 6 meses', image: require('../assets/images/bebe/chupete.jpg') },
    { name: 'Biberón 150 ml tetina silicona flujo lento +0 meses', image: require('../assets/images/bebe/biberon.jpg') },
  ],
};

export default function CategoriasScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Bebidas');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const toggleSwitch = (productName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/header.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Categorías</Text>

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
  },
  sidebar: {
    flex: 0.2,
    backgroundColor: '#f5f5f5',
  },
  sidebarContent: {
    paddingVertical: 10,
    alignItems: 'center',
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
