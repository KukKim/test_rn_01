import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from 'components/button/commonButton';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Home Screen</Text>
      <CommonButton onPress={() => navigation.navigate('Test')}>
        <Text>Style Test Page</Text>
      </CommonButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default HomeScreen;
