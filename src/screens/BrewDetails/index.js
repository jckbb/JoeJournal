import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {InfoSvg, TimerSvg, WaterSvg} from '../../common/res/svgs';

import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';

import {getLog} from '../../storage/utils';
import {unitType} from '../../common/res/strings';
import {PRIMARY_COLOR_900} from '../../common/res/colors';

import styles from './styles';
import PrimaryButton from '../../common/components/PrimaryButton';

const {width: screenWidth} = Dimensions.get('screen');

const GRID_CARD_DIMENSION = screenWidth / 2 - 20;

const BrewDetails = (props) => {
  const [brewData, setBrewData] = useState(null);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    fetchLog();
  }, []);

  useEffect(() => {
    if (!selectedStage) return;

    setBottomDrawerVisible(true);
  }, [selectedStage]);

  const fetchLog = async () => {
    const data = await getLog(props.id);

    setBrewData(data);
  };

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false);
    setSelectedStage(null);
  };

  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text style={styles.fieldText}>{label}</Text>
      <Text style={styles.detailText}>{value}</Text>
    </View>
  );

  const renderCard = (hasSpace, header, children) => (
    <View style={[styles.card, hasSpace && {marginTop: 20}]}>
      <Text style={styles.headerText}>{header}</Text>
      {children}
    </View>
  );

  const renderStage = (stageNumber, stageData, index) =>
    renderSquareCard(
      <View key={index} style={{padding: 10}}>
        <View
          style={[
            styles.row,
            {
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text style={styles.subHeaderText}>{`Stage ${stageNumber}`}</Text>
          {stageData.description.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSelectedStage({...stageData, index: stageNumber});
              }}>
              <InfoSvg />
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={styles.row}>
            <WaterSvg fill={PRIMARY_COLOR_900} />
            <Text
              style={
                styles.detailText
              }>{`${stageData.waterAmount}${unitType.gram}`}</Text>
          </View>
          <View style={styles.row}>
            <TimerSvg fill={PRIMARY_COLOR_900} />
            <Text
              style={
                styles.detailText
              }>{`${stageData.pourDuration}${unitType.seconds}`}</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            {justifyContent: 'space-between', marginTop: 15},
          ]}>
          <Text style={styles.detailText}>{'Hold'}</Text>
          <View style={styles.row}>
            <TimerSvg fill={PRIMARY_COLOR_900} />
            <Text
              style={
                styles.detailText
              }>{`${stageData.waitDuration}${unitType.seconds}`}</Text>
          </View>
        </View>
      </View>,
    );
  const renderSquareCard = (children) => (
    <View
      style={[
        styles.squareCard,
        {width: GRID_CARD_DIMENSION, height: GRID_CARD_DIMENSION},
      ]}>
      {children}
    </View>
  );

  return brewData && (
      <View style={styles.brewDetails}>
        <ScrollView
          style={styles.brewDetails}
          contentContainerStyle={{paddingBottom: 35}}>
          <View style={{marginBottom: 30, marginLeft: '5%'}}>
            <Title dark>{'Brew'}</Title>
          </View>
          <View style={{marginBottom: 10, marginHorizontal: 15}}>
            <PrimaryButton
              center
              onPress={() => {
                props.onNavigateTo('evaluate');
              }}>
              {'Evaluate Brew'}
            </PrimaryButton>
          </View>
          {renderCard(false, 'Prep', [
            renderDetail(
              'Water Amount',
              `${brewData.totalWaterAmount}${unitType.gram}`,
            ),
            renderDetail(
              'Water Temperature',
              `${brewData.waterTemperature}${unitType.celsius}`,
            ),
            <View style={styles.spacer} />,
            renderDetail('Grinder Dial', brewData.dial),
            renderDetail(
              'Coffee Amount',
              `${brewData.coffeeAmount}${unitType.gram}`,
            ),
          ])}
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {brewData.stages.map((item, index) =>
              renderStage(index + 1, item, index),
            )}
          </View>
        </ScrollView>
        <BottomDrawer
          isVisible={isBottomDrawerVisible}
          onDrawerStateChange={(changedState) => {
            if (drawerState.Closed === changedState) {
              handleBottomDrawerClose();
            }
          }}>
          {selectedStage && (
            <View>
              <Text
                style={[
                  styles.headerText,
                  {alignSelf: 'center'},
                ]}>{`Stage ${selectedStage.index}`}</Text>
              <Text style={styles.descriptionText}>
                {selectedStage.description}
              </Text>
            </View>
          )}
        </BottomDrawer>
      </View>
  );
};

export default BrewDetails;
