'use client';

import React from 'react';
import TouchApp from '@mui/icons-material/TouchApp';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Sparsha({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'त्वगिन्द्रियमात्रग्राह्यो गुणः स्पर्शः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Three types of Sparsha',
      content: <RowDivisions
        sections={[
          {
            title: 'शीत (Cold)',
            content: 'Cold touch - found in water'
          },
          {
            title: 'उष्ण (Hot)',
            content: 'Hot touch - found in fire'
          },
          {
            title: 'अनुष्णाशीत (Neither hot nor cold)',
            content: 'Neutral touch - found in earth and air'
          }
        ]}
      />
    },
    {
      icon: <TouchApp style={{ fontSize: '48px', color: 'gray' }} />,
      title: 'Occurrence',
      content: 'पृथिव्यप्तेजोवायुवृत्तिः - Found in earth, water, fire, and air.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
