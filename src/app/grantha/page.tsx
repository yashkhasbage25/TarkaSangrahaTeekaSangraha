'use client';  
  
import React, { Component } from 'react';  
import { BookSelection } from './BookSelection';  
import { GranthaPageProps, GranthaPageState, Book, DeeplinkParams } from './interfaces';  
import { BooksLayout } from './BooksLayout';  
import { CircularProgress, Button, Box } from '@mui/material';  
import { FaUndo } from 'react-icons/fa';  
  
// Helper for query parameter parsing  
function parseQueryParams(): DeeplinkParams {  
  if (typeof window === 'undefined') return {};  
  const params = new URLSearchParams(window.location.search);  
  return {  
    book: params.get('book') || undefined,  
    sectiontitle: params.get('sectiontitle') || undefined,  
    sectionid: parseInt(params.get('sectionid') || "0") || 0,  
  };  
}  
  
class GranthaPage extends Component<GranthaPageProps, GranthaPageState> {  
  constructor(props: GranthaPageProps) {  
    super(props);  
    this.state = {  
      loadingContent: false,  
      selectedBooks: [],       // Book title(s) in devanagari  
      books: [],  
      deeplink: {},  
      pageInit: false,  
    };  
  }  
  
  componentDidMount() {  
    // Only run in browser  
    const deeplink = parseQueryParams();  
    let selectedBooks: string[];  
  
    // Default book fallback if needed  
    if (deeplink.book) {  
      // Use the query param directly (should be devanagari name for BookSelection, not romanized)  
      selectedBooks = [deeplink.book];  
    } else {  
      // selectedBooks = ['तर्कसङ्ग्रहः'];  
      selectedBooks = [];
    }  
    // Set state and fetch  
    this.setState(  
      { selectedBooks, deeplink, pageInit: true },  
      () => this.handleFetchBooks()  
    );  
  }  
  
  setSelectedBooks = (selectedBooks: string[]) => {  
    // When user clicks, reset deeplink and update URL  
    const qp = new URLSearchParams(window.location.search);  
    if (selectedBooks.length > 0) {  
      qp.set('book', selectedBooks[0]);  
    } else {  
      qp.delete('book');  
    }  
    qp.delete('sectiontitle');  
    qp.delete('sectionid');  
    window.history.replaceState({}, '', `${window.location.pathname}?${qp.toString()}`);  
  
    this.setState(  
      { selectedBooks, deeplink: {} },  
      () => this.handleFetchBooks()  
    );  
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
  
  tailwindSpinner = (): React.ReactNode => (  
    <Box className="text-center pt-16">  
      <CircularProgress />  
      <span className="sr-only">Loading...</span>  
    </Box>  
  );  
  
  checkShowBookSelection = () => this.state.selectedBooks.length === 0;  
  checkShowSpinner = () => this.state.selectedBooks.length > 0 && this.state.loadingContent;  
  checkRenderContent = () => this.state.selectedBooks.length > 0 && !this.state.loadingContent;  
  
  render() {  
    // Wait to mount before rendering BookSelection, so URL is available  
    if (!this.state.pageInit) return null;  
  
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
            <BooksLayout  
              selectedBooks={this.state.selectedBooks}  
              books={this.state.books}  
              deeplink={this.state.deeplink}  
            />  
          </Box>  
        )}  
      </Box>  
    );  
  }  
}  
  
export default GranthaPage;  