import React, { Component } from 'react';  
import { BookDisplay, BookSelectionProps, BookSelectionState } from './interfaces';  
import Link from 'next/link'; // Import Link for navigation
import { FaBookReader } from 'react-icons/fa'; // Import the read icon  
import clsx from 'clsx'; // Import clsx for conditional class names

export class BookSelection extends Component<BookSelectionProps, BookSelectionState> {  
  private allBooks: BookDisplay[];  
  
  constructor(props: BookSelectionProps) {  
    super(props);  
    this.allBooks = [  
      { title: 'तर्कसङ्ग्रहः', author: 'अन्नम्भट्ट', indent: 'ml-2' },  
      { title: 'न्यायबोधिनी', author: 'गोवर्धनसुधीः', indent: 'ml-6' },  
      // { title: 'आलोकः', author: 'वरदाचार्यः', indent: 'ml-6' },  
      // { title: 'तर्कसङ्ग्रहसर्वस्वम्', author: 'कुरुगण्टि श्रीरामशास्त्री', indent: 'ml-6' },  
      { title: 'तर्कसङ्ग्रहदीपिका', author: 'अन्नम्भट्ट', indent: 'ml-6' },  
    ];  
    this.state = {  
      selectedBooks: [
        'तर्कसङ्ग्रहः'
      ]  
    };  
  }  
  
  handleSelectBook = (bookTitle: string) => {  
    const { selectedBooks } = this.state;  
    if (selectedBooks.includes(bookTitle)) {  
      this.setState({  
        selectedBooks: selectedBooks.filter(id => id !== bookTitle)  
      });  
    } else {  
      this.setState({  
        selectedBooks: [...selectedBooks, bookTitle]  
      });  
    }  
  };  
  
  render() {  
    return (  
      <div className="p-4">  
        {/* attractive banner that says 'Try TarkaSangraha Interactive' */}
        <div className="bg-blue-100 p-2 rounded-lg mb-4">  
          <Link className="text-lg italic text-blue-800 pl-4 underline" href="/interactive-tarkasangraha">Try TarkaSangraha Interactive!!</Link>  
        </div>
        <h1 className="text-xl font-bold mb-4">Select Books to Read</h1>  
        <ul className="space-y-2">  
          {this.allBooks.map(book => (  
            <li key={book.title} className={`flex items-center space-x-2 ${book.indent}` }> {/* Add margin-left for indentation */}  
              <input  
                type="checkbox"  
                checked={this.state.selectedBooks.includes(book.title)}  
                onChange={() => this.handleSelectBook(book.title)}  
                className="text-blue-600 focus:ring-blue-500" // Make checkbox blue  
              />  
              <span className="text-lg">{book.title}</span>  
            </li>  
          ))}  
        </ul>  
        <button  
          onClick={() => this.props.setSelectedBooks(this.state.selectedBooks)}  
          className={clsx(  
            "mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center space-x-2",  
            { 'opacity-50 cursor-not-allowed': this.state.selectedBooks.length === 0 } // Apply styles conditionally  
          )}  
          disabled={this.state.selectedBooks.length === 0} // Disable button if no books are selected  
        >  
          <FaBookReader /> {/* Add read icon */}  
          <span>Read</span>  
        </button>  
      </div>  
    );  
  }  
}  