import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Title from '../../common/components/Title';
import Step from '../../common/components/Step';

import {summary, evaluationQuestions} from './res/strings';
import styles from './styles';

const Evaluate = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [evaluation, setEvaluation] = useState(0);
  const [showResults, setResults] = useState(false);

  const handleComplete = () => {
    props.onNavigateTo('');
  };

  const handleAnwserSelected = (item) => {
    setEvaluation((prev) => prev + item.value);

    if (questionIndex >= evaluationQuestions.length - 1) {
      setResults(true);
      // handleComplete();
      return;
    }
    setQuestionIndex((prev) => prev + 1);
  };

  const renderOption = (item, index, onPress) => (
    <TouchableOpacity key={index} style={styles.option} onPress={onPress}>
      <Text style={styles.optionText}>{item.answer}</Text>
    </TouchableOpacity>
  );

  const renderQuestion = (value) => (
    <View style={styles.question}>
      <Text style={styles.questionText}>{value}</Text>
    </View>
  );

  const renderEvaluationQuestions = () => {
    const data = evaluationQuestions[questionIndex];
    return (
      <View style={styles.overview}>
        <Title dark>{'Evaluate'}</Title>
        <Step
          dark
          totalSteps={evaluationQuestions.length}
          currentStep={questionIndex + 1}
        />
        {renderQuestion(data.question)}
        <View style={styles.options}>
          {data.options.map((item, index) =>
            renderOption(item, index, () => {
              handleAnwserSelected(item);
            }),
          )}
        </View>
      </View>
    );
  };

  const renderResults = () => {
    const data = summary[0];
    return (
      <View style={styles.overview}>
        <Title dark>{'Adjust'}</Title>
        {renderQuestion(data.question)}
        <View style={styles.options}>
          {data.options.map((item, index) => {
            let option = item;

            if (index === 0) {
              option = {
                answer: `Recommended: ${evaluation > 0 ? `+${evaluation}` : evaluation}`,
                value: evaluation,
              };
            }
            return renderOption(option, index, () => {
              props.onChangeDial(option.value);
              handleComplete();
            });
          })}
        </View>
      </View>
    );
  };
  return showResults ? renderResults() : renderEvaluationQuestions();
};

export default Evaluate;
