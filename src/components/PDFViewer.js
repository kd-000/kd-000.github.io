import React from 'react';

function PDFViewer({link}) {
    return (
        <iframe src = {link} width="100%" height="100%" loading="lazy">
        </iframe>
    );
  }

  export default PDFViewer;

