import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Producto = {
  name: string;
  image: any;
};

type ListaContextType = {
  lista: Producto[];  // Lista actual de productos seleccionados
  toggleProducto: (producto: Producto) => void; // Agregar o quitar productos
  setLista: React.Dispatch<React.SetStateAction<Producto[]>>; // Vaciar lista
};

const ListaContext = createContext<ListaContextType | undefined>(undefined);

export const ListaProvider = ({ children }: { children: ReactNode }) => {
  const [lista, setLista] = useState<Producto[]>([]);

  const toggleProducto = (producto: Producto) => {
    setLista(prev =>
      prev.find(p => p.name === producto.name)
        ? prev.filter(p => p.name !== producto.name)
        : [...prev, producto]
    );
  };

  return (
    <ListaContext.Provider value={{ lista, toggleProducto, setLista }}>
      {children}
    </ListaContext.Provider>
  );
};

export const useLista = () => {
  const context = useContext(ListaContext);
  if (!context) throw new Error('useLista debe usarse dentro de ListaProvider');
  return context;
};
