// import {useEffect} from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from 'components/button/commonButton';

const TestScreen: React.FC = () => {
  const testPageList = ['TestStyle', 'TestGestureHandler', 'TestReanimated'];
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <CommonButton onPress={() => navigation.navigate(item)}>
        <Text>{item}</Text>
      </CommonButton>
    );
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Test Screen</Text>
      <FlatList data={testPageList} style={{flex: 1}} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default TestScreen;
