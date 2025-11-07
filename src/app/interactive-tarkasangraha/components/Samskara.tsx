'use client';

import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { GenericComponentProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Samskara({ onShapeClick }: GenericComponentProps) {
  const sections = [
    {
      title: 'लक्षणम्',
      content: 'संस्कारस्त्रिविधः',
      icon: <Sort color="primary"/>
    },
    {
      icon: <Sort color="primary"/>,
      title: 'Three types of Samskara',
      content: <RowDivisions
        sections={[
          {
            title: 'वेगः (Velocity)',
            content: 'Found in earth, water, fire, air, and mind'
          },
          {
            title: 'भावना (Impression)',
            content: 'Cause of memory arising from experience - found only in soul'
          },
          {
            title: 'स्थितिस्थापकः (Elasticity)',
            content: 'That which restores to original state - found in earth'
          }
        ]}
      />
    },
    {
      icon: <AutorenewIcon style={{ fontSize: '48px', color: 'pink' }} />,
      title: 'Nature',
      content: 'Impression or latent tendency that produces effects later.'
    }
  ];

  return (
    <SectionedContent
      sections={sections}
    />
  );
}
