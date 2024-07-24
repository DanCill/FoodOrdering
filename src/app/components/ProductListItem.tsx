import { View, Image, Text } from "react-native"
import { Product } from '../../types'

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product
}

const ProductListItem = ({ product }: ProductListItemProps) => {
    const { id, image, name, price } = product
    return (
      <View className='bg-white p-3 rounded-[20px] flex-1 max-w-[50%]'>
      <Image className='w-full aspect-square' source={{ uri: image || defaultPizzaImage }} resizeMode='contain' />
      <Text className='text-lg font-semibold mt-10' >{name}</Text>
      <Text className='font-bold text-tint'>${price}</Text>
    </View>
    )
  }

  export default ProductListItem