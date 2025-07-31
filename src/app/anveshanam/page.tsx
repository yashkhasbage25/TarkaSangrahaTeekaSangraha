'use client';
import React from "react";  
import {  
  TextField,  
  Button,  
  Checkbox,  
  FormControlLabel,  
  CircularProgress,  
  Card,  
  CardContent,  
  Typography,  
  Box,
  Alert,
  Tooltip,
  IconButton,
  Switch,
  FormGroup,
} from "@mui/material";  
import Link from "next/link";  
import { OpenInNew } from "@mui/icons-material";
import { Eczar } from "next/font/google";
import { bookNameToUrl } from "../utils/book_urls";

const eczar = Eczar({  
  subsets: ["devanagari"],  
  weight: ["400"],  
});
  
const BOOK_LIST = ["tarkasangraha", "nyayabodhini", "tarkasangrahadeepika", "tarkasangrahasarvasvam", "aalok"];
const DEVANAGARI_MAP: Record<string, string> = {
  "tarkasangraha": "तर्कसङ्ग्रहः",
  "nyayabodhini": "न्यायबोधिनी",
  "tarkasangrahadeepika": "तर्कसङ्ग्रहदीपिका",
  "tarkasangrahasarvasvam": "तर्कसङ्ग्रहसर्वस्वम्",
  "aalok": "आलोकः",
}

interface BookSection {  
  content: string;  
  [key: string]: any;  
}  
  
interface MatchResult {  
  bookTitle: string;  
  sectionTitle: string;
  sectionIdx: number;  
  content: string;
  matchScore?: number; // For fuzzy matching
}  
  
interface BookKeywordSearchState {  
  search: string;  
  selectedBooks: string[];  
  results: MatchResult[];  
  loading: boolean;  
  errors: Record<string, string>;
  exactMatch: boolean; // Toggle for exact/fuzzy match
}  

// Devanagari-aware fuzzy matching utilities
class DevanagariMatcher {
  // Normalize Devanagari text by handling common variations
  static normalizeDevanagari(text: string): string {
    return text
      .replace(/\u093C/g, '') // Remove nukta
      .replace(/[\u0900-\u0903]/g, '') // Remove tone marks
      .replace(/\u094D/g, '') // Remove virama (halant)
      .replace(/\s+/g, ' ')
      // remove any visarga
      .replace(/\u0903/g, '') // Remove visarga
      .replace(/[\u0964\u0965]/g, '') // Remove danda and double danda
      .replace(/[\u0901\u0902]/g, '') // Remove anusvara
      .trim()
      .toLowerCase();
  }

  // Calculate Levenshtein distance for fuzzy matching
  static levenshteinDistance(str1: string, str2: string): number {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i += 1) {
      matrix[0][i] = i;
    }
    
    for (let j = 0; j <= str2.length; j += 1) {
      matrix[j][0] = j;
    }
    
    for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1, // deletion
          matrix[j - 1][i] + 1, // insertion
          matrix[j - 1][i - 1] + indicator, // substitution
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  // Calculate similarity percentage (0-100)
  static similarity(str1: string, str2: string): number {
    const normalized1 = this.normalizeDevanagari(str1);
    const normalized2 = this.normalizeDevanagari(str2);
    
    if (normalized1 === normalized2) return 100;
    
    const maxLength = Math.max(normalized1.length, normalized2.length);
    if (maxLength === 0) return 100;
    
    const distance = this.levenshteinDistance(normalized1, normalized2);
    return Math.round(((maxLength - distance) / maxLength) * 100);
  }

  // Find fuzzy matches in text
  static findFuzzyMatches(text: string, query: string, threshold: number = 70): Array<{start: number, end: number, score: number}> {
    if (!query || !text) return [];
    
    const normalizedQuery = this.normalizeDevanagari(query);
    const queryLength = normalizedQuery.length;
    const matches: Array<{start: number, end: number, score: number}> = [];
    
    // Search for substrings of varying lengths around the query length
    const minLength = Math.max(1, queryLength - 2);
    const maxLength = queryLength + 3;
    
    for (let len = minLength; len <= maxLength; len++) {
      for (let i = 0; i <= text.length - len; i++) {
        const substring = text.substring(i, i + len);
        const score = this.similarity(substring, query);
        
        if (score >= threshold) {
          matches.push({
            start: i,
            end: i + len,
            score: score
          });
        }
      }
    }
    
    // Remove overlapping matches, keeping the best score
    return this.removeDuplicateMatches(matches);
  }

