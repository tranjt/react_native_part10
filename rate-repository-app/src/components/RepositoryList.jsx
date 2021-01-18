import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useHistory } from "react-router-native";
import { useDebounce } from 'use-debounce';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const sortOptions = [
  { label: 'Latest repositories', value: { orderBy: 'CREATED_AT' } },
  { label: 'Highest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' } },
  { label: 'Lowest rated repositories', value: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' } },
];

const Dropdown = ({ sortOrder, setSortOrder }) => {
  return (
    <RNPickerSelect
      value={sortOrder}
      onValueChange={(value) => setSortOrder(value)}
      items={sortOptions}
    />
  );
};


const ItemSeparator = () => <View style={styles.separator} />;


export class RepositoryListContainer extends React.Component {
  renderHeader = () => { 
    return (
      <>
        <TextInput
          onChangeText={text => this.props.setFilter(text)}
          value={this.props.filter}
          placeholder='Search...'
        />
        <Dropdown setSortOrder={this.props.setSortOrder} sortOrder={this.props.sortOrder} />
      </>
    );
  };

  onPress = (id) => {    
    this.props.history.push(`/repository/${id}`);
  };

  renderItem = ( item ) => {    
    return (
      <TouchableOpacity onPress={() => this.onPress(item.item.id)}>
        <RepositoryItem item={item.item} />
      </TouchableOpacity>
    );
  };

  getRepositoryNodes = () => {
     const repositoryNodes = this.props.repositories
    ? this.props.repositories.edges.map(edge => edge.node)
    : [];    
    return repositoryNodes;
  }
 
  render() {
    return (
      <FlatList
        data={this.getRepositoryNodes()}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={item => this.renderItem(item)}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}


const RepositoryList = () => {
  const [sortOrder, setSortOrder] = useState({ orderBy: 'CREATED_AT' });
  const [filter, setFilter] = useState('');
  const [searchKeyword] = useDebounce(filter, 500);
  const { repositories, loading } = useRepositories({ ...sortOrder, searchKeyword });
  const history = useHistory();

  if (loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortOrder={setSortOrder}
      sortOrder={sortOrder}
      setFilter={setFilter}
      filter={filter}
      history={history}
    />
  );
};

export default RepositoryList;

