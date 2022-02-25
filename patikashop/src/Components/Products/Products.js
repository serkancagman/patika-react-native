import React from 'react'
import { SafeAreaView, View,Text,StyleSheet,Image, ScrollView } from 'react-native'
import { productData } from '../Helper/ProductData'
const Products = () => {
  return (
    <ScrollView >
        <SafeAreaView  style={styles.container}>
        {productData.map(product => (
            <View style={styles.productBox} key={product.id}>
                <Image source={{uri:product.imgURL}} style={styles.productImage}/>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                {product.inStock ? <Text style={styles.inStock}>Stokta var</Text> : <Text style={styles.outOfStock}>Stokta Yok</Text>}
            </View>
        ))}
        <View>
            
        </View>
        </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    productBox: {
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10,
        padding: 10,
        width: '40%',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        
    },
    inStock: {
        color: 'green',
    },
    outOfStock: {
        color: 'red',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'purple',
        marginBottom: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        minHeight: 70,
    },
    productImage: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    }
})

export default Products