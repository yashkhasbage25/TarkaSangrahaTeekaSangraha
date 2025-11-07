'use client';

import React from 'react';
import HistoryToggleOff from '@mui/icons-material/HistoryToggleOff';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import Sort from '@mui/icons-material/Sort';

export default function Pragabhava({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'अनादिः सान्तः प्रागभावः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <HistoryToggleOff style={{ fontSize: '48px', color: 'blue' }} />,
      title: 'Nature',
      content: 'Prior non-existence - beginningless but has an end. The absence of an effect before its production.'
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Example',
      content: 'उत्पत्तेः पूर्वं कार्यस्य - The non-existence of a pot before it is made.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
