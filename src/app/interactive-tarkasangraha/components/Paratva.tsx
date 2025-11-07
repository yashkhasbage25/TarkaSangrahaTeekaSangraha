'use client';

import React from 'react';
import TrendingUp from '@mui/icons-material/TrendingUp';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Paratva({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'परापरव्यवहारासाधारणकारणे परत्वापरत्वे',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Paratva',
      content: <RowDivisions
        sections={[
          {
            title: 'दिक्कृतं परत्वम्',
            content: 'Spatial remoteness - distance in space'
          },
          {
            title: 'कालकृतं परत्वम्',
            content: 'Temporal remoteness - seniority in time'
          }
        ]}
      />
    },
    {
      icon: <TrendingUp style={{ fontSize: '48px', color: 'blue' }} />,
      title: 'Occurrence',
      content: 'पृथिव्यादिचतुष्टयमनोवृत्तिनी - Found in earth, water, fire, air, and mind.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
