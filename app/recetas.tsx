import { View, Text, StyleSheet, ScrollView, Image, Switch } from 'react-native';
import { useLista } from '../context/listContext';

const RECETAS = {
  Bizcochos: [
    {
      name: 'Bizcocho de chocolate',
      image: require('../assets/images/bizcochos/chocolate.jpeg'),
      ingredientes:
        '3 huevos M, 200 g de azúcar blanco, 120 g de aceite de girasol, 160 g de leche entera, 180 g de harina de trigo, 50 g de cacao en polvo sin azúcar, 2 cucharaditas de levadura química (tipo Royal), 1 pizca de sal, 100 g de agua caliente',
    },
    {
      name: 'Brownies',
      image: require('../assets/images/bizcochos/brownie.jpg'),
      ingredientes:
        '200 gramos de chocolate negro, 110 gramos de mantequilla, 4 huevos, 120 gramos de azúcar, 1 cucharada de esencia de vainilla, 85 gramos de harina, bicarbonato, nueces, pepitas de chocolate',
    },
  ],
};

export default function RecetasScreen() {
  const { lista, toggleProducto } = useLista();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recetas</Text>

      {Object.entries(RECETAS).map(([categoria, recetas]) => (
        <View key={categoria} style={styles.section}>
          <Text style={styles.sectionTitle}>{categoria}</Text>
          <View style={styles.grid}>
            {recetas.map((receta, index) => (
              <View key={index} style={styles.card}>
                <Image source={receta.image} style={styles.image} />
                <View style={styles.infoRow}>
                  <Text style={styles.name}>{receta.name}</Text>
                  <Switch
                    value={!!lista.find(r => r.name === receta.name)}
                    onValueChange={() => toggleProducto(receta)}
                    trackColor={{ false: '#ccc', true: '#81b0ff' }}
                    thumbColor={lista.find(r => r.name === receta.name) ? '#007aff' : '#f4f3f4'}
                  />
                </View>
                <Text style={styles.ingredientes}>{receta.ingredientes}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
  },
  ingredientes: {
    fontSize: 10,
    color: '#555',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