  private static removeDuplicateMatches(matches: Array<{start: number, end: number, score: number}>): Array<{start: number, end: number, score: number}> {
    if (matches.length <= 1) return matches;
    
    // Sort by score descending
    matches.sort((a, b) => b.score - a.score);
    
    const result: Array<{start: number, end: number, score: number}> = [];
    
    for (const match of matches) {
      // Check if this match overlaps with any already selected match
      const overlaps = result.some(existing => 
        (match.start < existing.end && match.end > existing.start)
      );
      
      if (!overlaps) {
        result.push(match);
      }
    }
    
    // Sort by position
    return result.sort((a, b) => a.start - b.start);
  }
}

function highlightKeyword(text: string, keyword: string, exactMatch: boolean = true) {  
  if (!keyword) return text;
  
  if (exactMatch) {
    // Original exact matching logic
    const reg = new RegExp(  
      `(${keyword.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")})`,  
      "gi"  
    );  
    return text.split(reg).map((part, i) =>  
      reg.test(part) ? (  
        <span key={i} className="bg-yellow-200 text-yellow-900 font-semibold px-0.5 rounded">  
          {part}  
        </span>  
      ) : (  
        part  
      )  
    );
  } else {
    // Fuzzy matching highlighting
    const matches = DevanagariMatcher.findFuzzyMatches(text, keyword, 70);
    
    if (matches.length === 0) return text;
    
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, i) => {
      // Add text before match
      if (match.start > lastIndex) {
        parts.push(text.substring(lastIndex, match.start));
      }
      
      // Add highlighted match
      const matchedText = text.substring(match.start, match.end);
      parts.push(
        <span 
          key={`match-${i}`} 
          className="bg-orange-200 text-orange-900 font-semibold px-0.5 rounded"
          title={`Match score: ${match.score}%`}
        >
          {matchedText}
        </span>
      );
      
      lastIndex = match.end;
    });
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts;
  }
}  
  
class BookKeywordSearch extends React.Component<{}, BookKeywordSearchState> {  
  constructor(props: {}) {  
    super(props);  
    this.state = {  
      search: "",  
      selectedBooks: [],  
      results: [],  
      loading: false,  
      errors: {},
      exactMatch: true,
    };  
  }  
  
  handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {  
    this.setState({ search: e.target.value });  
  };  
  
  handleCheckbox = (book: string) => {  
    this.setState((prevState) => {  
      const already = prevState.selectedBooks.includes(book);  
      return {  
        selectedBooks: already  
          ? prevState.selectedBooks.filter((b) => b !== book)  
          : [...prevState.selectedBooks, book]  
      };  
    });  
  };

  handleMatchTypeToggle = () => {
    this.setState((prevState) => ({
      exactMatch: !prevState.exactMatch
    }));
  };
  
  handleSearch = async () => {  
    const { selectedBooks, search, exactMatch } = this.state;  
    this.setState({ loading: true, results: [], errors: {} });  
    const newResults: MatchResult[] = [];  
    const errors: Record<string, string> = {};  
  
    await Promise.all(  
      selectedBooks.map(async (bookTitle) => {  
        try {  
          const url = bookNameToUrl(bookTitle);
          const res = await fetch(url);
          if (!res.ok) throw new Error("Could not fetch");  
          const data: BookSection[] = await res.json();  
          
          data.forEach((section, idx) => {  
            if (typeof section.content === "string" && search) {
              let isMatch = false;
              let matchScore = 0;
              
              if (exactMatch) {
                // Original exact matching logic
                isMatch = section.content.toLowerCase().includes(search.toLowerCase());
                matchScore = isMatch ? 100 : 0;
              } else {
                // Fuzzy matching logic
                const matches = DevanagariMatcher.findFuzzyMatches(section.content, search, 70);
                isMatch = matches.length > 0;
                matchScore = matches.length > 0 ? Math.max(...matches.map(m => m.score)) : 0;
              }
              
              if (isMatch) {
                newResults.push({
                  bookTitle,
                  sectionTitle: section.title,
                  sectionIdx: idx,
                  content: section.content,
                  matchScore: matchScore,
                });  
              }
            }  
          });  
        } catch {  
          errors[bookTitle] = "Download failed";  
        }  
      })  
    );  

    // Sort results by match score if using fuzzy matching
    if (!exactMatch) {
      newResults.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
    }
  
    this.setState({ results: newResults, loading: false, errors });  
  };  
  
