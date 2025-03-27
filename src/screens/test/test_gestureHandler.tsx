import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

const TestGestureHandlerScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Test Gesture Handler Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default TestGestureHandlerScreen;
