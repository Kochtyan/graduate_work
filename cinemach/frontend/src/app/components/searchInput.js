import TextField from "@mui/material/TextField";

function SearchInput({ onSearch }) {
  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };

  return (
    <TextField label="Поиск" variant="outlined" onChange={handleSearchChange} />
  );
}

export default SearchInput;
