import { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
  Animated,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

<<<<<<< HEAD
const CATEGORIES = [
  'Arroz, legumbres y pastas', 'Bebidas', 'Bebe', 'Cuidado del cabello',
  'Cuidado facial y corporal', 'Fitoterapia y parafarmacia', 'Limpieza y hogar', 'Mascotas',
];
=======
const CATEGORIES = ['Arroz, legumbres y pastas', 'Bebidas', 'Bebé'];
>>>>>>> origin/monica

const PRODUCTS: Record<string, { name: string; image: any }[]> = {
  'Arroz, legumbres y pastas': [
    { name: 'Arroz', image: require('../assets/images/arroz/arroz.jpg') },
    { name: 'Arroz Basmati', image: require('../assets/images/arroz/basmati.jpg') },
    { name: 'Garbanzos', image: require('../assets/images/legumbres/garbanzos.jpg') },
    { name: 'Pedrosillano', image: require('../assets/images/legumbres/pedrosillano.jpg') },
    { name: 'Dinos', image: require('../assets/images/pastas/dinos.jpg') },
    { name: 'Tagliatelle', image: require('../assets/images/pastas/tagliatelle.jpg') },
  ],
<<<<<<< HEAD
  Bebidas: [
=======
  'Bebidas': [
>>>>>>> origin/monica
    { name: 'Agua', image: require('../assets/images/bebidas/agua.png') },
    { name: 'Coca-Cola', image: require('../assets/images/bebidas/coca-cola.png') },
    { name: 'Cerveza', image: require('../assets/images/bebidas/cerveza.png') },
    { name: 'Cola Cao', image: require('../assets/images/bebidas/colacao.png') },
    { name: 'Zumo melocotón', image: require('../assets/images/bebidas/zumo-melocoton.png') },
    { name: 'Aquarius limón', image: require('../assets/images/bebidas/aquarius-limon.png') },
  ],
<<<<<<< HEAD
  Bebe: [],
  'Cuidado del cabello': [
    { name: 'Champú hidratante', image: require('../assets/images/cabello/shampoo.png') },
    { name: 'Acondicionador suave', image: require('../assets/images/cabello/acondicionador.png') },
    { name: 'Mascarilla nutritiva', image: require('../assets/images/cabello/mascarilla.png') },
    { name: 'Aceite de argán', image: require('../assets/images/cabello/argan.png') },
    { name: 'Spray desenredante', image: require('../assets/images/cabello/spray.png') },
    { name: 'Gel fijador', image: require('../assets/images/cabello/gel.png') },
  ],
  'Cuidado facial y corporal': [],
  'Fitoterapia y parafarmacia': [
    { name: 'Infusión de manzanilla', image: require('../assets/images/parafarmacia/manzanilla.png') },
    { name: 'Infusión de valeriana', image: require('../assets/images/parafarmacia/valeriana.png') },
    { name: 'Té de hierba luisa', image: require('../assets/images/parafarmacia/hierba-luisa.png') },
    { name: 'Gasas estériles', image: require('../assets/images/parafarmacia/gasas.png') },
    { name: 'Agua oxigenada', image: require('../assets/images/parafarmacia/agua-oxigenada.png') },
    { name: 'Betadine', image: require('../assets/images/parafarmacia/betadine.png') },
  ],
  'Limpieza y hogar': [],
  Mascotas: [
    { name: 'Pienso seco para perros', image: require('../assets/images/mascotas/pienso-perro.png') },
    { name: 'Pienso seco para gatos', image: require('../assets/images/mascotas/pienso-gato.png') },
    { name: 'Snacks dentales', image: require('../assets/images/mascotas/snacks-dentales.png') },
    { name: 'Galletas para perros', image: require('../assets/images/mascotas/galletas.png') },
    { name: 'Arena para gatos', image: require('../assets/images/mascotas/arena.png') },
    { name: 'Champú para mascotas', image: require('../assets/images/mascotas/champu.png') },
=======
  'Bebé': [
    { name: 'Papilla verduritas con merluza Hero Solo +6 meses', image: require('../assets/images/bebe/papilla.jpg') },
    { name: 'Preparado lácteo crecimiento +1 año', image: require('../assets/images/bebe/preparado.jpg') },
    { name: 'Leche de continuación en polvo 2 Nativa Nestlé +6 meses', image: require('../assets/images/bebe/leche.jpg') },
    { name: 'Papilla 8 cereales Hero Solo +6 meses 0% azúcares añadidos', image: require('../assets/images/bebe/cereales.jpg') },
    { name: 'Chupete silicona reversible +0 a 6 meses', image: require('../assets/images/bebe/chupete.jpg') },
    { name: 'Biberón 150 ml tetina silicona flujo lento +0 meses', image: require('../assets/images/bebe/biberon.jpg') },
>>>>>>> origin/monica
  ],
};

export default function CategoriasScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Arroz, legumbres y pastas');
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const sidebarWidth = useRef(new Animated.Value(150)).current;

  const toggleSwitch = (productName: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [productName]: !prev[productName],
    }));
  };

  const toggleSidebar = () => {
    const newWidth = isSidebarVisible ? 0 : 150;
    Animated.timing(sidebarWidth, {
      toValue: newWidth,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>
       
      </View>

      <View style={styles.content}>
        <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
          <ScrollView contentContainerStyle={styles.sidebarContent}>
            {isSidebarVisible && CATEGORIES.map((category) => (
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
        </Animated.View>

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
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuButton: {
    padding: 8,
    marginRight: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  content: { flex: 1, flexDirection: 'row' },
  sidebar: {
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
  categoryButtonActive: { backgroundColor: '#dcdcdc' },
  categoryText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  categoryTextActive: { fontWeight: 'bold', color: '#000' },
  products: {
    flex: 1,
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
