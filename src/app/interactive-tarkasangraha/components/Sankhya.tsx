'use client';

import React from 'react';
import Numbers from '@mui/icons-material/Numbers';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Sankhya({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'एकत्वादिव्यवहारहेतुः संख्या',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Numbers style={{ fontSize: '48px', color: 'purple' }} />,
      title: 'Nature',
      content: 'नवद्रव्यवृत्तिरेकत्वादिपरार्धपर्यन्ता - Found in all nine substances, from one to infinity.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Types',
      content: 'एकत्वं नित्यमनित्यं च। द्वित्वादिकं तु सर्वत्राऽनित्यमेव - Oneness can be eternal or non-eternal. Twoness and beyond are always non-eternal.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
