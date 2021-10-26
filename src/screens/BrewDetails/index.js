import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {getLog} from '../../storage/utils';

const BrewDetails = (props) => {
  useEffect(() => {
    fetchLog();
  }, []);

  const fetchLog = async () => {
    const brewData = await getLog(props.id);

    console.log(brewData);
  };

  return (
    <View>
      <Text>{JSON.stringify(props.data)}</Text>
    </View>
  );
};

export default BrewDetails;
