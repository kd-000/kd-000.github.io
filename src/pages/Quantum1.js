import React, {useState} from 'react';
import '../css/App.css';
import PDFViewer from '../components/PDFViewer';
import BackButton from '../components/backButton'
import '../css/PDFViewer.css'
import Banner from '../components/banner';

function Quantum1() {
  const pdfUrl = '/Documents/Gold_STEM_Write_Up.pdf';

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

export default Quantum1;
