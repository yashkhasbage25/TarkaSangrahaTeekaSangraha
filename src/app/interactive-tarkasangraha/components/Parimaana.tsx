'use client';

import React from 'react';
import Straighten from '@mui/icons-material/Straighten';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Parimaana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'मानव्यवहारासाधारणकारणं परिमाणम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Four types of Parimaana',
      content: <RowDivisions
        sections={[
          {
            title: 'अणु (Atomic)',
            content: 'Smallest measure'
          },
          {
            title: 'महत् (Large)',
            content: 'Large measure'
          },
          {
            title: 'दीर्घ (Long)',
            content: 'Long measure'
          },
          {
            title: 'ह्रस्व (Short)',
            content: 'Short measure'
          }
        ]}
      />
    },
    {
      icon: <Straighten style={{ fontSize: '48px', color: 'pink' }} />,
      title: 'Occurrence',
      content: 'नवद्रव्यवृत्ति - Found in all nine substances.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
