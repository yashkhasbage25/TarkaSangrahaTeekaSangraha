'use client';

import React from 'react';
import Restaurant from '@mui/icons-material/Restaurant';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Rasa({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'रसनग्राह्यो गुणो रसः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Six types of Rasa',
      content: <RowDivisions
        sections={[
          {
            title: 'मधुर (Sweet)',
            content: 'Sweet taste'
          },
          {
            title: 'अम्ल (Sour)',
            content: 'Sour taste'
          },
          {
            title: 'लवण (Salty)',
            content: 'Salty taste'
          },
          {
            title: 'कटु (Pungent)',
            content: 'Pungent taste'
          },
          {
            title: 'कषाय (Astringent)',
            content: 'Astringent taste'
          },
          {
            title: 'तिक्त (Bitter)',
            content: 'Bitter taste'
          }
        ]}
      />
    },
    {
      icon: <Restaurant style={{ fontSize: '48px', color: 'teal' }} />,
      title: 'Occurrence',
      content: 'पृथिवीजलवृत्तिः - Found in earth and water. All six types in earth, only sweet in water.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
