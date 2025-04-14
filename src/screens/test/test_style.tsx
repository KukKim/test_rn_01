import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const TestReanimatedScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <Text>Test Style Screen</Text>
      <View
        style={{
          width: '100%',
          height: 500,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 1,
            height: 30,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 30,
              height: 20,
              alignSelf: 'center',
            }}>
            <Text>{'1'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'2'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'3'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderWidth: 1,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'1'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'2'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'3'}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderWidth: 1,
          }}>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'1'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'2'}</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
            }}>
            <Text>{'3'}</Text>
          </View>
        </View>

        <View
          style={{
            height: 200,
            // justifyContent: 'center',
            // alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            borderWidth: 1,
          }}>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
          <View
            style={{
              width: 100,
              borderWidth: 1,
            }}>
            <Text>{'Test'}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
});

export default TestReanimatedScreen;
