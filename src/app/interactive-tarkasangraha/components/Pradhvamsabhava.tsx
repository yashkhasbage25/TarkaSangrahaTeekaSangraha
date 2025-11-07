'use client';

import React from 'react';
import BrokenImage from '@mui/icons-material/BrokenImage';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Pradhvamsabhava({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'सादिरनन्तः प्रध्वंसः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <BrokenImage style={{ fontSize: '48px', color: 'teal' }} />,
      title: 'Nature',
      content: 'Posterior non-existence - has a beginning but is endless. The absence of an effect after its destruction.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Example',
      content: 'उत्पत्यनन्तरं कार्यस्य - The non-existence of a pot after it is destroyed.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
