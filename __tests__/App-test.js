/**
 * @format
 */

import { mount } from 'enzyme';
import 'react-native';
import React from 'react';
import App from '../App';

describe('App', () => {
  describe('#Text', () => {
    it('should render the the text Welcome to react native! in our first text tag'
    , () => {
      const app = mount(<App />)
      const text = app.find('Text').at(0).text()
      expect(text).toEqual('Welcome to React Native!')
    })
  })
})
