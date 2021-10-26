import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {InfoSvg} from '../../common/res/svgs';

import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';

import {getLog} from '../../storage/utils';

import styles from './styles';

const BrewDetails = (props) => {
  const [brewData, setBrewData] = useState(null);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [selectedStageDetail, setStageDetail] = useState(null);

  useEffect(() => {
    fetchLog();
  }, []);

  useEffect(() => {
    if(!selectedStageDetail) return;

    setBottomDrawerVisible(true);
  }, [selectedStageDetail]);

  const fetchLog = async () => {
    const data = await getLog(props.id);
    setBrewData(data);
  };

  const handleBottomDrawerClose = () => {
    console.log('handleBottomDrawerClose');
    setBottomDrawerVisible(false);
    setStageDetail(null);
  };

  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );

  const renderCard = (hasSpace, header, children) => (
    <View style={[styles.card, hasSpace && {marginTop: 20}]}>
      <Text>{header}</Text>
      {children}
    </View>
  );

  const renderDescriptionDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text>{label}</Text>
      <TouchableOpacity
        onPress={() => {
          setStageDetail(value);
        }}>
        <InfoSvg />
      </TouchableOpacity>
    </View>
  );

  const renderStage = (stageNumber, stageData) => (
    <View style={{marginTop: 10}}>
      <Text>{`stage ${stageNumber}`}</Text>
      {renderDetail('Water Poured Amount', stageData.waterAmount)}
      {renderDetail('Pour Duration', stageData.pourDuration)}
      {renderDetail('Wait duration', stageData.waitDuration)}
      {renderDescriptionDetail('description', stageData)}
    </View>
  );

  return (
    <View style={styles.brewDetails}>
      <ScrollView style={styles.brewDetails}>
        <Title>{'Brew'}</Title>
        {renderCard(false, 'Prep', [
          renderDetail('Grinder Dial', brewData.dial),
          renderDetail('Coffee Amount', brewData.coffeeAmount),
          renderDetail('Water Amount', '250g'),
          renderDetail('Water Temperature', brewData.waterTemperature),
        ])}
        {renderCard(
          true,
          'Stages',
          brewData.stages.map((item, index) => renderStage(index + 1, item)),
        )}
      </ScrollView>
      <BottomDrawer
        isVisible={isBottomDrawerVisible}
        onDrawerStateChange={(changedState) => {
          console.log(changedState);
          if (drawerState.Closed === changedState) {
            console.log('closed');
            handleBottomDrawerClose();
          }
        }}>
        {selectedStageDetail && <Text>{selectedStageDetail.description}</Text>}
      </BottomDrawer>
    </View>
  );
};

export default BrewDetails;