  render() {  
    const { search, selectedBooks, results, loading, errors, exactMatch } = this.state;  
    const filteredBooks = BOOK_LIST;  
    
    return (  
      <div className="mx-auto max-w-3xl py-10 px-4 min-h-screen">  
        <div className="border-1 bg-white rounded-xl shadow p-8">  
          <div className="flex flex-col md:flex-row gap-3 items-center mb-8">  
            <TextField  
              size="small"  
              label="Search keyword"  
              value={search}  
              onChange={this.handleSearchInput}  
              variant="outlined"  
              className="flex-1"  
              disabled={loading}  
            />  
            <Button  
              variant="contained"  
              color="primary"  
              size="medium"  
              onClick={this.handleSearch}  
              disabled={selectedBooks.length === 0 || !search || loading}  
              startIcon={loading ? <CircularProgress size={18} /> : null}  
              className="mt-2 md:mt-0"  
            >  
              Search  
            </Button>  
          </div>

          {/* Match Type Toggle */}
          <div className="mb-6">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={!exactMatch}
                    onChange={this.handleMatchTypeToggle}
                    disabled={loading}
                    color="primary"
                  />
                }
                label={
                  <Box className="flex flex-col">
                    <Typography variant="body2" className="font-semibold text-black">
                      {/* {exactMatch ? "Exact Match" : "Fuzzy Match"} */}
                      Fuzzy Match
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      {/* {exactMatch 
                        ? "Search for exact keyword matches" 
                        : "Find similar words and approximate matches (70%+ similarity)"
                      } */}
                      Find similar words and approximate matches (70%+ similarity)
                    </Typography>
                  </Box>
                }
              />
            </FormGroup>
          </div>
          
          <div>  
            <Typography variant="subtitle1" className="mb-2 text-black font-semibold">  
              Select Books:  
            </Typography>  
            <div className="flex flex-wrap gap-4 mb-6">  
              {filteredBooks.map((title) => (  
                <FormControlLabel  
                  key={title}  
                  disabled={loading}  
                  control={  
                    <Checkbox  
                      checked={selectedBooks.includes(title)}  
                      onChange={() => this.handleCheckbox(title)}  
                    />  
                  }  
                  label={  
                    <span>  
                      {<span className={`text-black ${eczar.className}`}>{DEVANAGARI_MAP[title]}</span>}  
                      {errors[title] && (  
                        <span className="ml-2 color-red-500 text-xs font-semibold">{errors[title]}</span>  
                      )}  
                    </span>  
                  }  
                />  
              ))}  
            </div>  
          </div>  
        </div>  
        <div className="my-8 space-y-6">  
          {loading && (  
            <div className="flex items-center justify-center h-32">  
              <CircularProgress /> <span className="ml-4 text-lg">Searching for matches...</span>  
            </div>  
          )}  
          {/* Show all matches */}  
          {!loading && results.length > 0 && (  
            <div>  
              <Alert  
                severity="info"  
                icon={false}  
                className="mb-4"  
              >
                {`${results.length} matching section${results.length > 1 ? "s" : ""} found`}
                {!exactMatch && ` (fuzzy matching with 70%+ similarity)`}:
              </Alert>  
              <div className="space-y-5">  
                {results.map((match, idx) => {  
                  const devanagariTitle = DEVANAGARI_MAP[match.bookTitle];
                  const bookParam = encodeURIComponent(devanagariTitle);  
                  const sectionTitleParam = encodeURIComponent(match.sectionTitle);  
                  const granthaHref = `/grantha?book=${bookParam}&sectiontitle=${sectionTitleParam}`;  
                  return (  
                    <Card key={`${match.bookTitle}-${match.sectionIdx}-${idx}`} className="bg-gray-500 border border-gray-200 shadow-sm rounded-lg">  
                      <CardContent>  
                        <Box className={`text-indigo-700 font-bold mb-2 ${eczar.className} flex items-center justify-between`}>  
                          <span>{devanagariTitle} - {match.sectionTitle}</span>
                          {!exactMatch && match.matchScore && (
                            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {match.matchScore}% match
                            </span>
                          )}
                        </Box>  
                        <Box className={`text-gray-800 ${eczar.className}`}>  
                          {highlightKeyword(match.content, search, exactMatch)}  
                        </Box>  
                        <div className="mt-3">  
                          <Tooltip title="Open this section in reading view">  
                            <IconButton  
                              component={Link}  
                              href={granthaHref}  
                              target="_blank"  
                              rel="noopener noreferrer"  
                              size="small"  
                              color="primary"  
                            >  
                              <OpenInNew />  
                            </IconButton>  
                          </Tooltip>  
                        </div>  
                      </CardContent>  
                    </Card>  
                  );  
                })}   
              </div>  
            </div>  
          )}  
          {!loading && results.length === 0 && selectedBooks.length > 0 && (  
            <Alert severity="warning">
              No matches found.
              {!exactMatch && " Try adjusting your search terms or switching to exact match."}
            </Alert>  
          )}  
        </div>  
      </div>  
    );  
  }  
}  
  
export default BookKeywordSearch;