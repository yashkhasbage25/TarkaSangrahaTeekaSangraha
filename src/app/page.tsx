'use client';  
import Image from "next/image";  
import { Typography } from "@mui/material";  
import { Eczar } from "next/font/google";  
import Stack from '@mui/material/Stack';  
  
const eczar = Eczar({  
  weight: ["400", "800"],  
  subsets: ["devanagari"],  
});  
  
export default function Home() {  
  return (  
    <div className="flex flex-col grow items-center justify-center w-full">  
      <Stack spacing={8} className="flex flex-col items-center justify-center py-8 px-4 w-full sm:w-4/5 md:w-4/5 max-w-screen-lg">  
        <Typography variant="h5" className={`text text-center ${eczar.className}`}>  
          ॥ नमः कणादगौतमवात्स्यायनादिभ्यो न्यायशास्त्रसम्प्रदायकर्तृभ्यो <br />  
          वंशर्षिभ्यः परमऋषिभ्यो महद्भ्यो मुनिभ्यो गुरुभ्यः॥  
        </Typography>  
        <Image  
          height={200}  
          width={200}  
          src="/ganesha_in_gold.png"  
          alt="Lord Ganesha"  
          className="rounded-full shadow-lg"  
        />  
        <Typography variant="h4" className={`text text-center ${eczar.className}`}>  
          प्रमाणविषयी वादः पदार्थस्थापकस्तर्कः। <br />  
          स्फूर्यते भजनाद्यस्य तं गणेशं नमाम्यहम्॥ <br />  
        </Typography>  
      </Stack>  
      <footer className="w-full text-white py-8 px-4 mt-8">  
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center">  
          <div className="mb-4 sm:mb-0">  
            <Typography variant="body1" className="text-center sm:text-left">  
              © {new Date().getFullYear()} Tarka Sangraha. All rights reserved.  
            </Typography>  
          </div>  
          <div className="flex flex-col sm:flex-row items-center">  
            <div className="mb-4 sm:mb-0 sm:mr-6">  
              <Typography variant="body1" className="text-center sm:text-left">  
                {/* Contact: yashkhasbage25@gmail.com */}
              </Typography>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </div>  
  );  
}  