import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const boxSize = Dimensions.get('window').width * 0.35;

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/header.png')}
        style={styles.headerImage}
        resizeMode="contain"
      />

      <View style={styles.grid}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Mi lista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Categorías</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxText}>Supermercados</Text>
        </TouchableOpacity>
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
    height: 180,
    marginTop: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  box: {
    width: boxSize,
    height: boxSize,
    backgroundColor: '#ececec',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
