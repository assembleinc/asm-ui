import {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {formatPhoneNumber} from "@assemble-inc/util"


export default {
  title: 'util/Format phone number',
};

const Template = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return <>
    <Input id="input" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} label="Enter phone number" />
    <Text>
      Formatted: {formatPhoneNumber(phoneNumber)}
    </Text>
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
