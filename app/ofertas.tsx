import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

const OFFERTS = [
  {
    name: 'Mercadona',
    url: 'https://www.mercadona.es',
    image: require('../assets/images/ofertas/mercadona.jpg')
,
  },
  {
    name: 'Supermercados Día',
    url: 'https://www.dia.es',
    image: require('../assets/images/ofertas/dia.png'),
  },
  {
    name: 'Supermercados El jamón',
    url: 'https://www.supermercadoseljamon.com',
    image: require('../assets/images/ofertas/jamon.png'),
  },
  {
    name: 'Coviran',
    url: 'https://www.coviran.es',
    image: require('../assets/images/ofertas/coviran.png'),
  },
];

export default function OfertasScreen() {
  const handleOpenURL = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error('Error al abrir URL:', err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas disponibles</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {OFFERTS.map((offer, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => handleOpenURL(offer.url)}
          >
            <Image source={offer.image} style={styles.logo} />
            <Text style={styles.name}>{offer.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  list: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
});
