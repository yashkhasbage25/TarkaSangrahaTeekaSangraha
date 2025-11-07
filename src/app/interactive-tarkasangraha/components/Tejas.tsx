'use client';

import React from 'react';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Hearing from '@mui/icons-material/Hearing';
import Whatshot from '@mui/icons-material/Whatshot';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Tejas({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'उष्णस्पर्शवत्तेजः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Tejas',
      content: <RowDivisions
        sections={[
          {
            title: 'नित्यं (परमाणुरूपम्)',
            content: 'Eternal (Atomic form).'
          },
          {
            title: 'अनित्यं (कार्यरूपम्)',
            content: 'Non-eternal (Form resulting from actions).'
          }
        ]}
      />
    },
    {
      title: 'Three types of Tejas',
      icon: <Sort color="primary"/>,
      content: <RowDivisions
        sections={[
          {
            icon: <EmojiPeople style={{ fontSize: '48px', color: 'orange' }} />,
            title: 'शरीरमादित्यलोके',
            content: 'Body (In the realm of the Sun).'
          },
          {
            icon: <Hearing style={{ fontSize: '48px', color: 'gray' }} />,
            title: 'इन्द्रियं (चक्षुः)',
            content: 'Sense organ (Eye).'
          },
          {
            icon: <Whatshot style={{ fontSize: '48px', color: 'red' }} />,
            title: 'विषयः (चतुर्विधः)',
            content: 'Objects (Four types: earthly fire, divine lightning, digestive fire, mineral gold).'
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
