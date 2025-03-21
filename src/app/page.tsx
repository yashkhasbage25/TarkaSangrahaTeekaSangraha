import Image from "next/image";  
  
export default function Home() {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">  
      <Image  
        height={300}  
        width={300}  
        src="/ganesha_in_gold.png"  
        alt="Lord Ganesha"  
        className="rounded-full shadow-lg"
      />  
      <h1 className="text-3xl font-bold text-center">  
        वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। <br></br>  
        निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥  
      </h1>  
      <h2 className="text-2xl font-bold text-center">  
        ॥ नमः कणादगौतमवात्स्यायनादिभ्यो न्यायशास्त्र सम्प्रदाय कर्तृभ्यो वंशऋषिभ्यः परमर्षिभ्यो महद्भ्यो मुनिभ्यो गुरुभ्यः॥  
      </h2>  
    </div>  
  );  
}  