# How to Create PDF Resume

## Method 1: Print to PDF (Easiest)

1. Click the "📄 Download Resume" button on your portfolio
2. A new tab will open with your formatted resume
3. Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
4. In the print dialog, select "Save as PDF" or "Microsoft Print to PDF"
5. Click "Save" and choose where to save your PDF

## Method 2: Using Browser's Built-in PDF Generator

### Chrome/Edge:
1. Open `resume.html` in your browser
2. Right-click → Print
3. Destination: "Save as PDF"
4. Click "Save"

### Firefox:
1. Open `resume.html` in your browser
2. File → Print
3. Select "Microsoft Print to PDF" or "Save as PDF"
4. Click "Print"

## Method 3: Online HTML to PDF Converter

1. Go to any of these websites:
   - https://www.html2pdf.com/
   - https://pdfcrowd.com/
   - https://www.sejda.com/html-to-pdf

2. Upload your `resume.html` file
3. Click "Convert"
4. Download the generated PDF

## Method 4: Using Command Line (Advanced)

If you have Node.js installed:

```bash
npm install -g html-pdf-node
```

Then create a script to convert:

```javascript
const htmlToPdf = require('html-pdf-node');
const fs = require('fs');

let file = { url: "file:///path/to/portfolio/resume.html" };
let options = { format: 'A4' };

htmlToPdf.generatePdf(file, options).then(pdfBuffer => {
  fs.writeFileSync('Neellohit_Dasgupta_Resume.pdf', pdfBuffer);
  console.log('PDF created successfully!');
});
```

## Recommended Settings for PDF:

- **Paper Size:** A4
- **Margins:** Normal (1 inch)
- **Scale:** 100%
- **Background Graphics:** Enabled (to keep colors)

## Result:

You'll get a professional, formatted PDF resume with:
- ✅ Clean layout
- ✅ Professional colors
- ✅ All your information
- ✅ Proper formatting
- ✅ Ready to send to employers

---

**Note:** The resume.html file is already perfectly formatted for PDF conversion. Just open it and print to PDF!
