'use client';
import React, { Component } from 'react';  
import { Box, Button, Typography, Paper, List, ListItem, ListItemText, Stack } from '@mui/material';  
import Padartha from './components/Padartha';  
import Dravya from './components/Dravya';  
import Guna from './components/Guna';  
import Karma from './components/Karma';  
import Samanya from './components/Samanya';  
import Vishesha from './components/Vishesha';  
import Samavaya from './components/Samavaya';  
import Abhava from './components/Abhava';  
import Prithvi from './components/Prithvi';
import Unknown from './components/Unknown';
import { NavigationPaths } from './components/Navigations';  
import { Devanagari } from './components/Devanagari';
import { Eczar, Martel, Nanum_Myeongjo } from "next/font/google";
const eczarLight = Eczar({ weight: "400", subsets: ["devanagari"] });
const martel = Martel({ weight: "400", subsets: ["devanagari"] });
const nanumMyeongjo = Nanum_Myeongjo({ weight: "400", subsets: ["latin"] });

const componentMap = {  
  Padartha: Padartha,  
  Dravya: Dravya,  
  Guna: Guna,  
  Karma: Karma,  
  Samanya: Samanya,  
  Vishesha: Vishesha,  
  Samavaya: Samavaya,  
  Abhava: Abhava,  
  Prithvi: Prithvi,
};  
  
class MainCanvas extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      currentComponent: NavigationPaths.PADARTHA,  
      stack: [],  
    };  
    this.handleShapeClick = this.handleShapeClick.bind(this);  
    this.handleGoBack = this.handleGoBack.bind(this);  
  }  
  
  handleShapeClick(nextComponent) {  
    this.setState((prevState) => ({  
      stack: [...prevState.stack, prevState.currentComponent],  
      currentComponent: nextComponent,  
    }));  
  }  
  
  handleGoBack() {  
    this.setState((prevState) => {  
      const newStack = [...prevState.stack];  
      const previousComponent = newStack.pop();  
  
      return {  
        stack: newStack,  
        currentComponent: previousComponent || NavigationPaths.PADARTHA, // Default to 'Padartha' if stack is empty  
      };  
    });  
  }  
  
  render() {  
    const { currentComponent, stack } = this.state;  
    // const stackTopTitle = Devanagari[currentComponent]?.eka || '???'; // Get the title from Devanagari object
    const CurrentComponent = componentMap[currentComponent] || Unknown; // Get the component from the map

    return (
      <Box display="flex" className={`${nanumMyeongjo.className} text-white`}>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" margin={2} borderRadius={2}>
          <CurrentComponent onShapeClick={this.handleShapeClick} />
        </Box>
        <Paper  
          elevation={3}
          style={{  
            position: 'fixed',  
            right: 0,  
            top: 90,
            width: '160px',  
            padding: '1rem',  
            margin: '1rem',  
            borderRadius: '1rem',  
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            color: 'white',  
            height: 'auto',  
            maxHeight: '80vh', // Optional: to prevent the Paper from taking too much vertical space  
            overflowY: 'auto', // Optional: to add a scrollbar if content overflows  
          }}  
        >  
          <Typography className={eczarLight.className} variant="h5" align="center" gutterBottom>  
            { Devanagari.NavigationStackHeader.eka } 
          </Typography>  

          <Stack spacing={1} className={`${martel.className}`}>
            {stack.map((component, index) => (
              <Button  
                key={index}
                className={`${martel.className}`}
                // variant="outlined"
                color="primary"
                disabled
                fullWidth
                style={{ color: 'white', fontSize: '1.2rem' }}
              >
                {Devanagari[component]?.eka || '???'} {/* Get the title from Devanagari object */}
              </Button>
            ))}
          </Stack>
          <Button className={nanumMyeongjo.className} variant="outlined" color="primary" fullWidth onClick={this.handleGoBack} style={{ marginTop: '1rem', color: 'white', borderColor: 'white' }}>  
            Go Back  
          </Button>  
        </Paper>  
      </Box>  
    );  
  }  
}  
  
export default MainCanvas;  