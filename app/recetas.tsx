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
import { useLista } from '../context/listContext';

const CATEGORIES = ['Tartas', 'Bizcochos'];

const RECETAS: Record<
  string,
  { name: string; image: any; ingredientes: { name: string; image: any }[] }[]
> = {
  Tartas: [
    {
      name: 'Tarta de manzana',
      image: require('../assets/images/tartas/manzana.jpg'),
      ingredientes: [
        { name: 'Masa brisa', image: require('../assets/images/ingredientes/masa-brisa.png') },
        { name: 'Manzanas', image: require('../assets/images/ingredientes/manzana.png') },
        { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
        { name: 'Canela', image: require('../assets/images/ingredientes/canela.png') },
        { name: 'Mantequilla', image: require('../assets/images/ingredientes/mantequilla.jpg') },
      ],
    },
    {
      name: 'Tarta de queso',
      image: require('../assets/images/tartas/queso.jpg'),
      ingredientes: [
        { name: 'Queso crema', image: require('../assets/images/ingredientes/queso-crema.png') },
        { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
        { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
        { name: 'Nata', image: require('../assets/images/ingredientes/nata.png') },
        { name: 'Base de galletas', image: require('../assets/images/ingredientes/galletas.png') },
      ],
    },
    {
      name: 'Tarta 3 chocolates',
      image: require('../assets/images/tartas/3chocolates.jpg'),
      ingredientes: [
        { name: 'Chocolate negro', image: require('../assets/images/ingredientes/chocolate.jpg') },
        { name: 'Chocolate con leche', image: require('../assets/images/ingredientes/chocolate-leche.png') },
        { name: 'Chocolate blanco', image: require('../assets/images/ingredientes/chocolate-blanco.png') },
        { name: 'Nata líquida', image: require('../assets/images/ingredientes/nata.png') },
        { name: 'Leche', image: require('../assets/images/ingredientes/leche.jpg') },
        { name: 'Gelatina en polvo', image: require('../assets/images/ingredientes/gelatina.png') },
        { name: 'Base de galletas', image: require('../assets/images/ingredientes/galletas.png') },
      ],
    },
    {
      name: 'Tarta de pistacho',
      image: require('../assets/images/tartas/pistacho.jpg'),
      ingredientes: [
        { name: 'Pistachos', image: require('../assets/images/ingredientes/pistachos.png') },
        { name: 'Queso crema', image: require('../assets/images/ingredientes/queso-crema.png') },
        { name: 'Nata', image: require('../assets/images/ingredientes/nata.png') },
        { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
        { name: 'Gelatina', image: require('../assets/images/ingredientes/gelatina.png') },
        { name: 'Base de galletas', image: require('../assets/images/ingredientes/galletas.png') },
      ],
    },
    {
  name: 'Muerte por chocolate',
  image: require('../assets/images/tartas/muerte-chocolate.jpg'),
  ingredientes: [
    { name: 'Chocolate negro', image: require('../assets/images/ingredientes/chocolate.jpg') },
    { name: 'Cacao en polvo', image: require('../assets/images/ingredientes/cacao.jpg') },
    { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
    { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
    { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
    { name: 'Mantequilla', image: require('../assets/images/ingredientes/mantequilla.jpg') },
    { name: 'Nata líquida', image: require('../assets/images/ingredientes/nata.png') },
  ],
},
{
  name: 'Red velvet',
  image: require('../assets/images/tartas/red-velvet.jpg'),
  ingredientes: [
    { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
    { name: 'Cacao en polvo', image: require('../assets/images/ingredientes/cacao.jpg') },
    { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
    { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
    { name: 'Buttermilk', image: require('../assets/images/ingredientes/suero-mantequilla.png') },
    { name: 'Colorante rojo', image: require('../assets/images/ingredientes/colorante-rojo.png') },
    { name: 'Queso crema', image: require('../assets/images/ingredientes/queso-crema.png') },
    { name: 'Mantequilla', image: require('../assets/images/ingredientes/mantequilla.jpg') },
  ],
}

  ],
  Bizcochos: [
    {
      name: 'Bizcocho de chocolate',
      image: require('../assets/images/bizcochos/chocolate.jpeg'),
      ingredientes: [
        { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
        { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
        { name: 'Aceite', image: require('../assets/images/ingredientes/aceite.jpg') },
        { name: 'Leche', image: require('../assets/images/ingredientes/leche.jpg') },
        { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
        { name: 'Cacao', image: require('../assets/images/ingredientes/cacao.jpg') },
        { name: 'Levadura', image: require('../assets/images/ingredientes/levadura.jpg') },
      ],
    },
    {
      name: 'Brownies',
      image: require('../assets/images/bizcochos/brownie.jpg'),
      ingredientes: [
        { name: 'Chocolate', image: require('../assets/images/ingredientes/chocolate.jpg') },
        { name: 'Mantequilla', image: require('../assets/images/ingredientes/mantequilla.jpg') },
        { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
        { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
        { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
        { name: 'Nueces', image: require('../assets/images/ingredientes/nueces.jpg') },
      ],
    },
    {
  name: 'Bizcocho de limon',
  image: require('../assets/images/bizcochos/limon.jpg'),
  ingredientes: [
    { name: 'Yogur natural de limón', image: require('../assets/images/ingredientes/yogur.jpg') },
    { name: 'Limón', image: require('../assets/images/ingredientes/limon.jpg') },
    { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
    { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
    { name: 'Azúcar blanca', image: require('../assets/images/ingredientes/azucar.png') },
    { name: 'Aceite de girasol', image: require('../assets/images/ingredientes/aceite.jpg') },
    { name: 'Levadura royal', image: require('../assets/images/ingredientes/levadura.jpg') },
    { name: 'Sal', image: require('../assets/images/ingredientes/sal.jpg') },
    { name: 'Mantequilla', image: require('../assets/images/ingredientes/mantequilla.jpg') },
  ],
},
{
  name: 'Bizcocho de naranja',
  image: require('../assets/images/bizcochos/naranja.jpg'),
  ingredientes: [
    { name: 'Naranja', image: require('../assets/images/ingredientes/naranja.jpg') },
    { name: 'Levadura', image: require('../assets/images/ingredientes/levadura.jpg') },
    { name: 'Aceite de girasol', image: require('../assets/images/ingredientes/aceite.jpg') },
    { name: 'Azúcar', image: require('../assets/images/ingredientes/azucar.png') },
    { name: 'Harina', image: require('../assets/images/ingredientes/harina.jpg') },
    { name: 'Huevos', image: require('../assets/images/ingredientes/huevos.jpg') },
    { name: 'Zumo de naranja', image: require('../assets/images/ingredientes/naranja.jpg') },
  ],
}
  ],
};

export default function RecetasScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tartas');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const sidebarWidth = useRef(new Animated.Value(80)).current;

  const { lista, toggleProducto } = useLista();

  const toggleSidebar = () => {
    const newWidth = isSidebarVisible ? 0 : 80;
    Animated.timing(sidebarWidth, {
      toValue: newWidth,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isInLista = (nombre: string) =>
    lista.some((item) => item.name === nombre);

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
            {isSidebarVisible &&
              CATEGORIES.map((category) => (
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
            {RECETAS[selectedCategory]?.map((receta, index) => (
              <View key={index} style={styles.card}>
                <Image source={receta.image} style={styles.productImage} />
                <Text style={styles.productName}>{receta.name}</Text>
                {receta.ingredientes.map((ing, idx) => (
                  <View key={idx} style={styles.ingredientRow}>
                    <Image source={ing.image} style={styles.ingredientImage} />
                    <Text style={styles.ingredientText}>{ing.name}</Text>
                    <Switch
                      value={isInLista(ing.name)}
                      onValueChange={() => toggleProducto(ing)}
                      trackColor={{ false: '#ccc', true: '#81b0ff' }}
                      thumbColor={isInLista(ing.name) ? '#007aff' : '#f4f3f4'}
                    />
                  </View>
                ))}
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
  menuButton: { padding: 8, marginRight: 15 },
  content: { flex: 1, flexDirection: 'row' },
  sidebar: { backgroundColor: '#f5f5f5' },
  sidebarContent: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    marginVertical: 5,
    width: '95%',
    alignItems: 'center',
  },
  categoryButtonActive: { backgroundColor: '#dcdcdc' },
  categoryText: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
  categoryTextActive: { fontWeight: 'bold', color: '#000' },
  products: { flex: 1, paddingHorizontal: 10 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  card: {
    width: '47%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
    gap: 6,
  },
  ingredientImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 4,
  },
  ingredientText: {
    flex: 1,
    fontSize: 12,
  },
});
