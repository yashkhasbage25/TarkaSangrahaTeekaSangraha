'use client';

import React from 'react';
import TrendingDown from '@mui/icons-material/TrendingDown';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Aparatva({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'परापरव्यवहारासाधारणकारणे परत्वापरत्वे',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Aparatva',
      content: <RowDivisions
        sections={[
          {
            title: 'दिक्कृतमपरत्वम्',
            content: 'Spatial nearness - proximity in space'
          },
          {
            title: 'कालकृतमपरत्वम्',
            content: 'Temporal nearness - juniority in time'
          }
        ]}
      />
    },
    {
      icon: <TrendingDown style={{ fontSize: '48px', color: 'teal' }} />,
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
