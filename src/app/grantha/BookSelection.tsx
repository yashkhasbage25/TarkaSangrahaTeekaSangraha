'use client';  
import React, { Component } from 'react';  
import Link from 'next/link';  
import { FaBookReader } from 'react-icons/fa';  
import { Quicksand, Eczar } from 'next/font/google';  
import { Typography, Box, Button, Checkbox, FormControlLabel } from '@mui/material';  
import { BookDisplay, BookSelectionProps, BookSelectionState } from './interfaces';  
  
const quicksand = Quicksand({ subsets: ['latin'] });  
const eczar = Eczar({  
    weight: "400",  
    subsets: ["devanagari"],  
    preload: true,  
});  
  
export class BookSelection extends Component<BookSelectionProps, BookSelectionState> {  
    private allBooks: BookDisplay[];  
  
    constructor(props: BookSelectionProps) {  
        super(props);  
        this.allBooks = [  
            { title: 'तर्कसङ्ग्रहः', author: 'अन्नम्भट्ट', indent: 'ml-2' },  
            { title: 'न्यायबोधिनी', author: 'गोवर्धनसुधीः', indent: 'ml-6' },  
            { title: 'तर्कसङ्ग्रहदीपिका', author: 'अन्नम्भट्ट', indent: 'ml-6' },  
            { title: 'तर्कसङ्ग्रहसर्वस्वम्', author: 'कुरुगण्टि श्रीरामशास्त्री', indent: 'ml-6' },
            { title: 'आलोकः', author: 'म. म. श्री के. ऐस्. वरदाचार', indent: 'ml-6' },
        ];  
        this.state = {  
            selectedBooks: ['तर्कसङ्ग्रहः'],  
        };  
    }  
  
    handleSelectBook = (bookTitle: string) => {  
        const { selectedBooks } = this.state;  
        if (selectedBooks.includes(bookTitle)) {  
            this.setState({  
                selectedBooks: selectedBooks.filter(id => id !== bookTitle),  
            });  
        } else {  
            this.setState({  
                selectedBooks: [...selectedBooks, bookTitle],  
            });  
        }  
    };  
  
    render() {  
        return (  
            <Box className="flex flex-col items-center space-y-6">  
                {/* Interactive Learning Box */}  
                <Box className="w-full bg-transparent border rounded-md border-gray-300 p-4 space-y-4">  
                    <Typography variant="h5" className={`font-bold ${quicksand.className}`}>  
                        Interactive Learning  
                        <br />  
                    </Typography>  
                    <Typography variant="body1" className={`mb-4 ${quicksand.className}`}>  
                        Explore the world of TarkaSangraha with our interactive learning platform.  
                        We provide a variety of interactive ways to learn TarkaSangraha.  
                    </Typography>  
                    <Box className="text-center py-4">  
                        <Button  
                            component={Link}  
                            variant="outlined"  
                            href="/interactive-tarkasangraha"  
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"  
                            startIcon={<FaBookReader />}  
                        >  
                            <Typography className={`font-bold ${quicksand.className}`}>  
                                Start Learning  
                            </Typography>  
                        </Button>  
                    </Box>  
                </Box>  
  
                {/* Read Books Box */}  
                <Box className="w-full bg-transparent border rounded-md border-gray-300">  
                    <Box className="py-4 px-6">  
                        <Typography variant="h5" className={`font-bold mb-4 ${quicksand.className}`}>  
                            Select Books to Read  
                        </Typography>  
                        <Box component="ul" className="space-y-2 m-2">  
                            {this.allBooks.map(book => (  
                                <Box component="li" key={book.title} className={`flex items-center space-x-2 ${book.indent}`}>  
                                    <FormControlLabel  
                                        control={  
                                            <Checkbox  
                                                checked={this.state.selectedBooks.includes(book.title)}  
                                                onChange={() => this.handleSelectBook(book.title)}  
                                                sx={{  
                                                    color: 'white',  
                                                    '&.Mui-checked': {  
                                                        color: 'white',  
                                                    },  
                                                }}  
                                            />  
                                        }  
                                        label={<div className={`${eczar.className} text-2xl`}>{book.title}</div>}  
                                    />  
                                </Box>  
                            ))}  
                        </Box>  
                    </Box>  
                    <Box className="text-center py-4">  
                        <Button  
                            variant="outlined"  
                            onClick={() => this.props.setSelectedBooks(this.state.selectedBooks)}  
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"  
                            disabled={this.state.selectedBooks.length === 0}  
                            startIcon={<FaBookReader />}  
                        >  
                            Read  
                        </Button>  
                    </Box>  
                </Box>  
            </Box>  
        );  
    }  
}  