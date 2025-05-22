'use client';  
import Image from "next/image";  
import Box from "@mui/material/Box";
import { Eczar, Raleway } from "next/font/google";  
import Stack from '@mui/material/Stack';  
  
const eczar = Eczar({  
  weight: "400",  
  subsets: ["devanagari"],  
});  

const raleway = Raleway({  
  weight: "400",  
  subsets: ["latin"],  
});
  
export default function Home() {  
  return (  
    <div className="flex flex-col grow items-center justify-center w-full">  
      <Stack spacing={8} className="flex flex-col items-center justify-center py-8 px-4 w-full sm:w-4/5 md:w-4/5 max-w-screen-lg">  
        <Box className={`text-4xl text-center ${eczar.className}`}>  
          ॥ नमः कणादगौतमवात्स्यायनादिभ्यो न्यायशास्त्रसम्प्रदायकर्तृभ्यो <br />  
          वंशर्षिभ्यः परमऋषिभ्यो महद्भ्यो मुनिभ्यो गुरुभ्यः॥  
        </Box>  
        <Image  
          height={200}  
          width={200}  
          src="/ganesha_in_gold.png"  
          alt="Lord Ganesha"  
          className="rounded-full shadow-lg"  
        />  
        <Box className={`text-2xl text-center ${eczar.className}`}>  
          प्रमाणविषयी वादः पदार्थस्थापकस्तर्कः। <br />  
          स्फूर्यते भजनाद्यस्य तं गणेशं नमाम्यहम्॥ <br />  
        </Box>  
        {/* Create a box with transparent background saying 'Recent updates' */}
        <Box className={`text-md text-left ${raleway.className} w-full bg-transparent border border-gray-300 rounded-lg p-4`}>  
          Recent Updates:
          <ul className="list-disc list-inside">
            <li>The entire text of TarkaSangraha has been updated. To view this go, ग्रन्थाः -- Select Books to Read -- Select तर्कसङ्ग्रहः -- Click Read.</li>
            <li>Search capability in TarkaSamgraha text. To try this go, अन्वेषणम् -- enter keyword -- select book as Tarkasangraha -- Click Search</li>
            <li>Interactive TarkaSangraha is still work in progress. But you can always check intermediate development.</li>
          </ul>
        </Box>

      </Stack>  
      <footer className="w-full text-white py-8 px-4 mt-8">  
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center">  
          <div className="mb-4 sm:mb-0">  
            <Box className={`text-center sm:text-left ${raleway.className}`}>  
              © {new Date().getFullYear()} Tarka Sangraha. All rights reserved.  
            </Box>  
          </div>  
          <div className="flex flex-col sm:flex-row items-center">  
            <div className="mb-4 sm:mb-0 sm:mr-6">  
              <Box className="text-center sm:text-left">  
                {/* Contact: yashkhasbage25@gmail.com */}
              </Box>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </div>  
  );  
}  