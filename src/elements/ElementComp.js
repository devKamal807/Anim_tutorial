import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Avatar,
  Card,
  Divider,
  FAB,
  Icon,
  lightColors,
  ListItem,
  Slider,
  SpeedDial,
} from '@rneui/themed';
import { Rating} from 'react-native-ratings';
import {PricingCard} from '@rneui/base';

const {height, width} = Dimensions.get('window');

export default function ElementComp() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);


  const interpolate = (start, end, value) => {
    const k = value / 10;
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    const r = interpolate(255, 0, value);
    const g = interpolate(0, 255, value);
    const b = interpolate(0, 0, value);
    return `rgb(${r},${g},${b})`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topcontainer}>
          <Avatar
            size={50}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
          />
          <View style={styles.headtxtcontainer}>
            <Text style={styles.headtxt}>Element Component</Text>
          </View>
          <FAB
            size="small"
            icon={{
              name: 'place',
              color: 'white',
            }}
          />
        </View>

        <View style={styles.cardcontainer}>
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{padding: 0}}
              source={{
                uri: 'https://picsum.photos/700',
              }}
            />
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={25}
              showRating={false}
              startingValue={3}
            />
          </Card>
        </View>
        <Divider />
        <PricingCard
          color={lightColors.primary}
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{title: ' GET STARTED', icon: 'flight-takeoff'}}
        />
        <View>
          <ListItem bottomDivider>
            <Avatar
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            />
            <ListItem.Content>
              <ListItem.Title>John Doe</ListItem.Title>
              <ListItem.Subtitle>President</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem bottomDivider>
            <Avatar
              rounded
              icon={{
                name: 'person-outline',
                type: 'material',
                size: 26,
              }}
              containerStyle={{backgroundColor: '#c2c2c2'}}
            />
            <ListItem.Content>
              <ListItem.Title>Alba King</ListItem.Title>
              <ListItem.Subtitle>Vice President</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem>
            <Avatar
              rounded
              title="A"
              containerStyle={{backgroundColor: 'grey'}}
            />
            <ListItem.Content>
              <ListItem.Title>Adam Eva</ListItem.Title>
              <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>

        <View style={[styles.contentView]}>
          <Slider
            value={value}
            onValueChange={setValue}
            maximumValue={10}
            minimumValue={0}
            step={1}
            allowTouchTrack
            trackStyle={{height: 5, backgroundColor: 'transparent'}}
            thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
            thumbProps={{
              children: (
                <Icon
                  name="heartbeat"
                  type="font-awesome"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                  color={color()}
                />
              ),
            }}
          />
          <Text style={{paddingTop: 20}}>Value: {value}</Text>
        </View>
      </ScrollView>
      <SpeedDial
        isOpen={open}
        icon={{name: 'edit', color: '#fff'}}
        openIcon={{name: 'close', color: '#fff'}}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}>
        <SpeedDial.Action
          icon={{name: 'add', color: '#fff'}}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{name: 'delete', color: '#fff'}}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  topcontainer: {
    flexDirection: 'row',
    marginTop: height * 0.05,
    justifyContent: 'space-between',
  },
  headtxtcontainer: {
    marginTop: height * 0.01,
  },

  headtxt: {
    fontSize: 20,
    fontWeight: '600',
  },
  cardcontainer: {
    marginBottom: height * 0.02,
  },
  contentView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: height * 0.02,
  },
});
