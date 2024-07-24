import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

import { defaultPizzaImage } from '@components/ProductListItem'
import products from '@assets/data/products'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id.toString() === id);

  if(!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View className='flex-1 bg-white p-8'>
      <Stack.Screen  options={{ title: product.name }} />
      <Image 
        source={{uri: product.image || defaultPizzaImage }}
        className='w-full aspect-square'
      />
      <Text className='text-lg font-semibold' >${product.price}</Text>
    </View>
  )
}

export default ProductDetailsScreen