// components/Screen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function Screen({ children, style, edges }) {
  // edges: optional prop to control which sides respect safe area
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges || ['top', 'bottom']}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // default background color
  },
});
