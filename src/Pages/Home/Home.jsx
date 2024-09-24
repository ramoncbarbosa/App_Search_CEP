import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export function Home(){
  const navigation = useNavigation();
  function navegarSearch(){
    navigation.navigate('Search');
  }

  return(
    <LinearGradient
      colors={['#32CD32', '#00CED1']}
      style={styles.gradient}>
      <View style={styles.container}>
        <TouchableOpacity onPress={navegarSearch} style={styles.areaBotao} activeOpacity={0.7}>
          <Text style={styles.title}>
            Buscar CEP
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaBotao: {
    padding: 10,
    borderRadius: 6,
    width: '50%',
    height: '8%',
    justifyContent: 'center',
    backgroundColor: '#105f96',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    elevation: 5,
  },
  title: {
    color: '#c2c2c2',
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
})