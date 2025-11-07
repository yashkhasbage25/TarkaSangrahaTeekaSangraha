'use client';

import React from 'react';
import Psychology from '@mui/icons-material/Psychology';
import Person from '@mui/icons-material/Person';
import AllInclusive from '@mui/icons-material/AllInclusive';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Atma({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'ज्ञानाधिकरणमात्मा',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Atma',
      content: <RowDivisions
        sections={[
          {
            icon: <AllInclusive style={{ fontSize: '48px', color: 'gold' }} />,
            title: 'परमात्मा (ईश्वरः)',
            content: 'Supreme Soul - The omniscient Lord, one only.'
          },
          {
            icon: <Person style={{ fontSize: '48px', color: 'teal' }} />,
            title: 'जीवात्मा',
            content: 'Individual Soul - Different for each body, all-pervading and eternal.'
          }
        ]}
      />
    },
    {
      icon: <Psychology style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Nature',
      content: 'The soul is the substratum of knowledge (ज्ञानाधिकरणम्). The individual soul is distinct for each body, yet all-pervading and eternal.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
