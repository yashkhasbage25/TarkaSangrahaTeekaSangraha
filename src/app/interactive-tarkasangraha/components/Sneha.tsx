'use client';

import React from 'react';
import WaterDrop from '@mui/icons-material/WaterDrop';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Sneha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'चूर्णादिपिण्डीभावहेतुर्गुणः स्नेहः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <WaterDrop style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Nature',
      content: 'The quality that causes powder and similar substances to cohere into a mass.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'जलमात्रवृत्तिः - Found only in water.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
