import React, {useState} from 'react';
import './CrearEncuesta.css';
import ModalMatriz from './CrearOpciones/ModalPreguntaMatriz';


// const RowTitle = () => {
//   return  <div>
//             <input type="text" list="myselect"/>
//             <datalist id="myselect">
//               <option>option 1</option>
//               <option>option 2</option>
//               <option>option 3</option>
//               <option>option 4</option>
//             </datalist>
//           </div>;
// };


const PreguntaMatriz = () => {
  // const [RowInputTitle, setRowInputTitle] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);
  const [divCount, setDivCount] = useState(1);
  const [divRowCount, setRowDivCount] = useState(1);

  // const onAddBtnClick = event => {
  //   event.preventDefault();
  //   setRowInputTitle(RowInputTitle.concat(<RowTitle key={RowInputTitle.length} />));
  // };

  const appendColumndiv = (e) => {
    e.preventDefault();
    setDivCount(1);
  };

  const appendRowdiv = (e) => {
    e.preventDefault();
    setRowDivCount(1);
  };

  return (
    <div>
      {/* <button onClick={onAddBtnClick}>Add input</button>
      {RowInputTitle} */}

      <form className="form-input-number" onSubmit={appendColumndiv}>
        <p>Inserte número de columnas:</p>
        <input
          value={divCount}
          onChange={(e) => setDivCount(Number(e.target.value))}
          type="number"
          min={1}
          disabled={btnDisable}
        />
        <button disabled={btnDisable} type="submit">Limpiar</button>
      </form>

      <form className="form-input-number" onSubmit={appendRowdiv}>
        <p>Inserte número de filas:</p>
        <input
          value={divRowCount}
          onChange={(e) => setRowDivCount(Number(e.target.value))}
          type="number"
          min={1}
          disabled={btnDisable}
        />
        <button disabled={btnDisable} type="submit">Limpiar</button>
      </form>

      <div className="estructura-lista">
        <button onClick={() => setBtnDisable(true)}>Aceptar</button>
      </div>

      <div id='arreglo-preguntas'>
        <form className="form-matriz-title">
          {Array(divCount)
            .fill(1)
            .map((y, idy) => (
              <div className="titulo-columna">
                <input type="text" key={idy} placeholder="Título"/>
                {idy===0 ? (
                    <>
                      <div className='filas'>
                        {Array(divRowCount)
                          .fill(1)
                          .map((x, idx) => (
                          <div className="row-titles">
                            <input className="input-rows" key={idx} type="text" placeholder='Título'/>
                          </div>
                        ))}
                      </div>
                    </>
                  ):(
                    <>
                      {
                        (() => {
                          if(btnDisable) {
                            return (
                              <div className="build-question">
                                <ModalMatriz/>
                              </div>
                            )
                          }
                        })()  
                      }
                    </>
                )}
              </div>
            ))}
        </form>
      </div>
    </div>
  )
}

export default PreguntaMatriz;