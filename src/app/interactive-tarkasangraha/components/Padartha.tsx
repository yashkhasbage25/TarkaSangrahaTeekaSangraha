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
    name: Devanagari[NavigationPaths.PADARTHA].eka,
    children: [
      {
        name: Devanagari[NavigationPaths.DRAVYA].eka,
        children: [
          { name: Devanagari[NavigationPaths.PRITHVI].eka },
          { name: Devanagari[NavigationPaths.AAP].eka },
          { name: Devanagari[NavigationPaths.TEJAH].eka },
          { name: Devanagari[NavigationPaths.VAYU].eka },
          { name: Devanagari[NavigationPaths.AKASHA].eka },
          { name: Devanagari[NavigationPaths.KAALA].eka },
          { name: Devanagari[NavigationPaths.AATMA].eka },
          { name: Devanagari[NavigationPaths.DIK].eka },
          { name: Devanagari[NavigationPaths.MANAH].eka },
        ],
        navigateTo: NavigationPaths.DRAVYA
      },
      {
        name: Devanagari[NavigationPaths.GUNA].eka,
        children: [
          { name: Devanagari[NavigationPaths.ROOPA].eka },
          { name: Devanagari[NavigationPaths.RASA].eka },
          { name: Devanagari[NavigationPaths.GANDHA].eka },
          { name: Devanagari[NavigationPaths.SPARSHA].eka },
          { name: Devanagari[NavigationPaths.SANKHYA].eka },
          { name: Devanagari[NavigationPaths.PARIMAANA].eka },
          { name: Devanagari[NavigationPaths.PRITHAKTVA].eka },
          { name: Devanagari[NavigationPaths.SANYOGA].eka },
          { name: Devanagari[NavigationPaths.VIBHAGA].eka },
          { name: Devanagari[NavigationPaths.PARATVA].eka },
          { name: Devanagari[NavigationPaths.APARATVA].eka },
          { name: Devanagari[NavigationPaths.GURUTVA].eka },
          { name: Devanagari[NavigationPaths.DRAVATVA].eka },
          { name: Devanagari[NavigationPaths.SNEHA].eka },
          { name: Devanagari[NavigationPaths.SHABDA].eka },
          { name: Devanagari[NavigationPaths.BUDDHI].eka },
          { name: Devanagari[NavigationPaths.SUKHA].eka },
          { name: Devanagari[NavigationPaths.DUKHA].eka },
          { name: Devanagari[NavigationPaths.ICCHA].eka },
          { name: Devanagari[NavigationPaths.DVESHA].eka },
          { name: Devanagari[NavigationPaths.PRAYATNA].eka },
          { name: Devanagari[NavigationPaths.DHARMA].eka },
          { name: Devanagari[NavigationPaths.ADHARMA].eka },
          { name: Devanagari[NavigationPaths.SAMSKARA].eka },
        ],
        navigateTo: NavigationPaths.GUNA
      },
      {
        name: Devanagari[NavigationPaths.KARMA].eka,
        children: [
          { name: Devanagari[NavigationPaths.UTKSHEPANA].eka },
          { name: Devanagari[NavigationPaths.APAKSHEPANA].eka },
          { name: Devanagari[NavigationPaths.AKUNCHANA].eka },
          { name: Devanagari[NavigationPaths.PRASARANA].eka },
          { name: Devanagari[NavigationPaths.GAMANA].eka },
        ],
        navigateTo: NavigationPaths.KARMA
      },
      {
        name: Devanagari[NavigationPaths.SAMANYA].eka,
        children: [
          { name: Devanagari[NavigationPaths.PARAM].eka },
          { name: Devanagari[NavigationPaths.APARAM].eka },
        ],
        navigateTo: NavigationPaths.SAMANYA
      },
      { name: Devanagari[NavigationPaths.VISHESHA].eka },
      { name: Devanagari[NavigationPaths.SAMAVAYA].eka },
      {
        name: Devanagari[NavigationPaths.ABHAVA].eka,
        children: [
          { name: Devanagari[NavigationPaths.PRAGABHAVA].eka },
          { name: Devanagari[NavigationPaths.PRADHVAMSABHAVA].eka },
          { name: Devanagari[NavigationPaths.ATYANTABHAVA].eka },
          { name: Devanagari[NavigationPaths.ANYONYABHAVA].eka },
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