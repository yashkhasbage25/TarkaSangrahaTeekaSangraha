'use client';

import React from 'react';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Hearing from '@mui/icons-material/Hearing';
import Water from '@mui/icons-material/Water';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Apah({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'शीतस्पर्शवत्यः आपः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Apah',
      content: <RowDivisions
        sections={[
          {
            title: 'नित्याः (परमाणुरूपाः)',
            content: 'Eternal (Atomic form).'
          },
          {
            title: 'अनित्याः (कार्यरूपाः)',
            content: 'Non-eternal (Form resulting from actions).'
          }
        ]}
      />
    },
    {
      title: 'Three types of Apah',
      icon: <Sort color="primary"/>,
      content: <RowDivisions
        sections={[
          {
            icon: <EmojiPeople style={{ fontSize: '48px', color: 'blue' }} />,
            title: 'शरीरं वरुणलोके',
            content: 'Body (In the realm of Varuna).'
          },
          {
            icon: <Hearing style={{ fontSize: '48px', color: 'gray' }} />,
            title: 'इन्द्रियं (रसनम्)',
            content: 'Sense organ (Tongue).'
          },
          {
            icon: <Water style={{ fontSize: '48px', color: 'blue' }} />,
            title: 'विषयः (सरित्समुद्रादिः)',
            content: 'Objects (Rivers, oceans, etc.).'
          }
        ]}
      />
    },
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
