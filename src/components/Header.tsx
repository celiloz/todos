import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';



import AsyncStorage from '@react-native-async-storage/async-storage'

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {

  const tasksCounterText = tasksCounter === 1 ? 'Görev' : 'Görev'

  function handleRemoveStorage() {
    AsyncStorage.removeItem('@storage_tasksList')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleRemoveStorage}>
        <Text style={styles.appname}>Merhaba Celil</Text>
      </TouchableOpacity>

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}></Text>
        <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}in Var</Text>
      </View>
      <TouchableOpacity>
      <Image source={require('../assets/icons/settings.png')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(true) + 16,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#F0920C',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Regular',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  },
  appname:
  {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Inter-Bold',
  }
});