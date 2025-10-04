import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
interface Probs{
    label:string,
}
export default function CustomCheckBox({label}:Probs) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked} // Updates the state when the checkbox is pressed
        color={isChecked ? '#009944' : undefined} // Optional: Custom color when checked
      />
      <Text style={styles.paragraph}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    marginLeft: 4,
  },
  checkbox: {
    margin: 4,
  },
});