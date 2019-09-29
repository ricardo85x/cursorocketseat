import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';

// import { Container } from './styles';

export default function TechList() {
  function handleAdicionar() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  const [newTech, setNewTech] = useState('');
  const [techs, setTechs] = useState([]);

  return (
    <View>
      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />

      <TouchableOpacity onPress={handleAdicionar}>
        <Text>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        testID="tech-list"
        data={techs}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>
  );
}
