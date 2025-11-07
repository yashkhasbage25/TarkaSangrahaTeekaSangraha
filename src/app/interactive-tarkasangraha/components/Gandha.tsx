'use client';

import React from 'react';
import LocalFlorist from '@mui/icons-material/LocalFlorist';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Gandha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'घ्राणग्राह्यो गुणो गन्धः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Gandha',
      content: <RowDivisions
        sections={[
          {
            title: 'सुरभि (Fragrant)',
            content: 'Pleasant smell'
          },
          {
            title: 'असुरभि (Foul)',
            content: 'Unpleasant smell'
          }
        ]}
      />
    },
    {
      icon: <LocalFlorist style={{ fontSize: '48px', color: 'orange' }} />,
      title: 'Occurrence',
      content: 'पृथिवीमात्रवृत्तिः - Found only in earth.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
