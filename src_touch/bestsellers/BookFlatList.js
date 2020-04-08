import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import BookItem from "./BookItem";
import NYT from "./NYT";


class BookFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _refreshData = () => {
    NYT.fetchBooks().then(books => {
      this.setState({
        data: this._addKeysToBooks(books)
      });
    });
  };

  _addKeysToBooks = books => {
    // Takes the API response from the NYTimes and adds a key property
    // to the object for rendering purposes
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };

  _renderItem = data => {
    return (
      <BookItem
        coverURL={data.item.book_image}
        title={data.item.key}
        author={data.item.author}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default BookFlatList;