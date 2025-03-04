import Navbar from '../components/Navbar';  
  
export default function Home() {  
    return (  
        <div>  
            <Navbar />  
            <div className="container mt-5 pt-5">  
                <center>  
                    <div className="yatra-one-regular fancy-heading">  
                        ॥ श्रीसिद्धिबुद्धिसहितश्रीमद्गणाधिपतये नमः ॥  
                        <br />  
                        Tarka Sangraha  
                        <br />  
                        Sharing the text as I learn it.  
                        <br />  
                    </div>  
                    <img  
                        src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ganesha_on_Gopuram_in_the_Meenakshi_Temple_at_Madurai.jpg"  
                        className="fancy-image-border"  
                    />  
                </center>  
                <center className="mt-5">
                <i>Contact: Yash Khasbage, yashkhasbage25@gmail.com</i>
                </center>
            </div>  
        </div>  
    );  
}  