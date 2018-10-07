import * as React from 'react';
import { Linking, View } from 'react-native';

import Product from './Product';

interface Product {
  name: string;
  source: any;
  url: string;
}

export default class Products extends React.Component<any> {
  async onPress(product: Product) {
    await Linking.openURL(product.url);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      />
    );
  }
}
