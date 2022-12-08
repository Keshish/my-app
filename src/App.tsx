import React, { useState } from 'react';
import testPdf from "../src/test.pdf"
import {Document, Page} from "react-pdf"

export default function App() {
  return (
    <Document file={testPdf}>
      <Page pageNumber={1} />
    </Document>
  );
}