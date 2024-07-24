import { Image, Text, View } from 'react-native';

import products from '../../../assets/data/products';

const product = products[0]

export default function TabOneScreen() {
  return (
    <View className='bg-white p-10 rounded-[20px]'>
      <Image className='w-full aspect-square' source={{ uri: product.image }} resizeMode='contain' />
      <Text className='text-lg font-semibold mt-10' >{product.name}</Text>
      <Text className='font-bold text-tint'>${product.price}</Text>
    </View>
  );
}
