import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for running tips, nutrition advice..."
          className="w-full px-4 py-2 pl-10 border rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-maincolor"
        />
        <Search className="absolute left-3 text-gray-400" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;