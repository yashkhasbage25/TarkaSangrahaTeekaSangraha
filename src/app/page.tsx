'use client';  
import Image from "next/image";  
import Box from "@mui/material/Box";
import { Eczar, Raleway, Zilla_Slab, Nanum_Myeongjo } from "next/font/google";  
import Stack from '@mui/material/Stack';  
import Link from "next/link";
  
const eczar = Eczar({  
  weight: "400",  
  subsets: ["devanagari"],  
});  

const raleway = Raleway({  
  weight: "400",  
  subsets: ["latin"],  
});

const zillaSlab = Zilla_Slab({  
  weight: "400",  
  subsets: ["latin"],  
});

const nanumMyeongjo = Nanum_Myeongjo({  
  weight: "400",  
  subsets: ["latin"],  
});
  
export default function Home() {  
  return (  
    <div className="flex flex-col grow items-center justify-center w-full text-white">  
      <Stack spacing={8} className="flex flex-col items-center justify-center py-16 px-4 w-full sm:w-4/5 md:w-4/5 max-w-screen-lg">  
        <Box className={`text-4xl text-center ${eczar.className} break-all hyphens-auto`}>  
          ॥ नमः कणादगौतमवात्स्यायनादिभ्यो न्यायशास्त्रसम्प्रदायकर्तृभ्यो <br />  
          वंशर्षिभ्यः परमऋषिभ्यो महद्भ्यो मुनिभ्यो गुरुभ्यः॥  
        </Box>  

        <Box className={`text-xl w-full text-center`}>  
          TarkaSangraha.com - A single stop solution to entire Tarkasaṇgrahaḥ.
          Read ṭīkā-s of dīpikā, nyāyabodhinī, and many more on a single website. 
        </Box>  


        <Box className={`text-2xl text-center border-t border-b border-gray-300 py-8 my-8 ${eczar.className}`}>
          <Image  
            height={200}  
            width={200}  
            src="/ganesha_in_gold.png"  
            alt="Lord Ganesha"  
            className="rounded-full shadow-lg p-4 mx-auto"  
          />    
          प्रमाणविषयी वादः पदार्थस्थापकस्तर्कः। <br />  
          स्फूर्यते भजनाद्यस्य तं गणेशं नमाम्यहम्॥ <br />  
        </Box>  

        {/* Create a box with transparent background saying 'Recent updates' */}
        <div className={`text-lg text-left w-full bg-gray-900 p-8 space-y-2 text-gray-300`}> 
          Recent Updates: 

          <ul className="list-disc list-inside space-y-4">
            <li>The entire text of TarkaSangraha has been uploaded. To view this go, ग्रन्थाः -- Select Books to Read -- Select तर्कसङ्ग्रहः -- Click Read.</li>
            <li>Similarly, Teekas of nyāyabodhinī, tarkasaṇgrahadīpikā, tarkasaṇgrahasarvasvam, and ālokaḥ have been uploaded</li>
            <li>Search capability in TarkaSangraha text. To try this go, अन्वेषणम् -- enter keyword -- select book as Tarkasangraha -- Click Search. You can also &quot;Open the section in new tab&quot;!</li>
            <li>Interactive TarkaSangraha is still work in progress. But would encourage to check the intermediate development.</li>
          </ul>
          <b>Website is under intial stages of development.</b> For feature requests, contribution of texts, or new ideas contact: yashkhasbage25@gmail.com <br /> 
          <Link href="/planned-features" className="text-blue-500 hover:underline">Planned Features</Link>
        </div>

      </Stack>  
      <footer className="w-full text-white py-8 px-4 mt-8">  
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center">  
          <div className="mb-4 sm:mb-0">  
            <Box className={`text-center sm:text-left ${nanumMyeongjo.className}`}>  
              © {new Date().getFullYear()} Tarka Sangraha. All rights reserved.  
            </Box>  
          </div>  
          <div className="flex flex-col sm:flex-row items-center">  
            <div className="mb-4 sm:mb-0 sm:mr-6">  
              <Box className="text-center sm:text-left">  
                Contact: yashkhasbage25@gmail.com
              </Box>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </div>  
  );  
}  