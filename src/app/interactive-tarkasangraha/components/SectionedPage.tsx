'use client';

import React, { Component } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Avatar 
} from '@mui/material';
import { SectionedContentProps } from './interfaces';
import { Nanum_Myeongjo, Eczar } from 'next/font/google';

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ['400'],
  subsets: ['latin'],
});
const eczarLight = Eczar({
  weight: ['400'],
  subsets: ['latin'],
});
class SectionedContent extends Component<SectionedContentProps> {
  render() {
    return (
      <Container maxWidth="md" className="py-8 min-h-screen">       
        <Box className="space-y-6">
          {this.props.sections.map((section, idx) => (
            <Card 
              key={idx} 
              elevation={2}
              variant="outlined"
              sx={{
                backgroundColor: 'transparent',
              }}
            >
              <CardContent 
                className="p-6" 
                sx={{
                    // backgroundColor: 'grey'
                }}>
                <Box className="flex items-center mb-4">
                  <Avatar 
                    sx={{ 
                      width: 48, 
                      height: 48,
                      mr: 2, 
                      backgroundColor: 'white'
                    }}
                  >
                    {section.icon}
                  </Avatar>
                  <Typography 
                    variant="h4" 
                    className={`text-lg font-semibold text-white ${eczarLight.className}`}
                  >
                    {section.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="h6" 
                  className={`text-white px-16 ${eczarLight.className}`}
                >
                  {section.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    );
  }
}

export default SectionedContent;