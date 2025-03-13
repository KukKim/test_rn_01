import {SafeAreaView, Text, StyleSheet} from 'react-native';
import CommonButton from 'components/button/commonButton';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Home Screen</Text>
      <CommonButton></CommonButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default HomeScreen;
