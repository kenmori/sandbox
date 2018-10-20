import React from "react";
import { compose, setDisplayName } from "recompose";
import { Link } from "../common/Routing";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default compose(setDisplayName("Header"))(() => (
  <View>
    <FlatList
      data={[{ key: "about" }, { key: "scedule" }]}
      renderItem={({ item }) => (
        <Link to={`/${item.key}`}>
          <Text>{item.key}</Text>
        </Link>
      )}
    />
  </View>
));
