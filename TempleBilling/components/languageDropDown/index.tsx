import i18n from '@/localization/localizationUtils';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropdownMenu from './dropdownMenu';
import { MenuOption } from './menuOption';
// import DropdownMenu, { MenuOption } from './components/DropdownMenu'; // Adjust the import path based on your project structure

const LanguageSelect = () => {
  const [visible, setVisible] = useState(false);

  const languageList = [
    { label: 'English', value: 'en' },
    { label: 'Tamil', value: 'tn' },
    ];
    const handleChange = (value:string) => {
        // setValue(value);
        i18n.changeLanguage(value); // Update language in i18next
      };
    
  return (
    <View style={styles.container}>
      <DropdownMenu
        visible={visible}
        handleOpen={() => setVisible(true)}
        handleClose={() => setVisible(false)}
        trigger={
        <View style={{ flexDirection: 'row', alignItems: 'center',borderRadius: 10, padding: 8, backgroundColor: '#f0f0f0',marginRight: 16 }}>
        <Ionicons name='caret-down-sharp' size={14} color="black"/>
        <Ionicons name="language" size={24} color="black" />

      </View>
        }
      >
        {
            languageList.map((language, index) => (
          <MenuOption key={index} onSelect={() => { handleChange(language.value); setVisible(false); }}>
            <Text style={styles.triggerText}>{language.label}</Text>
          </MenuOption>
        ))
        }
        {/* <MenuOption onSelect={() => { setVisible(false); }}>
          <Text>View Details</Text>
        </MenuOption>
        <MenuOption onSelect={() => {setVisible(false);}}>
          <Text>Delete</Text>
        </MenuOption> */}
      </DropdownMenu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  triggerStyle: {
    height: 40,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  }
});

export default LanguageSelect;
