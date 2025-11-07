'use client';

import React from 'react';
import Psychology from '@mui/icons-material/Psychology';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Buddhi({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'सर्वव्यवहारहेतुर्गुणो बुद्धिर्ज्ञानम्',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two main types',
      content: <RowDivisions
        sections={[
          {
            title: 'स्मृतिः (Memory)',
            content: 'Knowledge arising from impressions alone'
          },
          {
            title: 'अनुभवः (Experience)',
            content: 'Knowledge other than memory - includes valid (यथार्थ) and invalid (अयथार्थ) cognition'
          }
        ]}
      />
    },
    {
      icon: <Psychology style={{ fontSize: '48px', color: 'yellow' }} />,
      title: 'Nature',
      content: 'The cause of all practical behavior. Knowledge or cognition residing in the soul.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
