import {SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';

const TestReanimatedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Test Reanimated Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default TestReanimatedScreen;
