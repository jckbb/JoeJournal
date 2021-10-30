import React, {useEffect, useReducer, useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {PlusSvg, TimerSvg, WaterSvg} from '../../common/res/svgs';
import {unitType} from '../../common/res/strings';

import Title from '../../common/components/Title';
import NumberField from '../../common/components/NumberField';
import PrimaryButton from '../../common/components/PrimaryButton';
import TextField from '../../common/components/TextField';
import Step from '../../common/components/Step';
import IconButton from '../../common/components/IconButton';

import {
  updateSelectedStage,
  addStage,
  removeStage,
  updateField,
} from './data/actions';
import reducer, {initialState} from './data/formReducer';
import {
  TITLE,
  waterPouredField,
  waitTimeField,
  pourTimeField,
  descriptionField,
} from './res/strings';
import {parseTimeToString, stageFormValidation, convertFormDataToRecord} from './utils.js';
import styles, {darkRed} from './styles';
import { PRIMARY_COLOR_700 } from '../../common/res/colors';

const StageForm = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);
  const [totalWaterAmount, setTotalWaterAmount] = useState(props.data.prep.totalWaterAmount);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let totalWater = 0;
    let totalTime = 0;
    for (const stageId in state.stage) {
      const stageData = state.stage[stageId];

      if (stageData.waterAmount.value !== undefined) {
        totalWater += stageData.waterAmount.value;
      }

      if (stageData.pourDuration.value !== undefined) {
        totalTime += stageData.pourDuration.value;
      }

      if (stageData.waitDuration.value !== undefined) {
        totalTime += stageData.waitDuration.value;
      }
    }

    setTotalTime(totalTime);
    setTotalWaterAmount(totalWater);
  }, [state.stage]);

  const handleSubmit = () => {
    const isStageFormValid = stageFormValidation(
      state.stage,
      state.selectedStage,
    );

    if (!isStageFormValid) {
      setFormErrors(true);
      return;
    }

    const record = convertFormDataToRecord(state.stage);
    props.onStageComplete(record);
    props.onNavigateTo('brew');
  };

  const handleRemoveStage = () => {
    if (state.stageByIndex.length === 1) return;

    dispatch(removeStage(state.selectedStage));
  };

  const handleTabPress = (item) => {
    const isStageFormValid = stageFormValidation(
      state.stage,
      state.selectedStage,
    );

    if (!isStageFormValid) {
      setFormErrors(true);
      return;
    }

    setFormErrors(false);
    dispatch(updateSelectedStage(item));
  };

  const handleAddStagePress = () => {
    const isStageFormValid = stageFormValidation(
      state.stage,
      state.selectedStage,
    );

    if (!isStageFormValid) {
      setFormErrors(true);
      return;
    }

    setFormErrors(false);
    dispatch(addStage());
  };

  const renderStageTab = (item, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.tabSidePadding,
        styles.tabButton,
        state.selectedStage === item && styles.selectedTab,
      ]}
      onPress={() => {
        handleTabPress(item);
      }}>
      <Text style={styles.tabText}>{index + 1}</Text>
    </TouchableOpacity>
  );

  const renderTotals = () => (
    <View
      style={[
        styles.row,
        {flexWrap: 'wrap', justifyContent: 'center', marginTop: 20},
      ]}>
      <View style={[styles.row, {alignItems:'center'}]}>
        <TimerSvg fill={PRIMARY_COLOR_700} />
        <Text style={styles.totalText}>{parseTimeToString(totalTime)}</Text>
      </View>
      <View style={[styles.row, {alignItems:'center', marginLeft: 8}]}>
        <WaterSvg fill={PRIMARY_COLOR_700} />
        <Text
          style={
            styles.totalText
          }>{`${totalWaterAmount}${unitType.gram}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.stageForm}>
      <StatusBar hidden />
      <Step dark totalSteps={2} currentStep={2} />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Title dark>{TITLE}</Title>
        {renderTotals()}
        <View style={[styles.row, styles.stageTabs]}>
          {state.stageByIndex.map(renderStageTab)}
          <IconButton onPress={handleAddStagePress}>
            <PlusSvg fill={darkRed} />
          </IconButton>
        </View>
        <View style={styles.stageContainer}>
          <NumberField
            hasTopRoom
            error={
              showFormErrors && state.stage[state.selectedStage].waterAmount.hasError
            }
            label={waterPouredField.LABEL}
            placeholder={waterPouredField.PLACEHOLDER}
            unit={unitType.gram}
            value={state.stage[state.selectedStage].waterAmount.value}
            onChangeNumber={(value) => {
              dispatch(updateField(state.selectedStage, 'waterAmount', value));
            }}
          />
          <View style={[styles.row, {flex: 1}]}>
            <NumberField
              hasTopRoom
              error={
                showFormErrors &&
                state.stage[state.selectedStage].pourDuration.hasError
              }
              label={pourTimeField.LABEL}
              placeholder={pourTimeField.PLACEHOLDER}
              unit={unitType.seconds}
              value={state.stage[state.selectedStage].pourDuration.value}
              onChangeNumber={(value) => {
                dispatch(
                  updateField(state.selectedStage, 'pourDuration', value),
                );
              }}
            />
            <NumberField
              hasTopRoom
              hasLeftRoom
              error={
                showFormErrors &&
                state.stage[state.selectedStage].waitDuration.hasError
              }
              label={waitTimeField.LABEL}
              placeholder={waitTimeField.PLACEHOLDER}
              unit={unitType.seconds}
              value={state.stage[state.selectedStage].waitDuration.value}
              onChangeNumber={(value) => {
                dispatch(
                  updateField(state.selectedStage, 'waitDuration', value),
                );
              }}
            />
          </View>
          <TextField
            hasTopRoom
            label={descriptionField.LABEL}
            placeholder={descriptionField.PLACEHOLDER}
            onChangeText={(value) => {
              dispatch(updateField(state.selectedStage, 'description', value));
            }}
            value={state.stage[state.selectedStage].description.value}
            lineCount={4}
          />
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={handleRemoveStage}>
              <Text style={styles.removeText}>{'Remove'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <PrimaryButton onPress={handleSubmit}>{'Complete'}</PrimaryButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default StageForm;
