'use client';  
import React, { Component, createRef } from 'react';  
import { BooksLayoutProps, BookSection, Book, BooksLayoutState } from './interfaces';  
import { Box, Typography, Paper, IconButton } from '@mui/material';  
import { Eczar } from 'next/font/google';  
import MenuIcon from '@mui/icons-material/Menu';  
import CloseIcon from '@mui/icons-material/Close';  
  
const eczarBold = Eczar({ weight: "700", subsets: ["devanagari"] });  
const eczarLight = Eczar({ weight: "400", subsets: ["devanagari"] });  
  
// Make Box keys more reliable by encoding  
function makeSectionKey(bookTitle: string, title: string, sectionId: string | undefined) {  
  return `${bookTitle || ''}|${title || ''}|${sectionId || ''}`;  
}  
  
export class BooksLayout extends Component<BooksLayoutProps, BooksLayoutState> {  
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};  
  alignedSections: { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[];  
  scrollDone: boolean = false;  
  
  constructor(props: BooksLayoutProps) {  
    super(props);  
    this.alignedSections = this.alignSections(props.books);  
    this.state = {  
      isPaneOpen: false,  
      isMobile: typeof window !== 'undefined' ? window.innerWidth < 600 : false,  
    };  
  }  
  
  alignSections = (books: Book[]): { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[] => {  
    if (!books || books.length === 0) return [];  
    const baseText = books[0];  
    const commentaries = books.slice(1);  
    if (!baseText || !Array.isArray(baseText)) throw new Error('Base text is not properly initialized.');  
    const alignedSections = baseText.map(baseSection => ({  
      base: baseSection,  
      commentaries: commentaries.flatMap((commentary, i) =>  
        commentary.filter(c => c.tarkasangraha_sectionId === baseSection.sectionId).map(c => ({  
          commentary: c, bookTitle: this.props.selectedBooks[i + 1]  
        }))  
      )  
    }));  
  
    // Prepare refs keyed by (book, title, sectionId)  
    alignedSections.forEach(section => {  
      const bk1 = this.props.selectedBooks[0];  
      const key = makeSectionKey(bk1, section.base.title, section.base.sectionId);  
      this.sectionRefs[key] = createRef<HTMLDivElement>();  
      section.commentaries.forEach(({ commentary, bookTitle }) => {  
        const key = makeSectionKey(bookTitle, commentary.title, commentary.sectionId);  
        this.sectionRefs[key] = createRef<HTMLDivElement>();  
      });  
    });  
    return alignedSections;  
  };  
  
  handleResize = () => {  
    this.setState({ isMobile: window.innerWidth < 768 });  
  };  
  
  componentDidMount() {  
    window.addEventListener('resize', this.handleResize);  
    this.scrollToDeeplinkSection();  
  }  
  
  componentWillUnmount() {  
    window.removeEventListener('resize', this.handleResize);  
  }  
  
  componentDidUpdate(prevProps: BooksLayoutProps, prevState: BooksLayoutState) {  
    // If books loaded OR deeplink changes, try scrolling  
    if (  
      (prevProps.books !== this.props.books)  
      || (prevProps.deeplink?.sectiontitle !== this.props.deeplink?.sectiontitle)  
      || (prevProps.deeplink?.sectionid !== this.props.deeplink?.sectionid)  
    ) {  
      this.scrollToDeeplinkSection();  
    }  
  }  
  
  scrollToDeeplinkSection = () => {  
    const { deeplink, selectedBooks } = this.props;  
    if (!deeplink) return;  
  
    // Try sectiontitle first  
    if (deeplink.sectiontitle) {  
      for (const section of this.alignedSections) {  
        // Base  
        let key = makeSectionKey(selectedBooks[0], section.base.title, section.base.sectionId);  
        if (section.base.title === deeplink.sectiontitle && this.sectionRefs[key]?.current) {  
          // Option 1: optional chaining and runtime check  
          if (this.sectionRefs[key]?.current) {
            console.log('Base section found (94):', key);
          } else {
            console.log('Base section found (96):', key);
          }
          this.sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });  
          return;  
        }  
        // Commentaries  
        for (const { commentary, bookTitle } of section.commentaries) {  
          key = makeSectionKey(bookTitle, commentary.title, commentary.sectionId);  
          if (commentary.title === deeplink.sectiontitle && this.sectionRefs[key]?.current) {  
            if (this.sectionRefs[key]?.current) {
              console.log('Base section found (106):', key);
            } else {
              console.log('Base section found (108):', key);
            }
            this.sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });  
            return;  
          }  
        }  
      }  
    }  
    // Fallback to sectionid  
    if (deeplink.sectionid) {  
      for (const section of this.alignedSections) {  
        // Base  
        let key = makeSectionKey(selectedBooks[0], section.base.title, section.base.sectionId);  
        if (section.base.sectionId === deeplink.sectionid.toString() && this.sectionRefs[key]?.current) {
          if (this.sectionRefs[key]?.current) {
            console.log('Base section found (123):', key);
          } else {
            console.log('Base section found (125):', key);
          }  
          this.sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });  
          return;  
        }  
        // Commentaries  
        for (const { commentary, bookTitle } of section.commentaries) {  
          key = makeSectionKey(bookTitle, commentary.title, commentary.sectionId);  
          if (commentary.sectionId === deeplink.sectionid.toString() && this.sectionRefs[key]?.current) {  
            if (this.sectionRefs[key]?.current) {
              console.log('Base section found (135):', key);
            } else {
              console.log('Base section found (137):', key);
            }
            this.sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });  
            return;  
          }  
        }  
      }  
    }  
  };  
  
  handleScrollToSection = (bookTitle: string, title: string, sectionId: string | undefined) => {  
    const key = makeSectionKey(bookTitle, title, sectionId);  
    // Option 1: Check existence before scroll  
    if (this.sectionRefs[key]?.current) {  
      if (this.sectionRefs[key]?.current) {
        console.log('Base section found (152):', key);
      } else {
        console.log('Base section found (154):', key);
      }
      this.sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });  
    }  
    // Update the URL  
    const qp = new URLSearchParams(window.location.search);  
    if (bookTitle) qp.set('book', bookTitle);  
    if (title) qp.set('sectiontitle', title);  
    if (sectionId) qp.set('sectionid', sectionId);  
    const newurl = `${window.location.pathname}?${qp.toString()}`;  
    window.history.replaceState({}, '', newurl);  
  };  
  
  togglePane = () => {  
    this.setState({ isPaneOpen: !this.state.isPaneOpen });  
  };  
  
  render() {  
    const { selectedBooks } = this.props;  
    // Build section list for the TOC  
    type SectItem = { display: string, bookTitle: string, title: string, sectionId: string | undefined }  
    const sectionItems: SectItem[] = this.alignedSections.flatMap(section =>  
      [  
        { display: section.base.title, bookTitle: selectedBooks[0], title: section.base.title, sectionId: section.base.sectionId },  
        ...section.commentaries.map(({ commentary, bookTitle }) => ({  
          display: `${bookTitle} - ${commentary.title}`,  
          bookTitle,  
          title: commentary.title,  
          sectionId: commentary.sectionId  
        }))  
      ]  
    );  
    const { isPaneOpen, isMobile } = this.state;  
  
    return (  
      <Box className="flex bg-transparent" sx={{ whiteSpace: 'pre-line' }}>  
        {/* Main Content */}  
        <Box className="flex-grow flex flex-col items-center justify-center text-gray-800 text-lg p-4">  
          <Box className="mb-6 text-center">  
            {selectedBooks.map(bookTitle => (  
              <Box key={bookTitle} className={`${eczarBold.className} text-white text-4xl p-2`}>  
                ॥ {bookTitle} ॥  
              </Box>  
            ))}  
          </Box>  
          <Box className="space-y-6">  
            {this.alignedSections.map((section, index) => (  
              <Paper key={index} variant="outlined" elevation={3} className="p-6 rounded max-w-[600]">  
                <Box  
                  ref={this.sectionRefs[makeSectionKey(selectedBooks[0], section.base.title, section.base.sectionId)]}  
                  className="flex flex-col items-center justify-center"  
                >  
                  <Box className={`${eczarBold.className} text-2xl`}>  
                    {section.base.title}  
                  </Box>  
                  <Box className={`${eczarLight.className} p-4`} style={{ wordBreak: 'break-word', hyphens: 'auto' }}>  
                    {section.base.content}  
                  </Box>  
                </Box>  
                {section.commentaries.map(({ commentary, bookTitle }, comIndex) => (  
                  <Box  
                    key={comIndex}  
                    ref={this.sectionRefs[makeSectionKey(bookTitle, commentary.title, commentary.sectionId)]}  
                    className="mb-4 p-4 border-l-2 border-gray-300"  
                  >  
                    <Box className={`${eczarBold.className} mb-2`}>  
                      {bookTitle} - {commentary.title}  
                    </Box>  
                    <Box className={`${eczarLight.className}`} style={{ wordBreak: 'break-word', hyphens: 'auto' }}>  
                      {commentary.content}  
                    </Box>  
                  </Box>  
                ))}  
              </Paper>  
            ))}  
          </Box>  
        </Box>  
        {/* Sidebar */}  
        {isMobile ? (  
          <React.Fragment>  
            <IconButton  
              onClick={this.togglePane}  
              className="fixed left-4 top-24 z-50 bg-white rounded shadow"  
            >  
              {isPaneOpen ? <CloseIcon /> : <MenuIcon />}  
            </IconButton>  
            <Box  
              className={`bg-gray-200 rounded-lg text-left fixed top-24 left-2 transition-transform  
        w-64 max-h-[90vh] shadow-lg  
        ${isPaneOpen ? 'transform-none' : 'transform translate-x-full'}  
      `}  
            >  
              {isPaneOpen && (  
                <React.Fragment>  
                  <Box  
                    component="ul"  
                    className="space-y-2 pl-2 overflow-y-auto max-h-[80vh] pr-2"  
                  >  
                    {sectionItems.map((item, idx) => (  
                      <Box  
                        component="li"  
                        key={makeSectionKey(item.bookTitle, item.title, item.sectionId)}  
                        className="text-gray-700 cursor-pointer hover:text-blue-600"  
                        onClick={() =>  
                          this.handleScrollToSection(item.bookTitle, item.title, item.sectionId)  
                        }  
                      >  
                        {item.display}  
                      </Box>  
                    ))}  
                  </Box>  
                </React.Fragment>  
              )}  
            </Box>  
          </React.Fragment>  
        ) : (  
          <Box className="w-64 bg-gray-200 p-4">  
            {/* <Typography variant="h6" className="mb-4">Sections</Typography>   */}
            <Box component="ul" className="space-y-2">  
              {sectionItems.map((item, idx) => (  
                <Box  
                  component="li"  
                  key={makeSectionKey(item.bookTitle, item.title, item.sectionId)}  
                  className="text-gray-700 cursor-pointer hover:text-blue-600"  
                  onClick={() =>  
                    this.handleScrollToSection(item.bookTitle, item.title, item.sectionId)  
                  }  
                >  
                  {item.display}  
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