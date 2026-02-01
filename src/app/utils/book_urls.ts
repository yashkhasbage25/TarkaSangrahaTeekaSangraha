function bookNameToUrlFileName(bookName: string): string {
    switch (bookName) {
        case 'तर्कसङ्ग्रहः':
            return 'tarkasangraha';
        case 'न्यायबोधिनी':
            return 'nyayabodhini_mapping';
        case 'तर्कसङ्ग्रहदीपिका':
            return 'tarkasangrahadeepika_mapping';
        case 'तर्कसङ्ग्रहसर्वस्वम्':
            return 'tarkasangrahasarvasvam_with_section_mappings';
        case 'आलोकः':
            return 'aalok_with_section_mappings';
        case 'tarkasangraha':
            return 'tarkasangraha';
        case 'nyayabodhini':
            return 'nyayabodhini_mapping';
        case 'tarkasangrahadeepika':
            return 'tarkasangrahadeepika_mapping';
        case 'tarkasangrahasarvasvam':
            return 'tarkasangrahasarvasvam_with_section_mappings';
        case 'aalok':
            return 'aalok_with_section_mappings';
        case 'English Translation of TarkaSangraha':
            return 'englishts_mappings';
        default:
            throw new Error('Book title not recognized');
    }
}

const localTesting = false;

function bookNameToUrl(bookName: string): string {
    const fileName = bookNameToUrlFileName(bookName);
    if (localTesting) {
        const baseUrl = 'http://localhost:8000';
        return `${baseUrl}/${fileName}.json`;
    } else {
        const baseUrl = 'https://raw.githubusercontent.com/yashkhasbage25/TarkaSangrahaTeekaSangraha/refs/heads/main/nyayarepo/json_data';
        return `${baseUrl}/${fileName}.json`;
    }
}

function isLocalTesting(): boolean {
    return localTesting;
}

export {
    bookNameToUrl,
    bookNameToUrlFileName,
    isLocalTesting,
}