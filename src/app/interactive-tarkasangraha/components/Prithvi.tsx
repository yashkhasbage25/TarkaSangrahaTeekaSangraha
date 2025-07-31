'use client';

import React from 'react';
// import { FaCircle, FaAtom, FaHands, FaCube } from 'react-icons/fa';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Hearing from '@mui/icons-material/Hearing';
import Terrain from '@mui/icons-material/Terrain';
import { GenericComponentProps, SectionedContentProps, RowDivisionProps } from './interfaces';
import SectionedContent from './SectionedPage';
import RowDivisions from './RowDivisions';
import Sort from '@mui/icons-material/Sort';

export default function Prithvi({ onShapeClick }: GenericComponentProps) {
  const sections = [
      {
        title: 'लक्षणम्',
        content: 'गन्धवती पृथिवी',
        icon: <Sort color="primary"/>
      },
      {
        icon: <Sort color="primary"/>,
        title: 'Two types of Prithvi',
        content: <RowDivisions
          sections={[
            {
              // icon: <FaAtom style={{ fontSize: '48px', color: 'black' }} />,
              title: 'नित्याः (परमाणुरूपाः)',
              content: 'Eternal (Atomic form).'
            },
            {
              // icon: <FaHands style={{ fontSize: '48px', color: 'teal' }} />,
              title: 'अनित्याः (कार्यरूपाः)',
              content: 'Non-eternal (Form resulting from actions).'
            }
          ]}
        />
      },
      {
        title: 'Three types of Prithvi',
        icon: <Sort color="primary"/>,
        content: <RowDivisions
          sections={[
            {
              // icon: <AccountCircleIcon style={{ fontSize: '48px', color: 'orange' }} />,
              icon: <EmojiPeople style={{ fontSize: '48px', color: 'orange' }} />,
              title: 'शरीरमस्मदादीनाम्',
              content: 'Body (Our bodies and others).'
            },
            {
              // icon: <FingerprintIcon style={{ fontSize: '48px', color: 'gray' }} />,
              icon: <Hearing style={{ fontSize: '48px', color: 'gray' }} />,
              title: 'इन्द्रियं (घ्राणम्)',
              content: 'Sense organ (Nose).'
            },
            {
              // icon: <FaCube style={{ fontSize: '48px', color: 'red' }} />,
              icon: <Terrain style={{ fontSize: '48px', color: 'green' }} />,
              title: 'विषयो (मृत्पाषाणादिः)',
              content: 'Objects (Clay, stone, etc.).'
            }
          ]}
        />
      },
    ];

  return (
    <SectionedContent
      sections={sections}
    />
  )
}

/*
const prithviElements = [  
  { name: 'गन्धवती पृथिवी', icon: <FaCircle style={{ fontSize: '48px', color: 'green' }} />, description: 'Earth with smell.', explanation: 'General representation of Earth, which possesses smell.' },  
  { name: 'नित्याः (परमाणुरूपाः)', icon: <FaAtom style={{ fontSize: '48px', color: 'blue' }} />, description: 'Eternal (Atomic form).', explanation: 'The eternal form of Earth is atomic, consisting of indivisible particles.' },  
  { name: 'अनित्याः (कार्यरूपाः)', icon: <FaHands style={{ fontSize: '48px', color: 'teal' }} />, description: 'Non-eternal (Form resulting from actions).', explanation: 'The non-eternal form of Earth results from actions and interactions, leading to its temporary manifestations.' },  
  { name: 'शरीरमस्मदादीनाम्', icon: <AccountCircleIcon style={{ fontSize: '48px', color: 'orange' }} />, description: 'Body (Our bodies and others).', explanation: 'Representation of the physical bodies, including our own and others.' },  
  { name: 'इन्द्रियं (घ्राणम्)', icon: <FingerprintIcon style={{ fontSize: '48px', color: 'gray' }} />, description: 'Sense organ (Nose).', explanation: 'The sense organ responsible for detecting smells, specifically the nose.' },  
  { name: 'विषयो (मृत्पाषाणादिः)', icon: <FaCube style={{ fontSize: '48px', color: 'red' }} />, description: 'Objects (Clay, stone, etc.).', explanation: 'Various objects associated with Earth, such as clay, stones, and other materials.' },  
];  
  
const Prithvi: React.FC<GenericComponentProps> = ({ }) => {  
  const [openModal, setOpenModal] = useState(false);  
  const [currentElement, setCurrentElement] = useState<any>(null);  
  
  const handleOpenModal = (element: any) => {  
    setCurrentElement(element);  
    setOpenModal(true);  
  };  
  
  const handleCloseModal = () => {  
    setOpenModal(false);  
    setCurrentElement(null);  
  };  
  
  return (  
    <div className="relative flex flex-col justify-center items-center h-screen">  
      <Typography variant="h2" gutterBottom>  
        पृथिवी 
      </Typography>  
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>  
        {prithviElements.map((element) => (  
          <div  
            key={element.name}  
            onClick={() => handleOpenModal(element)}  
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', cursor: 'pointer', textAlign: 'center', transition: 'box-shadow 0.3s' }}  
          >  
            {element.icon}  
            <Typography variant="h6" color="textPrimary" gutterBottom>  
              {element.name}  
            </Typography>  
            <Typography variant="body2" color="textSecondary">  
              {element.description}  
            </Typography>  
          </div>  
        ))}  
      </div>  
      <Modal open={openModal} onClose={handleCloseModal}>  
        <div  
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', backgroundColor: '#fff', boxShadow: '24px', padding: '16px', borderRadius: '8px' }}  
        >  
          {currentElement && (  
            <>  
              <Typography variant="h4" color="textPrimary" gutterBottom>  
                {currentElement.name}  
              </Typography>  
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' }}>  
                {currentElement.icon}  
              </div>  
              <Typography variant="body1" color="textSecondary" gutterBottom>  
                {currentElement.description}  
              </Typography>  
              <Typography variant="body2" color="textSecondary">  
                {currentElement.explanation}  
              </Typography>  
              <Button  
                variant="contained"  
                color="primary"  
                onClick={handleCloseModal}  
                style={{ marginTop: '16px' }}  
              >  
                Close  
              </Button>  
            </>  
          )}  
        </div>  
      </Modal>  
    </div>  
  );  
};  
  
export default Prithvi;  
*/