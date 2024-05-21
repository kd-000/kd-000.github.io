import React, {useState} from 'react';
import '../css/App.css';
import PDFViewer from '../components/PDFViewer';
import BackButton from '../components/backButton'
import '../css/PDFViewer.css'
import Banner from '../components/banner';

function Blitz() {
  const pdfUrl = '/Documents/COMPUTER_SCIENCE_H446_PROJECT_GITHUB.pdf';

  return (
    <div className="main-outer">
      <div className="main-outer-pdf">
        <Banner></Banner>
        <div style={{display:'flex', alignItems:'left', width: '100%'}}>
          <BackButton></BackButton>
        </div>
        <hr className='main-header-divider'></hr>
        <PDFViewer link={pdfUrl}/>
      </div>
    </div>
  );
}

export default Blitz;
