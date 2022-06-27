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

const InputQuestion = () => {
  return  <div className="input-question">
            <input type="text" />
            <button><DeleteIcon fontSize='small'/></button>
          </div>;
};


export default function ModalPreguntaMatriz() {
  const [open, setOpen] = React.useState(false);
  const [inputList, setInputList] = useState([]);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<InputQuestion key={inputList.length}/>));
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
          <div id="select-questions">
            {inputList}
          </div>
          <button className='btnAdd' onClick={onAddBtnClick}><AddIcon fontSize='medium'/></button>
        </Box>
      </Modal>
    </div>
  );
}