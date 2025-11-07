'use client';

import React from 'react';
import NotInterested from '@mui/icons-material/NotInterested';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Atyantabhava({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'त्रैकालिकसंसर्गावच्छिन्नप्रतियोगिताकोऽत्यन्ताभावः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <NotInterested style={{ fontSize: '48px', color: 'orange' }} />,
      title: 'Nature',
      content: 'Absolute non-existence - the absence of a relation in all three times (past, present, future).'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Example',
      content: 'भूतले घटो नास्ति - There is no pot on the ground (where it never existed).'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
