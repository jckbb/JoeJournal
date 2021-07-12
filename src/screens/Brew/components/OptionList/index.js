import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const OptionList = ({options, ...props}) => {
  const renderOption = ({item, index}) => {
    const content = props.optionData[item].displayName;

    return (
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          props.onOptionChange(content);
        }}>
        <Text style={styles.optionText}>{content}</Text>
      </TouchableOpacity>
    );
  };

  const renderDivider = () => <View style={styles.divider} />;

  return options.length > 0 ? (
    <FlatList
      style={styles.optionList}
      data={options}
      renderItem={renderOption}
      keyExtractor={(__, index) => index.toString()}
      ItemSeparatorComponent={renderDivider}
    />
  ) : null;
};

export default OptionList;
