// import { View, Text } from 'react-native'
// import React, { Children } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// const Screen = ({children}) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//         {children}
//     </SafeAreaView>
//   )
// }

// export default Screen






// components/Screen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';

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
    backgroundColor: '#fff', // default background color
  },
});