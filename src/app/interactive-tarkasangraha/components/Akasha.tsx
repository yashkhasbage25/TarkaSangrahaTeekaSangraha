'use client';

import React from 'react';
import AllInclusive from '@mui/icons-material/AllInclusive';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Akasha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'शब्दगुणकमाकाशम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <AllInclusive style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Properties',
      content: 'तच्चैकं विभु नित्यं च - It is one, all-pervading, and eternal.'
    },
    {
      icon: <VolumeUp style={{ fontSize: '48px', color: 'indigo' }} />,
      title: 'Unique Quality',
      content: 'Sound (शब्द) is the unique quality of Akasha. It is the substratum of sound.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
