import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  Drawer,
  Icon,
  Modal,
  PaperProvider,
  Portal,
  RadioButton,
  Searchbar,
  SegmentedButtons,
  TextInput,
} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function PaperComp() {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  const [activedrawer, setActivedrawer] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [modalvisible, setModalVisible] = useState(false);
  const [radiochecked, setRadioChecked] = React.useState('first');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.topcontainer}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Avatar.Image
              size={50}
              source={require('../assets/Images/user.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headtxt}>Paper Component</Text>

          <View style={styles.iconWrapper}>
            <Icon source="bell-ring-outline" size={34} />
            <Badge style={styles.badge}>3</Badge>
          </View>
        </View>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>

        <View style={styles.segcontainer}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'walk',
                label: 'Walking',
              },
              {
                value: 'train',
                label: 'Transit',
              },
              {value: 'drive', label: 'Driving'},
            ]}
          />
        </View>

        <View style={styles.cardcontainer}>
          <Card>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent}
            />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
            <Card.Actions>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
              />
              <RadioButton
                value="first"
                status={radiochecked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setRadioChecked('first')}
              />
              <RadioButton
                value="second"
                status={radiochecked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setRadioChecked('second')}
              />
              <Button>Cancel</Button>
              <Button onPress={showModal}>Ok</Button>
            </Card.Actions>
          </Card>
        </View>
        <View style={styles.txtinput}>
          <TextInput
            label="Enter"
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>

        {drawerVisible && (
          <Pressable style={styles.overlay} onPress={hideDrawer}>
            <View style={styles.drawerContainer}>
              <Drawer.Section title="Menu">
                <Drawer.Item
                  label="First Item"
                  active={activedrawer === 'first'}
                  onPress={() => setActivedrawer('first')}
                />
                <Drawer.Item
                  label="Second Item"
                  active={activedrawer === 'second'}
                  onPress={() => setActivedrawer('second')}
                />
                <Drawer.Item label="Close Drawer" onPress={toggleDrawer} />
              </Drawer.Section>
            </View>
          </Pressable>
        )}
        <View style={styles.chipcontainer}>
          <Chip icon="information">Information</Chip>
          <Chip icon="music">Music</Chip>
          <Chip icon="movie">Movies</Chip>
          <Chip icon="cards">Games</Chip>
          <Chip icon="book">Books</Chip>
        </View>
        <Portal>
          <Modal
            visible={modalvisible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <View style={styles.nxtcontainer}>
          <TouchableOpacity
            style={styles.nxtbtn}
            onPress={() => {
              navigation.navigate('element');
            }}>
            <Text style={styles.nxttxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  topcontainer: {
    marginTop: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  cardcontainer: {
    marginTop: height * 0.03,
  },
  drawerContainer: {
    position: 'absolute',
    width: width * 0.6,
    height: '100%',
    backgroundColor: 'white',
    elevation: 5,
    zIndex: 999,
    marginTop: height * 0.05,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 998,
    flexDirection: 'row',
  },
  search: {
    marginTop: height * 0.03,
  },
  segcontainer: {
    marginTop: height * 0.02,
  },
  txtinput: {
    marginTop: height * 0.03,
  },
  headtxt: {
    fontSize: 24,
    fontWeight: '700',
  },
  nxtbtn: {
    backgroundColor: 'green',
    padding: 5,
    width: 60,
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
  },
  nxttxt: {
    fontSize: 20,
    color: '#ffff',
  },
  nxtcontainer: {
    marginLeft: width * 0.75,
    marginTop: height * 0.15,
  },
  chipcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: height * 0.03,
  },
});
