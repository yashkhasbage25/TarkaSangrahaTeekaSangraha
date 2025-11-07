'use client';

import React from 'react';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Hearing from '@mui/icons-material/Hearing';
import Air from '@mui/icons-material/Air';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Vayu({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'रूपरहितस्पर्शवान्वायुः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Two types of Vayu',
      content: <RowDivisions
        sections={[
          {
            title: 'नित्यः (परमाणुरूपः)',
            content: 'Eternal (Atomic form).'
          },
          {
            title: 'अनित्यः (कार्यरूपः)',
            content: 'Non-eternal (Form resulting from actions).'
          }
        ]}
      />
    },
    {
      title: 'Three types of Vayu',
      icon: <Sort color="primary"/>,
      content: <RowDivisions
        sections={[
          {
            icon: <EmojiPeople style={{ fontSize: '48px', color: 'cyan' }} />,
            title: 'शरीरं वायुलोके',
            content: 'Body (In the realm of Vayu).'
          },
          {
            icon: <Hearing style={{ fontSize: '48px', color: 'gray' }} />,
            title: 'इन्द्रियं (त्वक्)',
            content: 'Sense organ (Skin - pervades entire body).'
          },
          {
            icon: <Air style={{ fontSize: '48px', color: 'lightblue' }} />,
            title: 'विषयः (वृक्षादिकम्पनहेतुः)',
            content: 'Objects (Cause of movement in trees, etc.).'
          }
        ]}
      />
    },
    {
      title: 'प्राणवायुः',
      icon: <Sort color="primary"/>,
      content: 'शरीरान्तःसंचारी वायुः प्राणः। स चैकोऽप्युपाधिभेदात्प्राणापानादिसंज्ञां लभते - The air circulating within the body is Prana. Though one, it receives different names like Prana, Apana, etc., due to different conditions.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
