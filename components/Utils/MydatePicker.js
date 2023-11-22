import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
// import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker'

export const MydatePicker = ({
  customstyles,
  dateFormat,
  placeholder,
  onSetDate,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [placeHolderText, setPlaceHolderText] = useState(true);

  return (
    <View>
      <DateTimePicker mode="date" value={date} display="spinner"/>
    </View>
  );
};

const styles = StyleSheet.create({
   pickerStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 5,
    color: 'black',
    backgroundColor: 'white',
  },
  pickerText: {
    color: 'black',
    backgroundColor: 'white',
  },
});
