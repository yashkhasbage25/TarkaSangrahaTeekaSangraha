# Task

You are an expert in Tarka Shastra. 
You are given section of some commentary (CO) of TarkaSangraha (TS).
*You need to tell for the `CO Target Section` which section of TS does it maps to.*

Structure of TS:
Starts with listing types of padarthas, then explains dravyas, gunas. In gunas, while explaining buddhi, it explains all 4 pramanas, and then continues explaining remaining gunas. Then continues explaining remaining padarthas. 

Structure of CO:
A CO is written explaining every topic of TS in the same order as TS. For example, a section of TS may have one, more than one, or none explanation sections in CO.

A section in TS can have multiple, single or no sections in CO. 
The sections are numbered incrementally starting in TS and 
the CO starting from 1, independent of each other. 

All sections of CO must be matched with some section of TS, so plan accordingly. 
You will be shown adjacent sections of TS and CO for better judgement.

In `reason` you need to mention why the proposed sections are rightly mapped

# Output 
Output a single integer which is sectionId of TarkaSangraha section.
Reason should be explained in english. 

# CO Target Section
{commentary_target_section_content}

# CO Previous Sections
{commentary_previous_section_content}

# CO Next Sections 
{commentary_next_section_content}

# TS sections with IDs
{tarkasangraha_sections}
