'use client';

import React from 'react';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Shabda({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'श्रोत्रग्राह्यो गुणः शब्दः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Shabda',
      content: <RowDivisions
        sections={[
          {
            title: 'ध्वन्यात्मकः (Inarticulate)',
            content: 'Inarticulate sound - like drum beats'
          },
          {
            title: 'वर्णात्मकः (Articulate)',
            content: 'Articulate sound - like Sanskrit language'
          }
        ]}
      />
    },
    {
      icon: <VolumeUp style={{ fontSize: '48px', color: 'pink' }} />,
      title: 'Occurrence',
      content: 'आकाशमात्रवृत्तिः - Found only in space (Akasha).'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
