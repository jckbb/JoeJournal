import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {unitType} from '../../../../common/res/strings';
import {InfoSvg, TimerSvg, WaterSvg} from '../../../../common/res/svgs';

import styles, {ICON_COLOR} from './styles';

const Stage = (props) => {
  return (
    <View style={[styles.squareCard, {width: props.dimension}]}>
      <View style={[styles.row, styles.cardHeader]}>
        <Text style={styles.subHeaderText}>{`Stage ${props.stageIndex}`}</Text>
        {props.data.description.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              props.onRequestDescription(props.data, props.stageIndex);
              // setSelectedStage({...item, index: index + 1});
            }}>
            <InfoSvg />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.content]}>
        <View style={{marginVertical: 16, alignItems: 'center'}}>
          <WaterSvg fill={ICON_COLOR} height={22} width={22} />
          <Text style={styles.detailText}>
            {`${props.data.waterAmount}${unitType.gram}`}
          </Text>
        </View>
        <View>
          <View style={[styles.row, {marginBottom: 8, alignItems: 'center'}]}>
            <Text style={[styles.label, {paddingRight: 8}]}>{'Pour'}</Text>
            <TimerSvg fill={ICON_COLOR} height={22} width={22} />
            <Text style={styles.detailText}>
              {`${props.data.pourDuration}${unitType.seconds}`}
            </Text>
          </View>
          <View style={[styles.row, {alignItems: 'center'}]}>
            <Text style={[styles.label, {paddingRight: 8}]}>{'Wait'}</Text>
            <TimerSvg fill={ICON_COLOR} height={22} width={22} />
            <Text style={styles.detailText}>
              {`${props.data.waitDuration}${unitType.seconds}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Stage;
