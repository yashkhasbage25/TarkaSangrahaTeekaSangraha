'use client';  
import React, { Component } from 'react';  
import { BookSelection } from './BookSelection';  
import { GranthaPageProps, GranthaPageState, Book } from './interfaces';  
import { BooksLayout } from './BooksLayout';  
import { CircularProgress, Button, Box } from '@mui/material';  
import { FaUndo } from 'react-icons/fa'; 

class GranthaPage extends Component<GranthaPageProps, GranthaPageState> {  
  constructor(props: GranthaPageProps) {  
    super(props);  
    this.state = {  
      loadingContent: false,  
      selectedBooks: [],  
      books: [],  
    };  
  }  
  
  setSelectedBooks = (selectedBooks: string[]) => {  
    this.setState({ selectedBooks }, () => this.handleFetchBooks());  
  };  
  
  handleSelectBook = async (bookTitles: string[]) => {  
    const romanizedBookTitles = bookTitles.map((bookTitle) => {  
      switch (bookTitle) {  
        case 'तर्कसङ्ग्रहः':  
          return 'tarkasangraha';  
        case 'न्यायबोधिनी':  
          return 'nyayabodhini_mapping';  
        case 'तर्कसङ्ग्रहदीपिका':  
          return 'tarkasangrahadeepika_mapping';  
        default:  
          throw new Error('Book title not recognized');  
      }  
    });  
  
    const books: Book[] = [];  
    for (const bookTitle of romanizedBookTitles) {  
      const response = await fetch(`https://raw.githubusercontent.com/yashkhasbage25/TarkaSangrahaTeekaSangraha/refs/heads/main/nyayarepo/json_data/${bookTitle}.json`);  
      // const response = await fetch(`http://localhost:8000/${bookTitle}.json`);
      const data = await response.json();  
      books.push(data);  
    }  
  
    this.setState({  
      loadingContent: false,  
      books: books,  
    });  
  };  
  
  handleFetchBooks = async () => {  
    this.setState(  
      { loadingContent: true },  
      () => this.handleSelectBook(this.state.selectedBooks)  
    );  
  };  
  
  tailwindSpinner = (): React.ReactNode => {  
    return (  
      <Box className="text-center pt-16">  
        <CircularProgress />  
        <span className="sr-only">Loading...</span>  
      </Box>  
    );  
  };  
  
  checkShowBookSelection = () => {  
    return this.state.selectedBooks.length === 0;  
  };  
  
  checkShowSpinner = () => {  
    return this.state.selectedBooks.length > 0 && this.state.loadingContent;  
  };  
  
  checkRenderContent = () => { 
    return this.state.selectedBooks.length > 0 && !this.state.loadingContent;  
  };  
  
  render() {  
    return (  
      <Box className="w-full bg-transparent">  
        {this.checkShowBookSelection() && (  
          <BookSelection setSelectedBooks={this.setSelectedBooks} />  
        )}  
        {this.checkShowSpinner() && this.tailwindSpinner()}  
        {this.checkRenderContent() && (  
          <Box className="w-full bg-[#1f0324]">
            <Box className="flex justify-end p-4">  
            <Button  
              variant="outlined"  
              color="primary"  
              onClick={() => this.setState({ selectedBooks: [] })}  
            >  
              <FaUndo className="mr-2" />
              Reset Book Selection  
            </Button>  
          </Box>  
          <BooksLayout selectedBooks={this.state.selectedBooks} books={this.state.books} />  
          </Box>
        )}  
      </Box>  
    );  
  }  
}  
  
export default GranthaPage;  