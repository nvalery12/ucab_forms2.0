import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '3px solid #047732',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function ModalPreguntaMatriz() {
  const [open, setOpen] = React.useState(false);
  const [QuestionList, setQuestionList] = useState([{ Question: "" }]);

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...QuestionList];
    list[index][name] = value;
    setQuestionList(list);
  };

  const handleQuestionRemove = (index) => {
    const list = [...QuestionList];
    list.splice(index, 1);
    setQuestionList(list);
  };

  const handleQuestionAdd = () => {
    setQuestionList([...QuestionList, { Question: "" }]);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div>
      <button className='btnBuildQuestion' onClick={handleOpen}><BuildIcon fontSize='small'/></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="modal-question-matriz" sx={{ ...style, width: 400 }}>
          <div className="modal-title">
            <p>Introduzca las opciones</p>
            <button className='btnDelete' onClick={handleClose}><CloseIcon fontSize='small'/></button>
          </div>
          <form className='ModalForm' action="" onSubmit={handleClose}>
            <div id="select-questions">
              {QuestionList.map((singleQuestion, index) => (
                <div key={index} className="input-question">
                    <input
                      name="Question"
                      type="text"
                      id="Question"
                      value={singleQuestion.Question}
                      onChange={(e) => handleQuestionChange(e, index)}
                      required
                    />
                    {QuestionList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleQuestionRemove(index)}
                        className="remove-btn"
                      ><DeleteIcon fontSize='small'/>
                      </button>
                    )}
                </div>
              ))}
              <button className='btnAdd' onClick={handleQuestionAdd}><AddIcon fontSize='medium'/></button>
            </div>
            <button id="btnSubmitModalMatriz" type="submit">Aceptar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}