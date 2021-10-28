import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Title from '../../common/components/Title';
import Step from '../../common/components/Step';

import {overviewQuestions} from './res/strings';
import styles from './styles';

const Overview = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleComplete = () => {
    props.onNavigateTo('setup');
  };

  const renderQuestionSection = (item, index) => (
    <View key={index}>
      <View style={styles.question}>
        <Text style={styles.questionText}>{item.question}</Text>
      </View>
      <View>
        {item.options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => {
              if (questionIndex >= overviewQuestions.length - 1) {
                handleComplete();
                return;
              }
              setQuestionIndex((prev) => prev + 1);
            }}>
            <Text style={styles.optionText}>{item.answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.overview}>
      <Title>{'Overview'}</Title>
      <Step
        totalSteps={overviewQuestions.length}
        currentStep={questionIndex + 1}
      />
      {renderQuestionSection(overviewQuestions[questionIndex], 0)}
    </View>
  );
};

export default Overview;
