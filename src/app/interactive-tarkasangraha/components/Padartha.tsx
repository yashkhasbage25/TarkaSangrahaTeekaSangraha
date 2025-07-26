'use client';
// Padartha.tsx  
import React from 'react'
import * as d3 from 'd3'
import { GenericComponentProps } from './interfaces';
import { Devanagari } from './Devanagari';
import { NavigationPaths } from './Navigations';
import SunChart from './SunChart'
import { DataNode, SectionedContentProps } from './interfaces';
export default class Padartha extends React.Component<GenericComponentProps> {

  private padarthaData: DataNode = {
    name: 'Padartha',
    children: [
      {
        name: 'Dravya',
        children: [
          { name: 'Prithvi' }, { name: 'Āp' }, { name: 'Teja' },
          { name: 'Vāyu' }, { name: 'Ākāśa' }, { name: 'Manas' },
          { name: 'Ātman' }, { name: 'Kāla' }, { name: 'Dik' },
        ],
        navigateTo: NavigationPaths.DRAVYA
      },
      {
        name: 'Guṇa',
        children: [
          { name: 'Rūpa' }, { name: 'Rasa' }, { name: 'Gandha' },
          { name: 'Sparśa' }, { name: 'Saṃkhyā' }, { name: 'Parimāṇa' },
          { name: 'Saṃghāta' }, { name: 'Vibhāga' }, { name: 'Pruthaktva' },
        ],
        navigateTo: NavigationPaths.GUNA
      },
      {
        name: 'Karma',
        children: [
          { name: 'Udgama' }, { name: 'Asechana' },
          { name: 'Akun̄chana' }, { name: 'Prasarana' }, { name: 'Gamana' },
        ],
        navigateTo: NavigationPaths.KARMA
      },
      { name: 'Samanya' },
      { name: 'Viśeṣa' },
      { name: 'Samavāya' },
      {
        name: 'Abhāva',
        children: [
          { name: 'Prāgabhāva' }, { name: 'Pradhvaṃsabhāva' },
          { name: 'Atyantabhāva' }, { name: 'Anyonyabhāva' },
          { name: 'Anyabhāva' },
        ]
      }
    ]
  }

  render() {
    return (
      <SunChart
        data={this.padarthaData}
        onShapeClick={this.props.onShapeClick}
        width={800}
        height={800}
      // optional: override any depth’s palette
      // colorPalettes={{  
      //   1: d3.schemeSet2,  
      //   2: ['#f00','#0f0','#00f',…],  
      //   3: d3.quantize(d3.interpolateViridis, 20)  
      // }}  
      />
    );
  }
}  