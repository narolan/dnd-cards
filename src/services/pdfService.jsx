import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementToPrintId, name, count = 1) => {
    if (count > 1) {
        await multiplePagePrint(count, elementToPrintId, name);
    } else {
        await singlePagePrint(elementToPrintId, name);
    }
};

async function singlePagePrint(elementToPrintId, name) {
    const element = document.getElementById(elementToPrintId);
    if (!element) {
        throw new Error(`Element with id ${elementToPrintId} not found`);
    }
    const canvas = await html2canvas(element, {scale: 2});
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: 'a4',
    });

    pdf.addImage(data, "PNG", 0, 0, element.clientWidth / 8, element.clientHeight / 8);
    pdf.save(name + ".pdf");
}

async function multiplePagePrint(count, elementToPrintId, name) {
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: 'a4',
    });

    let newPage = false;
    for (let i = 1; i <= count; i++) {
        if (newPage) {
            pdf.addPage();
            newPage = false;
        }
        const element = document.getElementById(elementToPrintId + i);
        if (!element) {
            throw new Error(`Element with id ${elementToPrintId + i} not found`);
        }
        const canvas = await html2canvas(element, {scale: 2});
        const data = canvas.toDataURL("image/png");

        let x = 0;
        if (i % 5 === 2) {
            x = 40;
        }
        if (i % 5 === 3) {
            x = 80;
        }
        if (i % 5 === 4) {
            x = 120;
        }
        if (i % 5 === 0) {
            x = 160;
            newPage = true;
        }
        pdf.addImage(data, "PNG", x, 0, element.clientWidth / 8, element.clientHeight / 8);
    }
    pdf.save(name + ".pdf");
}