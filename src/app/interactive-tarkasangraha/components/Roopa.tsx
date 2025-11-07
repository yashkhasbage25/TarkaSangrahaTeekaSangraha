'use client';

import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Roopa({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'चक्षुर्मात्रग्राह्यो गुणो रूपम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Seven types of Roopa',
      content: <RowDivisions
        sections={[
          {
            title: 'शुक्ल (White)',
            content: 'White color'
          },
          {
            title: 'नील (Blue)',
            content: 'Blue color'
          },
          {
            title: 'पीत (Yellow)',
            content: 'Yellow color'
          },
          {
            title: 'रक्त (Red)',
            content: 'Red color'
          },
          {
            title: 'हरित (Green)',
            content: 'Green color'
          },
          {
            title: 'कपिश (Brown)',
            content: 'Brown color'
          },
          {
            title: 'चित्र (Variegated)',
            content: 'Mixed colors'
          }
        ]}
      />
    },
    {
      icon: <Visibility style={{ fontSize: '48px', color: 'blue' }} />,
      title: 'Occurrence',
      content: 'पृथिवीजलतेजोवृत्ति - Found in earth, water, and fire.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
