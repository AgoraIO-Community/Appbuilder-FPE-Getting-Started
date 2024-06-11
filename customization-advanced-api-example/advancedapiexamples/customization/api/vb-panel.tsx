import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  useVirtualBackground,
  useIsVideoEnabled,
  useLocalUid,
  type VBOption,
  isMobileOrTablet,
  VBPreview,
} from 'customization-api';


const VBItem = ({type, path, label}) => {
  const {setVBPreview, isVirtualBackgroundSelected} = useVirtualBackground();
  const isSelectedItem = isVirtualBackgroundSelected(type, path);

  let comp = null;
  switch (type) {
    case 'none':
    case 'blur':
      comp = <Text>{label}</Text>;
      break;
    case 'image':
      comp = <Image source={{uri: path}} style={styles.img} />;
      break;
  }

  return (
    <TouchableOpacity
      onPress={() => setVBPreview(type, path)}
      style={[styles.vbItem, isSelectedItem && styles.selectedItem]}>
      {comp}
    </TouchableOpacity>
  );
};

function VBPanel({isOnPrecall = false}) {
    const {
      virtualBackgrounds,
      applyVirtualBackground,
      hideVirtualBackgroundPanel,
    } = useVirtualBackground();
  

  const localUid = useLocalUid();
  const isVideoEnabled = useIsVideoEnabled();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={hideVirtualBackgroundPanel}>
        <Text style={styles.headerText}>My VB Panel</Text>
      </TouchableOpacity>
      {!isOnPrecall && (
        <View style={styles.preview}>
          {' '}
          <VBPreview isLocalVideoON={isVideoEnabled(localUid)} />
        </View>
      )}
      <ScrollView contentContainerStyle={styles.body}>
        {virtualBackgrounds
          .filter(item => item.type !== 'custom')
          .map(item => (
            <VBItem
              key={item.id}
              type={item.type}
              path={item.path}
              label={item?.label}
            />
          ))}
      </ScrollView>
      {!isOnPrecall && (
        <View style={styles.footer}>
          <TouchableOpacity onPress={applyVirtualBackground}>
            <Text>Apply</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    flexDirection: 'column',
    width: 370,
  },
  header: {
    marginVertical: 10,
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerText: {
    fontSize: 16,
    color: '#ddd',
    fontFamily: 'Source Sans Pro',
    alignSelf: 'center',
  },
  body: {
    minHeight: 200,
    padding: 10,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vbItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  selectedItem: {
    borderWidth: 4,
    borderColor: '#ddd',
  },
  footer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  preview: {
    height: 300,
  },
});

export default VBPanel;
