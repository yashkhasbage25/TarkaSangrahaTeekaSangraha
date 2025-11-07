'use client';

import React from 'react';
import CompareArrows from '@mui/icons-material/CompareArrows';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Anyonyabhava({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'तादात्म्यसम्बन्धावच्छिन्नप्रतियोगिताकोऽन्योन्याभावः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <CompareArrows style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Nature',
      content: 'Mutual non-existence - the absence of identity relation. One thing is not another thing.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Example',
      content: 'घटः पटो नेति - A pot is not a cloth (they are mutually different).'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
