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
  NavigationStackHeader: {
    eka: 'Grantha',
    bahu: 'Granthah'
  }
};  