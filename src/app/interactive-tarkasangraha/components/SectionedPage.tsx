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
                      mr: 2 
                    }}
                  >
                    {section.icon}
                  </Avatar>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    className="font-semibold text-white"
                  >
                    {section.title}
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  className="text-white leading-relaxed"
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