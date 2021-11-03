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
import LogModal from '../../screens/LogModal';

import {unitType} from '../../common/res/strings';
import {PRIMARY_COLOR_900} from '../../common/res/colors';

import styles from './styles';
import PrimaryButton from '../../common/components/PrimaryButton';

const {width: screenWidth} = Dimensions.get('screen');

const GRID_CARD_DIMENSION = screenWidth / 2 - 20;

const BrewDetails = (props) => {
  const [brewData, setBrewData] = useState(props.data);
  const [showLogModal, setShowLogModal] = useState(false);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    if (!selectedStage) return;

    setBottomDrawerVisible(true);
  }, [selectedStage]);

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false);
    setSelectedStage(null);
  };

  const handleShowLogModal = () => {
    setShowLogModal(true);
  };

  const renderDetail = (label, value, index) => (
    <View key={index} style={[styles.row, styles.detail]}>
      <Text style={styles.fieldText}>{label}</Text>
      <Text style={styles.detailText}>{value}</Text>
    </View>
  );

  const renderCard = (hasSpace, header, children, index) => (
    <View key={index} style={[styles.card, hasSpace && {marginTop: 20}]}>
      <Text style={styles.headerText}>{header}</Text>
      {children}
    </View>
  );

  const renderStage = (stageNumber, stageData, index) =>
    renderSquareCard(
      <View style={{padding: 10}}>
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
      index,
    );

  const renderSquareCard = (children, index) => (
    <View
      key={index}
      style={[
        styles.squareCard,
        {width: GRID_CARD_DIMENSION, height: GRID_CARD_DIMENSION},
      ]}>
      {children}
    </View>
  );

  const renderBrewDetails = () => (
    <View style={styles.brewDetails}>
      <ScrollView
        style={styles.brewDetails}
        contentContainerStyle={{paddingBottom: 35}}>
        <View style={styles.title}>
          <Title dark>{'Brew'}</Title>
        </View>
        <View style={{marginBottom: 10, marginHorizontal: 15}}>
          <PrimaryButton
            center
            onPress={() => {
              props.onNavigateTo('evaluate');
            }}>
            {'Evaluate'}
          </PrimaryButton>
        </View>
        {renderCard(false, 'Prep', [
          renderDetail(
            'Water Amount',
            `${brewData.totalWaterAmount}${unitType.gram}`,
            0,
          ),
          renderDetail(
            'Water Temperature',
            `${brewData.waterTemperature}${unitType.celsius}`,
            1,
          ),
          <View style={styles.spacer} />,
          renderDetail('Grinder Dial', brewData.dial, 2),
          renderDetail(
            'Coffee Amount',
            `${brewData.coffeeAmount}${unitType.gram}`,
            3,
          ),
        ], 0)}
        <View style={styles.grid}>
          {brewData.stages.map((item, index) =>
            renderStage(index + 1, item, index),
          )}
        </View>
        <PrimaryButton onPress={handleShowLogModal}>{'Log'}</PrimaryButton>
      </ScrollView>
      <LogModal
        isVisible={showLogModal}
        brewId={props.data.id}
        onClose={() => {
          setShowLogModal(false);
        }}
      />
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

  return brewData && renderBrewDetails();
};

export default BrewDetails;
