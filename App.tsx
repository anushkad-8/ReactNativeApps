import {Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCards from './components/ActionCards'

export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
      
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      <ActionCards/>
      
    </ScrollView>
    </SafeAreaView>
  )
}