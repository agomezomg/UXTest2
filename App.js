import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import ListItems from './ListItems';

export default class App extends Component {
  render() {
    return (
      <ListItems/>
    );
  }
}