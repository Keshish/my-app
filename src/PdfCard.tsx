import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import './PdfPage.css';
import samplePDF from './Test2.pdf';
import { useState } from 'react';

export default function PdfCard() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <>
      <div id="ResumeContainer" className="mt-4">
        <Document
          
          className={"PDFDocument"}
          file={samplePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page

                renderMode='svg'
                key={page}
                className={"PDFPage PDFPageOne"}
                pageNumber={page}
                renderTextLayer={false}
                renderInteractiveForms={false}
              />
            ))}
        </Document>
      </div>
    </>); }

