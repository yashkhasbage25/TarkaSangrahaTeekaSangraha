import React, { Component, createRef } from 'react';  
import { BooksLayoutProps, BookSection, Book } from './interfaces';  
  
export class BooksLayout extends Component<BooksLayoutProps> {  
  constructor(props: BooksLayoutProps) {  
    super(props);  
    this.sectionRefs = {};  
    this.alignedSections = this.alignSections(props.books);  
  }  
  
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};  
  alignedSections: { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[];  
  
  alignSections = (books: Book[]): { base: BookSection; commentaries: { commentary: BookSection, bookTitle: string }[] }[] => {  
    if (!books || books.length === 0) {  
      return [];  
    }  
  
    // Assuming the first book is the base text (Tarkasangraha)  
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
  
  render() {  
    const { selectedBooks } = this.props;  
    const sectionTitles = this.alignedSections.flatMap(section => [  
      section.base.title,  
      ...section.commentaries.map(({ commentary, bookTitle }) => `${bookTitle} - ${commentary.title}`)  
    ]);  
  
    return (  
      <div className="flex min-h-screen hyphens-auto">  
        {/* Main Content */}  
        <div className="flex-grow flex flex-col items-center justify-center text-lg text-gray-800 p-4 bg-gray-100">  
          <div className="mb-6 text-center">  
            {selectedBooks.map(bookTitle => (  
              <span key={bookTitle} className="block">  
                {bookTitle}  
              </span>  
            ))}  
          </div>  
          <div className="space-y-6 w-full max-w-4xl">  
            {this.alignedSections.map((section, index) => (  
              <div key={index} className="bg-white p-6 rounded shadow-md">  
                <div ref={this.sectionRefs[section.base.title]} className="mb-4">  
                  <h3 className="text-lg font-semibold">{section.base.title}</h3>  
                  <p>{section.base.content}</p>  
                  {section.base.translation && <p className="italic">{section.base.translation}</p>}  
                </div>  
                {section.commentaries.map(({ commentary, bookTitle }, comIndex) => (  
                  <div key={comIndex} ref={this.sectionRefs[`${bookTitle} - ${commentary.title}`]} className="mb-4 pl-4 border-l-2 border-gray-300">  
                    <h4 className="text-md font-semibold">{bookTitle} - {commentary.title}</h4>  
                    <p>{commentary.content}</p>  
                  </div>  
                ))}  
              </div>  
            ))}  
          </div>  
        </div>  
  
        {/* Right Pane */}  
        <div className="w-64 bg-gray-200 p-4">  
          <ul className="space-y-2">  
            {sectionTitles.map((title, index) => (  
              <li  
                key={index}  
                className="text-gray-700 cursor-pointer"  
                onClick={() => this.handleScrollToSection(title)}  
              >  
                {title}  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>  
    );  
  }  
}  
  
export default BooksLayout;  