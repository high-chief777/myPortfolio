import React, { forwardRef, useImperativeHandle, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CV from "./CV";

const DownloadCV = forwardRef((props, ref) => {
  const cvRef = useRef();

  useImperativeHandle(ref, () => ({
    download: () => {
      const originalStyle = cvRef.current.style.cssText;
      cvRef.current.style.width = "804px";
      cvRef.current.style.padding = "40px";
      cvRef.current.style.background = "#ffffff";

      html2canvas(cvRef.current, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Samip_Ghimire_CV.pdf");
        cvRef.current.style.cssText = originalStyle;
      });
    }
  }));

  return (
    <div ref={cvRef} style={{ position: "absolute", top: "-10000px", left: "-10000px" }}>
      <CV />
    </div>
  );
});

export default DownloadCV;
