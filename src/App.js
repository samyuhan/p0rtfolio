import React, { useState } from "react";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import About from "./components/About";
import Visual from "./components/Visual";
import Research from "./components/Research";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('Homepage');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Homepage') {
      return <Homepage />;
    } else if (currentPage === 'About') {
      return <About />;
    } else if (currentPage === 'Visual') {
      return <Visual />;
    } else if (currentPage === 'Research') {
      return <Research />;
    } else if (currentPage === 'Resume') {
      return <Research />;
    } 
  };

  const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   );
// }

  return (
    <div>
      <div>
        {currentPage === 'Homepage' ? (
          <Homepage currentPage={currentPage} handlePageChange={handlePageChange} />
        ) : (
          <>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
          </>
        )}
      </div>
    </div>
  );
}

export default App;