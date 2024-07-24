import { View, FlatList } from 'react-native';

import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';

export default function MenuScreen() {
  return (
      <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{gap: 10}}
      />
  );
}