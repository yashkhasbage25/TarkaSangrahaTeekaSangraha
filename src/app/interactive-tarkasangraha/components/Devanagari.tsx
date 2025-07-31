import { NavigationPaths } from './Navigations';  
  
interface DevanagariItem {  
  eka: string;  
  bahu: string;  
}  
  
interface DevanagariInterface {  
  [key: string]: DevanagariItem;  
}  
  
export const Devanagari: DevanagariInterface = {  
  [NavigationPaths.PADARTHA]: {  
    eka: 'पदार्थः',  
    bahu: 'पदार्थाः',  
  },  
  [NavigationPaths.DRAVYA]: {  
    eka: 'द्रव्यम्',  
    bahu: 'द्रव्याणि',  
  },  
  [NavigationPaths.GUNA]: {  
    eka: 'गुणः',  
    bahu: 'गुणाः',  
  },  
  [NavigationPaths.KARMA]: {  
    eka: 'कर्म',  
    bahu: 'कर्माणि',  
  },  
  [NavigationPaths.SAMANYA]: {  
    eka: 'सामान्यम्',  
    bahu: 'सामान्यानि',  
  },  
  [NavigationPaths.VISHESHA]: {  
    eka: 'विशेषः',  
    bahu: 'विशेषाः',  
  },  
  [NavigationPaths.SAMAVAYA]: {  
    eka: 'सामवायः',  
    bahu: 'सामवायाः',  
  },  
  [NavigationPaths.ABHAVA]: {  
    eka: 'अभावः',  
    bahu: 'अभावाः',  
  }, 
  [NavigationPaths.PRITHVI]: {
    eka: 'पृथिवी',
    bahu: 'पृथिव्यः',
  },
  [NavigationPaths.AAP]: {
    eka: 'आप्',
    bahu: 'आपः',
  },
  [NavigationPaths.TEJAH]: {
    eka: 'तेजः',
    bahu: 'तेजसः',
  },
  [NavigationPaths.VAYU]: {
    eka: 'वायुः',
    bahu: 'वायवः',
  }, 
  [NavigationPaths.AKASHA]: {
    eka: 'आकाशः',
    bahu: 'आकाशाः',
  },
  [NavigationPaths.DIK]: {
    eka: 'दिक्',
    bahu: 'दिक्',
  },
  [NavigationPaths.KAALA]: {
    eka: 'कालः',
    bahu: 'कालाः',
  },
  [NavigationPaths.AATMA]: {
    eka: 'आत्मा',
    bahu: 'आत्मनः',
  },
  [NavigationPaths.MANAH]: {
    eka: 'मनः',
    bahu: 'मनसः',
  },
  [NavigationPaths.ROOPA]: {
    eka: 'रूपम्',
    bahu: 'रूपाणि',
  },
  [NavigationPaths.RASA]: {
    eka: 'रसः',
    bahu: 'रसाः',
  },
  [NavigationPaths.GANDHA]: {
    eka: 'गन्धः',
    bahu: 'गन्धाः',
  },
  [NavigationPaths.SPARSHA]: {
    eka: 'स्पर्शः',
    bahu: 'स्पर्शाः',
  },
  [NavigationPaths.SANKHYA]: {
    eka: 'संख्या',
    bahu: 'संख्याः',
  },
  [NavigationPaths.PARIMAANA]: {
    eka: 'परिमाणम्',
    bahu: 'परिमाणानि',
  },
  [NavigationPaths.PRITHAKTVA]: {
    eka: 'प्रिथक्त्वम्',
    bahu: 'प्रिथक्त्वानि',
  },
  [NavigationPaths.SANYOGA]: {
    eka: 'संयोगः',
    bahu: 'संयोगाः',
  },
  [NavigationPaths.VIBHAGA]: {
    eka: 'विभागः',
    bahu: 'विभागाः',
  },
  [NavigationPaths.PARATVA]: {
    eka: 'परत्वम्',
    bahu: 'परत्वानि',
  },
  [NavigationPaths.APARATVA]: {
    eka: 'अपरत्वम्',
    bahu: 'अपरत्वानि',
  },
  [NavigationPaths.GURUTVA]: {
    eka: 'गुरुत्वम्',
    bahu: 'गुरुत्वानि',
  },
  [NavigationPaths.DRAVATVA]: {
    eka: 'द्रवत्वम्',
    bahu: 'द्रवत्वानि',
  },
  [NavigationPaths.SNEHA]: {
    eka: 'स्नेहः',
    bahu: 'स्नेहाः',
  },
  [NavigationPaths.SHABDA]: {
    eka: 'शब्दः',
    bahu: 'शब्दाः',
  },
  [NavigationPaths.BUDDHI]: {
    eka: 'बुद्धिः',
    bahu: 'बुद्धयः',
  },
  [NavigationPaths.SUKHA]: {
    eka: 'सुखम्',
    bahu: 'सुखानि',
  },
  [NavigationPaths.DUKHA]: {
    eka: 'दुःखम्',
    bahu: 'दुःखानि',
  },
  [NavigationPaths.ICCHA]: {
    eka: 'इच्छा',
    bahu: 'इच्छाः',
  },
  [NavigationPaths.DVESHA]: {
    eka: 'द्वेषः',
    bahu: 'द्वेषाः',
  },
  [NavigationPaths.PRAYATNA]: {
    eka: 'प्रयत्नः',
    bahu: 'प्रयत्नाः',
  },
  [NavigationPaths.DHARMA]: {
    eka: 'धर्मः',
    bahu: 'धर्माः',
  },
  [NavigationPaths.ADHARMA]: {
    eka: 'अधर्मः',
    bahu: 'अधर्माः',
  },
  [NavigationPaths.SAMSKARA]: {
    eka: 'संस्कारः',
    bahu: 'संस्काराः',
  },
  [NavigationPaths.UTKSHEPANA]: {
    eka: 'उत्क्षेपणम्',
    bahu: 'उत्क्षेपणानि',
  },
  [NavigationPaths.APAKSHEPANA]: {
    eka: 'अपक्षेपणम्',
    bahu: 'अपक्षेपणानि',
  },
  [NavigationPaths.AKUNCHANA]: {
    eka: 'अकुंचनम्',
    bahu: 'अकुंचनानि',
  },
  [NavigationPaths.PRASARANA]: {
    eka: 'प्रसारणम्',
    bahu: 'प्रसारणानि',
  },
  [NavigationPaths.GAMANA]: {
    eka: 'गमनम्',
    bahu: 'गमनानि',
  },

  [NavigationPaths.PARAM]: {
    eka: 'परम्',
    bahu: 'पराणि',
  },
  [NavigationPaths.APARAM]: {
    eka: 'अपरम्',
    bahu: 'अपराणि',
  },
  [NavigationPaths.PRAGABHAVA]: {
    eka: 'प्रगभवः',
    bahu: 'प्रगभवाः',
  },
  [NavigationPaths.PRADHVAMSABHAVA]: {
    eka: 'प्रध्वंसभवः',
    bahu: 'प्रध्वंसभवाः',
  },
  [NavigationPaths.ATYANTABHAVA]: {
    eka: 'अत्यन्तभवः',
    bahu: 'अत्यन्तभवाः',
  },
  [NavigationPaths.ANYONYABHAVA]: {
    eka: 'अन्योन्यभवः',
    bahu: 'अन्योन्यभवाः',
  },


  NavigationStackHeader: {
    eka: 'तर्कसङ्ग्रहः',
    bahu: 'Granthah'
  }
};  