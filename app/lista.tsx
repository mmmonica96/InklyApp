import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLista } from '../context/listContext';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function ListaScreen() {
  const { lista, setLista } = useLista();
  const [tachados, setTachados] = useState<{ [key: string]: boolean }>({});

  const toggleTachado = (name: string) => {
    setTachados((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const vaciarLista = () => {
    setLista([]);
    setTachados({});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {lista.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.name, tachados[item.name] && styles.tachado]}>
              {item.name}
            </Text>
            <TouchableOpacity onPress={() => toggleTachado(item.name)}>
              <AntDesign
                name={tachados[item.name] ? 'checkcircle' : 'checkcircleo'}
                size={24}
                color={tachados[item.name] ? 'green' : '#999'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.clearButton} onPress={vaciarLista}>
        <Text style={styles.clearText}>Vaciar lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { padding: 20, paddingBottom: 100 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 10,
  },
  image: { width: 50, height: 50, marginRight: 10, resizeMode: 'contain' },
  name: { fontSize: 16, flex: 1 },
  tachado: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  clearButton: {
    backgroundColor: '#d33',
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 8,
  },
  clearText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
