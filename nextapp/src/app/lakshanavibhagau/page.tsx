import Image from "next/image";  
  
export default function IntroductionToTarkaShastra() {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">  
      <h1 className="text-3xl font-bold mb-4">तर्कशास्त्रस्य परिचयः</h1>  
      <Image  
        src="/smoky_mountain.png"  
        alt="Logo"  
        width={300}  
        height={300}  
        className="mb-4"  
      />  
      <p className="text-lg text-gray-700 max-w-2xl text-center">  
        तर्कशास्त्रं भारतीयदर्शनस्य एकं महत्वपूर्णं अंगं अस्ति। एषः शास्त्रः तर्कस्य, प्रमाणस्य, एवं तर्कसङ्ग्रहस्य अध्ययनं करोति। तर्कशास्त्रस्य उपदेशाः विवेचनाय, विवादाय, एवं ज्ञानस्य विकासाय सहायकाः सन्ति। एषः शास्त्रः न केवलं दार्शनिकानां अपि तु सर्वेषां मनुष्याणां जीवनस्य महत्वपूर्णं अंगं अस्ति।  
      </p>  
    </div>

  );  
}  