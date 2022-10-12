import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";

import ProductBox from "../components/ProductBox";
import { getRequest } from "../functions/ApiCallFunctions";

import styles from "./styles";

export default function ListingDetailsScreen() {
    const [data, setData] = useState<Product[]>([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        getRequest<GetProductsResponse>("/products").then((response) => {
            setData(response.data.products);
        }).catch((err) => {
            console.log(err);
        })
    };


    return (
        <SafeAreaView style={styles.screen}>
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) =>
                    <ProductBox product={item} />
                }
            />
        </SafeAreaView>
    );
}