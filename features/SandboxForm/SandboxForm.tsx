import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, Button, TextInput } from 'react-native';
import { resetOponentMatchsticks } from '../slices/oponent-matchsticks';
import { resetUserMatchsticks } from '../slices/player-matchsticks';
import { setPile } from '../slices/pile-slice';
import { setTakeUpTo } from '../slices/take-up-to';
import { setIsBotTake } from '../slices/is-bot-take';
import stateStore from '@/redux/store';
import styles from './styles/sandboxFormStyles';
import { useRouter } from 'expo-router';

interface ISandBox {
  tostart: 'first' | 'second';
  takeUpTo: number;
  pile: number;
}

const SandboxForm = () => {
  const { control, handleSubmit } = useForm<ISandBox>();
  const navigate = useRouter();

  const setGameSettings = (data: ISandBox) => {
    stateStore.dispatch(resetOponentMatchsticks());
    stateStore.dispatch(resetUserMatchsticks());
    console.log(data);
    
    stateStore.dispatch(setPile(2 * +data.pile + 1));
    stateStore.dispatch(setTakeUpTo(+data.takeUpTo));

    if (data.tostart === 'second') {
      stateStore.dispatch(setIsBotTake());
      navigate.push('/two');
    } else {
      navigate.push('/game');
    }
  };

  return (
    <>
      <Text style={styles.formTitle}>
        Choose n and m where 2n + 1 will be the matchsticks in the pile and m is user action from
        take 1 matchstick to m
      </Text>
      <View style={styles.form}>
        <Text>Select your position</Text>
        <Controller
          control={control}
          name="tostart"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Position (first/second)"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Text>Select n</Text>
        <Controller
          control={control}
          name="pile"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Enter number for n"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Text>Select m</Text>
        <Controller
          control={control}
          name="takeUpTo"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.formInput}
              placeholder="Enter number for m"
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Button title="Apply" onPress={handleSubmit(setGameSettings)} />
      </View>
    </>
  );
};

export default SandboxForm;
