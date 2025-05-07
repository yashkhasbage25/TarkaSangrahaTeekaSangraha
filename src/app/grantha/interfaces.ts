export interface BookDisplay {
    title: string;
    author: string;
    indent: string;
}

export interface BookSelectionProps {
    setSelectedBooks: (selectedBooks: string[]) => void;
}

export interface BookSelectionState {
    selectedBooks: string[];
}

export type GranthaPageProps = Record<string, never>;  

export interface GranthaPageState {
    selectedBooks: string[];
    loadingContent: boolean;
    books: Book[]
}

export interface BookSection {
    title: string;
    tags: string[];
    content: string;
    sectionId: string;
    translation?: string;
    tarkasangraha_sectionId?: string;
    tarkasangraha_title?: string;
}

export type Book = BookSection[];

export interface BooksLayoutProps {
    selectedBooks: string[];
    books: Book[];
}

export interface BooksLayoutState {
    isPaneOpen: boolean;
    isMobile: boolean;
}
