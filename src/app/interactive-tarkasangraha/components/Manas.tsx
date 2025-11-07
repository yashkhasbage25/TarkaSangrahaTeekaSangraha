'use client';

import React from 'react';
import Lightbulb from '@mui/icons-material/Lightbulb';
import Grain from '@mui/icons-material/Grain';
import AllInclusive from '@mui/icons-material/AllInclusive';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Manas({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'सुखाद्युपलब्धिसाधनमिन्द्रियं मनः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Lightbulb style={{ fontSize: '48px', color: 'yellow' }} />,
      title: 'Function',
      content: 'Mind is the sense organ that is the instrument for the perception of pleasure, pain, etc.'
    },
    {
      icon: <Grain style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Nature',
      content: 'तच्च प्रत्यात्मनियतत्वादनन्तं परमाणुरूपं नित्यं च - It is infinite in number (one for each soul), atomic in size, and eternal.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
