import {SafeAreaView, Text, StyleSheet} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView
      style={styles.backgroundContainer}
    >
        <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer:{
    flex:1
  }
});

export default HomeScreen;