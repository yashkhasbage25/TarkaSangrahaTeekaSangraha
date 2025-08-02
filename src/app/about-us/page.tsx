'use client';
import React from "react";
import { Box, Typography, Divider, Chip } from "@mui/material";

export default function AboutUs() {
  return (<div className="text-white">
    <Box className="mt-4 mb-6">
      <Typography variant="h4" className="font-bold">
        About Us
      </Typography>  
    </Box>
  
    <Divider style={{ borderColor: 'grey' }}/>  
  
    <Box className="flex flex-col max-w-3xl gap-y-4 mb-6 mt-6">  
      <Typography className="mb-4" component="p">  
        This website is dedicated to the venerable <strong>Guru Paramparā</strong> of the Naiyāyikas (scholars of Nyāya philosophy) and is open to contributions from all who wish to further this tradition.  
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        My own journey began with a personal study of the <strong>Tarkasaṅgraha</strong> as a hobby. While it sparked my curiosity, I found that simply reading the base text did not clarify all the questions that arose. Further exploration led me to works such as <strong>Nyāyabodhinī</strong> and <strong>Tarkasaṅgraha Dīpikā</strong>—commentaries that not only explain but also debate and justify the reasoning within the Tarkasaṅgraha. Discovering advanced texts like <strong>Nīlakaṇṭhīṭīkā</strong> on the Dīpikā further illuminated many of my doubts, deepening my fascination for the ongoing tradition of commentaries (ṭīkās) on the Tarkasaṅgraha.  
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        Despite the popularity of these ṭīkās, I noticed that they are typically available only as scanned versions on platforms such as Internet Archive, often making them difficult to read and not easily accessible for everyone. Inspired by excellent resources like <span className="italic">ashtadhyayi.com</span>, <span className="italic">Advaita Sharada</span>, and <span className="italic">Yoga Vaiśāradī</span>, it occurred to me that Nyāya lacks a single-point-of-contact website for systematically studying the Tarkasaṅgraha.  
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        I saw this as an opportunity and started developing this website. While my aspiration is to one day create a comprehensive portal for the entire Nyāya tradition, I am still a beginner, primarily familiar with texts at the level of the Tarkasaṅgraha. For now, this platform focuses solely on the study and teaching of the Tarkasaṅgraha and its commentaries. 
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        I would like to emphasize that this site is devoted to the living tradition of the Nyāya school and its lineage of teachers. I do not claim ownership of this wisdom; I consider myself merely a mediator presenting the knowledge to a wider audience.  
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        The vision for this website is to make learning Tarkasaṅgraha accessible for all, especially beginners. I plan to include interactive elements to facilitate learning in an enjoyable and engaging way, helping newcomers—those with little or no prior background in Nyāya—grasp the essentials of this profound tradition.  
      </Typography>  
  
      <Typography className="mb-4" component="p">  
        I hope you find this resource helpful. Your feedback and contributions are always welcome. Here is my email: <a href="mailto:yashkhasbage25@gmail.com" className="text-blue-600 hover:underline">yashkhasbage25@gmail.com</a>
      </Typography>  

      <Typography className="mb-4" component="p">  
        <span className="italic">Namaste</span>.  
      </Typography>
    </Box>  
    <Divider />  
    <Box className="mt-6 flex flex-row flex-wrap items-center gap-2 mb-6">  
      <Chip label="#GuruParamparā" color="primary" />  
      <Chip label="#Naiyāyika" color="secondary" />  
      <Chip label="#Tarkasaṅgraha" color="info" />  
      <Chip label="#OpenForCollaboration" color="success" />  
    </Box>  
  </div>  )
};