'use client';

import React from 'react';
import Opacity from '@mui/icons-material/Opacity';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Dravatva({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'आद्यस्यन्दनासमवायिकारणं द्रवत्वम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Dravatva',
      content: <RowDivisions
        sections={[
          {
            title: 'सांसिद्धिकं (Natural)',
            content: 'Natural fluidity - found in water'
          },
          {
            title: 'नैमित्तिकं (Caused)',
            content: 'Caused fluidity - found in earth (ghee, etc.) and fire (gold, etc.) when heated'
          }
        ]}
      />
    },
    {
      icon: <Opacity style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Occurrence',
      content: 'पृथिव्यप्तेजोवृत्ति - Found in earth, water, and fire.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
