var nodeUtil = require("util"),
fs = require('fs');

var originalData = require('../data/5724933320.json');

//_ = require('underscore'),

//PDFParser = require("./pdf2json/pdfparser");
//
//var pdfParser = new PDFParser();
//
//pdfParser.on("pdfParser_dataReady", _.bind(_onPFBinDataReady, self));
//pdfParser.on("pdfParser_dataError", _.bind(_onPFBinDataError, self));
//
//var pdfFilePath = _pdfPathBase + folderName + "/" + pdfId + ".pdf";
//
//pdfParser.loadPDF(pdfFilePath);
//
//// or call directly with buffer
//fs.readFile(pdfFilePath, function (err, pdfBuffer) {
//    if (!err) {
//        pdfParser.parseBuffer(pdfBuffer);
//    }
//})
console.log(originalData);


function main(){
    var page = originalData.formImage.Pages[0];
    var texts = page.Texts;
    
    for (var i =0; i<texts.length; i++) {
        var text = texts[i];
        text.R[0].T = decodeString(text.R[0].T);
    }
    
    console.log('----end of decode----');
    console.log(originalData.formImage.Pages[0].Texts);
    
    var res = originalData.formImage.Pages[0].Texts;
    
    for (var i =0; i<res.length; i++) {
        var text = res[i];
        console.log(text.R[0].T);
    }

    writeFile(originalData);
}

main();

function decodeString(s){
    return decodeURIComponent(s);
}

var outputFilePath = 'abc.json';

function writeFile (data){
    fs.writeSync(outputFilePath, data);
}