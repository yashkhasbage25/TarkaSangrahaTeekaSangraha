'use client';

import React from 'react';
import FitnessCenter from '@mui/icons-material/FitnessCenter';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Gurutva({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'आद्यपतनासमवायिकारणं गुरुत्वम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <FitnessCenter style={{ fontSize: '48px', color: 'orange' }} />,
      title: 'Nature',
      content: 'The inherent cause of initial falling or downward motion due to weight.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'पृथिवीजलवृत्ति - Found in earth and water.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
