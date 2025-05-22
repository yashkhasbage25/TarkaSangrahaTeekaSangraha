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
  Alert,  
} from "@mui/material";  
  
const BOOK_LIST = [  
  "tarkasangraha",  
  // "MobyDick",  
  // "AliceInWonderland",  
  // "OliverTwist"  
];  
  
interface BookSection {  
  content: string;  
  [key: string]: any;  
}  
  
interface MatchResult {  
  bookTitle: string;  
  sectionTitle: string;
  sectionIdx: number;  
  content: string;  
}  
  
interface BookKeywordSearchState {  
  search: string;  
  selectedBooks: string[];  
  results: MatchResult[];  
  loading: boolean;  
  errors: Record<string, string>;  
}  
  
function highlightKeyword(text: string, keyword: string) {  
  if (!keyword) return text;  
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
}  
  
class BookKeywordSearch extends React.Component<{}, BookKeywordSearchState> {  
  constructor(props: {}) {  
    super(props);  
    this.state = {  
      search: "",  
      selectedBooks: [],  
      results: [],  
      loading: false,  
      errors: {}  
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
  
  handleSearch = async () => {  
    const { selectedBooks, search } = this.state;  
    this.setState({ loading: true, results: [], errors: {} });  
    const newResults: MatchResult[] = [];  
    const errors: Record<string, string> = {};  
  
    await Promise.all(  
      selectedBooks.map(async (bookTitle) => {  
        try {  
          // const res = await fetch(`http://localhost:8000/${bookTitle}.json`);  
          const res = await fetch(`https://raw.githubusercontent.com/yashkhasbage25/TarkaSangrahaTeekaSangraha/refs/heads/main/nyayarepo/json_data/${bookTitle}.json`);  
          if (!res.ok) throw new Error("Could not fetch");  
          const data: BookSection[] = await res.json();  
          data.forEach((section, idx) => {  
            if (  
              typeof section.content === "string" &&  
              search &&  
              section.content.toLowerCase().includes(search.toLowerCase())  
            ) {  
              newResults.push({
                bookTitle,
                sectionTitle: section.title,
                sectionIdx: idx,
                content: section.content,
              });  
            }  
          });  
        } catch {  
          errors[bookTitle] = "Download failed";  
        }  
      })  
    );  
  
    this.setState({ results: newResults, loading: false, errors });  
  };  
  
  render() {  
    const { search, selectedBooks, results, loading, errors } = this.state;  
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
                      {<span className="text-black">{title}</span>}  
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
              >{`${results.length} matching section${results.length > 1 ? "s" : ""} found:`}</Alert>  
              <div className="space-y-5">  
                {results.map((match, idx) => (  
                  <Card key={`${match.bookTitle}-${match.sectionIdx}-${idx}`} className="bg-gray-500 border border-gray-200 shadow-sm rounded-lg">  
                    <CardContent>  
                      <Typography variant="subtitle2" className="text-indigo-700 font-bold mb-2">  
                        {match.bookTitle} - {match.sectionTitle}
                      </Typography>  
                      <Typography variant="body1">  
                        {highlightKeyword(match.content, search)}  
                      </Typography>  
                    </CardContent>  
                  </Card>  
                ))}  
              </div>  
            </div>  
          )}  
          {!loading && results.length === 0 && selectedBooks.length > 0 && (  
            <Alert severity="warning">No matches found.</Alert>  
          )}  
        </div>  
      </div>  
    );  
  }  
}  
  
export default BookKeywordSearch;  