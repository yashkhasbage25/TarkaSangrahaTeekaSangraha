import fs from 'fs';  
import path from 'path';  
import { JSDOM } from 'jsdom';  
import Navbar from '../../components/Navbar';  
  
// Function to get HTML content from the static file  
async function getHtmlContent(pariccheda) {  
    const filePath = path.join(process.cwd(), 'public', `${pariccheda}.html`);  
    const html = fs.readFileSync(filePath, 'utf-8');  
  
    const dom = new JSDOM(html);  
    const document = dom.window.document;  
  
    // Extract the main content section you are interested in  
    const mainContent = document.querySelector('.main-content');  
  
    return mainContent ? mainContent.innerHTML : '';  
}  
  
// Dynamic route component  
export default async function Pariccheda({ params }) {  
    const { pariccheda } = params;  
    const content = await getHtmlContent(pariccheda);  
  
    return (  
        <>  
            <Navbar />  
            <div className="main-content mt-5 pt-5" dangerouslySetInnerHTML={{ __html: content }} />  
        </>  
    );  
}  
  
// Generate static params for dynamic routes  
export async function generateStaticParams() {  
    const paricchedas = ['pratyaksha', 'anumana', 'upamana', 'shabda'];  
    return paricchedas.map((pariccheda) => ({ params: { pariccheda } }));  
}  