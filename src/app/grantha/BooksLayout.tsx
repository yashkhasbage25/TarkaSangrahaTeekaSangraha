import React, { Component, createRef } from 'react';  
import { BooksLayoutProps, BookSection, Book, BooksLayoutState } from './interfaces';  
import { Box, Typography, Paper, IconButton } from '@mui/material';  
import { Eczar, Quicksand } from 'next/font/google';  
import MenuIcon from '@mui/icons-material/Menu';  
import CloseIcon from '@mui/icons-material/Close';  
  
const eczar = Eczar({ weight: "400", subsets: ["devanagari"] });  
const quicksand = Quicksand({ weight: "400", subsets: ['latin'] });  
  
export class BooksLayout extends Component<BooksLayoutProps, BooksLayoutState> {  
  constructor(props: BooksLayoutProps) {  
    super(props);  
    this.sectionRefs = {};  
    this.alignedSections = this.alignSections(props.books);  
    this.state = {  
      isPaneOpen: false,  
      isMobile: window.innerWidth < 900,  
    };  
  }  
  
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};  
  alignedSections: { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[];  
  
  alignSections = (books: Book[]): { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[] => {  
    if (!books || books.length === 0) {  
      return [];  
    }  
  
    const baseText = books[0];  
    const commentaries = books.slice(1);  
  
    if (!baseText || !Array.isArray(baseText)) {  
      throw new Error('Base text is not properly initialized.');  
    }  
  
    const alignedSections: { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[] = baseText.map(baseSection => ({  
      base: baseSection,  
      commentaries: commentaries.flatMap((commentary, i) =>  
        commentary.filter(c => c.tarkasangraha_sectionId === baseSection.sectionId).map(c => ({ commentary: c, bookTitle: this.props.selectedBooks[i + 1] }))  
      )  
    }));  
  
    alignedSections.forEach(section => {  
      this.sectionRefs[section.base.title] = createRef<HTMLDivElement>();  
      section.commentaries.forEach(({ commentary, bookTitle }) => {  
        this.sectionRefs[`${bookTitle} - ${commentary.title}`] = createRef<HTMLDivElement>();  
      });  
    });  
  
    return alignedSections;  
  };  
  
  handleScrollToSection = (title: string) => {  
    const ref = this.sectionRefs[title];  
    if (ref?.current) {  
      ref.current.scrollIntoView({  
        behavior: 'smooth',  
        block: 'start',  
      });  
    }  
  };  
  
  togglePane = () => {  
    this.setState({ isPaneOpen: !this.state.isPaneOpen });  
  };  
  
  handleResize = () => {  
    this.setState({ isMobile: window.innerWidth < 768 });  
  };  
  
  componentDidMount() {  
    window.addEventListener('resize', this.handleResize);  
  }  
  
  componentWillUnmount() {  
    window.removeEventListener('resize', this.handleResize);  
  }  
  
  render() {  
    const { selectedBooks } = this.props;  
    const sectionTitles = this.alignedSections.flatMap(section => [  
      section.base.title,  
      ...section.commentaries.map(({ commentary, bookTitle }) => `${bookTitle} - ${commentary.title}`)  
    ]);  
    const { isPaneOpen, isMobile } = this.state;  
  
    return (  
      <Box className="flex bg-transparent ">  
        {/* Main Content */}  
        <Box className="flex-grow flex flex-col items-center justify-center text-lg text-gray-800 p-4">  
          <Box className="mb-6 text-center">  
            {selectedBooks.map(bookTitle => (  
              <Typography key={bookTitle} variant="h4" className={`text-white font-bold ${eczar.className}`}>  
                ॥ {bookTitle} ॥  
              </Typography>  
            ))}  
          </Box>  
          <Box className="space-y-6">  
            {this.alignedSections.map((section, index) => (  
              <Paper key={index} elevation={3} className="p-6 rounded max-w-[600] shadow-md">  
                <Box ref={this.sectionRefs[section.base.title]} className="flex flex-col items-center justify-center">  
                  <Typography variant="h6" className={`text-xl font-semibold ${eczar.className}`}>  
                    {section.base.title}  
                  </Typography>  
                  <Typography variant="body1" className={`text-lg ${eczar.className} break-all hyphens-auto`}>  
                    {section.base.content}  
                  </Typography>  
                  {/* {section.base.translation && (  
                    <Typography variant="body2" className={`text-md italic ${quicksand.className}`}>  
                      {section.base.translation}  
                    </Typography>  
                  )}   */}
                </Box>  
                {section.commentaries.map(({ commentary, bookTitle }, comIndex) => (  
                  <Box key={comIndex} ref={this.sectionRefs[`${bookTitle} - ${commentary.title}`]} className="mb-4 pl-4 border-l-2 border-gray-300">  
                    <Typography className={`text-lg font-semibold ${eczar.className}`}>  
                      {bookTitle} - {commentary.title}  
                    </Typography>  
                    <Typography variant="body1" className={`text-md ${quicksand.className} break-all hyphens-auto`}>  
                      {commentary.content}  
                    </Typography>  
                  </Box>  
                ))}  
              </Paper>  
            ))}  
          </Box>  
        </Box>  
        {/* Right Pane */}  
        {isMobile ? (  
          <Box className={`w-64 bg-gray-200 p-4 fixed top-0 right-0 transition-transform ${isPaneOpen ? 'transform-none' : 'transform translate-x-full'}`}>  
            <IconButton onClick={this.togglePane} className="absolute top-2 left-2">  
              {isPaneOpen ? <CloseIcon /> : <MenuIcon />}  
            </IconButton>  
            {isPaneOpen && (  
              <>  
                <Typography variant="h6" className="mb-4">Sections</Typography>  
                <Box component="ul" className="space-y-2">  
                  {sectionTitles.map((title, index) => (  
                    <Box  
                      component="li"  
                      key={index}  
                      className="text-gray-700 cursor-pointer hover:text-blue-600"  
                      onClick={() => this.handleScrollToSection(title)}  
                    >  
                      {title}  
                    </Box>  
                  ))}  
                </Box>  
              </>  
            )}  
          </Box>  
        ) : (  
          <Box className="w-64 bg-gray-200 p-4">  
            <Typography variant="h6" className="mb-4">Sections</Typography>  
            <Box component="ul" className="space-y-2">  
              {sectionTitles.map((title, index) => (  
                <Box  
                  component="li"  
                  key={index}  
                  className="text-gray-700 cursor-pointer hover:text-blue-600"  
                  onClick={() => this.handleScrollToSection(title)}  
                >  
                  {title}  
                </Box>  
              ))}  
            </Box>  
          </Box>  
        )}  
      </Box>  
    );  
  }  
}  
  
export default BooksLayout;  