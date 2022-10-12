import React, { useState } from "react";
import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"

import styles from "./styles";

export default function ProductBox(props: ProductBoxProps) {
    const [showMore, setShowMore] = useState(false);
    const { title, brand, description, price, images, rating, stock, thumbnail } = props.product;

    return (
        <View style={styles.card} >
            <Image source={{uri: thumbnail}} style={styles.thumbnail}/>
            <View style={styles.detailcontainer} >
                <Text style={styles.title} >{title} • ${price}</Text>
                    <View style={{flexDirection: "row"}} >
                        {[...Array(Math.floor(rating))].map((e, i) => (
                        <Ionicons name="star" color="orange" key={i} size={18} />))}
                        {rating - Math.floor(rating) > 0 && <Ionicons name="star-half-outline" color="orange" size={18} />}
                    </View>
                <Text style={styles.description} >{description}</Text>
                {showMore && (<View>
                    <Text style={styles.info} >Stock: {stock}</Text>
                    <Text style={styles.info} >Brand: {brand}</Text>
                    <ScrollView horizontal>
                        {images.map((image, index) => <Image source={{uri: image}} style={styles.image} key={index} />)}
                    </ScrollView>
                </View>)}
                <TouchableOpacity style={styles.showMoreContainer} onPress={() => setShowMore((oldShowMore) => !oldShowMore)}>
                    <Ionicons
                        name={showMore ? "arrow-up" : "arrow-down"}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}