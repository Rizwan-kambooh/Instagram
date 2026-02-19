// // import { View, Text } from 'react-native'
// // import React, { Children } from 'react'
// // import { SafeAreaView } from 'react-native-safe-area-context'
// // const Screen = ({children}) => {
// //   return (
// //     <SafeAreaView style={{ flex: 1 }}>
// //         {children}
// //     </SafeAreaView>
// //   )
// // }

// // export default Screen






// // components/Screen.js
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { View, StyleSheet } from 'react-native';

// export default function Screen({ children, style, edges }) {
//   // edges: optional prop to control which sides respect safe area
//   return (
//     <SafeAreaView style={[styles.container, style]} edges={edges || ['top', 'bottom']}>
//       {children}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // default background color
//   },
// });








import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from 'react-native'

const Screen = ({ children }) => {
  return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )
}

export default Screen

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
  }
})