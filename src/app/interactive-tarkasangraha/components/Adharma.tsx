'use client';

import React from 'react';
import Gavel from '@mui/icons-material/Gavel';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Adharma({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'निषिद्धकर्मजन्यस्त्वधर्मः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Gavel style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Nature',
      content: 'Demerit or vice arising from prohibited actions. The quality that leads to suffering.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Occurrence',
      content: 'आत्ममात्रवृत्तिः - Found only in the soul (Atma).'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
