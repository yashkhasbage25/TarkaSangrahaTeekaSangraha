'use client';

import React from 'react';
import Directions from '@mui/icons-material/Directions';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Gamana({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'अन्यत्सर्वं गमनम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Directions style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Nature',
      content: 'General motion - all other types of motion not covered by the previous four.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'पृथिव्यादिचतुष्टयमनोमात्रवृत्ति - Found in earth, water, fire, air, and mind.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
