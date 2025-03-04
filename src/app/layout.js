"use client";  
  
import './globals.css';  
import Navbar from '../components/Navbar';  
  
export default function RootLayout({ children }) {  
    return (  
        <html lang="en">  
            <head>  
                <title>तर्कसङ्ग्रहः</title>  
                <meta charSet="utf-8" />  
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />  
                <style>  
                    {`@import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400..800&family=Halant:wght@300;400;500;600;700&family=Laila:wght@300;400;500;600;700&family=Martel:wght@200;300;400;600;700;800;900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Yatra+One&display=swap');`}  
                </style>  
            </head>  
            <body style={{ backgroundColor: '#272727', color: '#ffffff'}}>  
                <Navbar />   
                { children }
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>  
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>  
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>  
            </body>  
        </html>  
    );  
}  