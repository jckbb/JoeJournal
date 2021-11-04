import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';

import {unitType} from '../../common/res/strings';
import {HistorySvg} from '../../common/res/svgs';

import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import LogModal from '../../screens/LogModal';
import PrimaryButton from '../../common/components/PrimaryButton';

import Detail from './components/Detail';
import Stage from './components/Stage';

import styles from './styles';
import {PRIMARY_COLOR_800} from '../../common/res/colors';
import {EVALUATE_BUTTON, TITLE} from './res/strings';

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

  const handleShowStageDescription = (data, index) => {
    setSelectedStage({description: data.description, index: index});
  };

  return (
    <View style={styles.brewDetails}>
      <ScrollView
        style={styles.brewDetails}
        contentContainerStyle={{paddingBottom: 35}}>
        <View style={styles.title}>
          <Title dark>{TITLE}</Title>
        </View>
        <View style={styles.buttonSet}>
          <PrimaryButton
            center
            onPress={() => {
              props.onNavigateTo('evaluate');
            }}>
            {EVALUATE_BUTTON}
          </PrimaryButton>
          <TouchableOpacity
            style={styles.historyButton}
            onPress={handleShowLogModal}>
            <HistorySvg fill={PRIMARY_COLOR_800} height={45} width={45} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.headerText}>{'Prep'}</Text>
          <Detail
            label={'Water Amount'}
            value={`${brewData.totalWaterAmount}${unitType.gram}`}
          />
          <Detail
            label={'Water Temperature'}
            value={`${brewData.waterTemperature}${unitType.celsius}`}
          />
          <View style={styles.spacer} />
          <Detail label={'Grinder Dial'} value={brewData.dial} />
          <Detail
            label={'Coffee Amount'}
            value={`${brewData.coffeeAmount}${unitType.gram}`}
          />
        </View>
        <View style={styles.grid}>
          {brewData.stages.map((item, index) => (
            <Stage
              key={index}
              stageIndex={index + 1}
              dimension={GRID_CARD_DIMENSION}
              data={item}
              onRequestDescription={handleShowStageDescription}
            />
          ))}
        </View>
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
};

export default BrewDetails;
