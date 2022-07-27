import React, {Component, PropTypes} from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("resultados.pdf");
      })
    ;
  }

  render() {
    return (
      <div>
        <div id="divToPrint" className="mt4" sx={{
          backgroundColor: '#f5f5f5',
          width: '210mm',
          minHeight: '297mm',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div>Aserejé-ja-de jé<br/>De jebe tu de jebere seibiunouva majavi an de bugui an de güididípi</div> {/*AQUI SE PONE EL COMPONENTE A IMPRIMIR*/}
        </div>
        <div className="mb5">
          <button onClick={this.printDocument}>Imprimir</button>
        </div>
      </div>
    );
  }
}