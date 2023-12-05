// import React from 'react'

// // const SearchBar = () => {
// //   return (
// //     <>
// //       <form>
// //         <input type="text" placeholder="Search here"/>
// //         <button type="submit"><i className='fa fa-search'></i> </button>
// //       </form>
// //     </>
// //   )
// // }

// // export default SearchBar;
// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   }

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Searching for: ${searchQuery}`);
//     // Add your search functionality here
//   }

//   return (
//     <form onSubmit={handleSearchSubmit}>
//       <input 
//         type="text" 
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearchInputChange} 
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default SearchBar;