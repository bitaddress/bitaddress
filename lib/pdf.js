var PDFDocument = require('pdfkit');
var qr = require('qr-image');
var fs = require('fs');

function PDF(path, pairs) {

    // Create a document
    var doc = new PDFDocument();
    // Pipe its output somewhere
    doc.pipe(fs.createWriteStream(path));

    if (Array.isArray(pairs)) {
        pairs.forEach(function(pair) {
            doc.text(pair.address +'\n' + pair.privateKey)
                .moveDown(0.5);
        })
    } else {
        var pair = pairs;
        var address_png = qr.imageSync(pair.address, { type: 'png' });
        var private_png = qr.imageSync(pair.privateKey, { type: 'png' });

        doc.font('Times-Roman')
            .text('Bitcoin Address: ' + pair.address)
            .moveDown(0.5);

        doc.image(address_png, {
            fit: [250, 300],
            align: 'center',
            valign: 'center'
        });

        doc.font('Times-Roman')
            .text('Private Key: ' + pair.privateKey)
            .moveDown(0.5);

        doc.image(private_png, {
            fit: [250, 700],
            align: 'center',
            valign: 'center'
        });
    }

    // Finalize PDF file
    doc.end();
}

module.exports = PDF;