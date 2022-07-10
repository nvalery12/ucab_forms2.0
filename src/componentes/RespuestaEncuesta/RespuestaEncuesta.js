import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import './RespuestaEncuesta.css';
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   borderRadius: '10px',
//   border: '3px solid #40b4e5',
//   boxShadow: 24,
//   p: 4,
// };




export default function RespuestaEncuesta() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');




  return (
    <div className='Contenedor'>

      {/* Tarjeta 1  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box >
                Titulo de la encuesta
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box >
                Descripcion de la encuesta
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, illo, unde in veniam odio beatae ab consequuntur quam harum doloribus provident maiores? Assumenda cupiditate consequuntur dolorum minus, sapiente soluta praesentium.
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Tarjeta 2  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Box >
                Pregunta 1
              </Box>
            </Grid>
            <Grid item xs={8}>
              <TextField id="filled-basic" label="Pregunta" variant="filled" maxwidth />
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 3  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box >
                Pregunta 2
              </Box>
            </Grid>
            <Grid item xs={8}>
              <TextField id="filled-basic" label="Pregunta" variant="filled" maxwidth />
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 4  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Box >
                Pregunta 3
              </Box>
            </Grid>
            <Grid item xs={8}>
              <TextField id="filled-basic" type="time" />
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 5  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Box >
                Pregunta 4
              </Box>
            </Grid>
            <Grid item xs={8}>
              <TextField id="filled-basic"
                placeholder="Mucha info "
                multiline
                rows={2}
                maxRows={4} />
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 6  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>

            <Grid item xs={8}>
              <Box >
                Pregunta 5
              </Box>
            </Grid>
            <Grid item xs={8}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value="Seleccione edad"
                label="Age">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 7  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box >
                Pregunta 6
              </Box>
            </Grid>
            <Grid item xs={6} md={8}>
              Opcion 1
            </Grid>
            <Grid item xs={6} md={4}>
              Opcion 1 <input type="radio" name="opcion" value="opcion1" />
            </Grid>
            <Grid item xs={6} md={8}>
              Opcion 2
            </Grid>
            <Grid item xs={6} md={4}>
              Opcion 2 <input type="radio" name="opcion" value="opcion2" />
            </Grid>

          </Grid>
        </Container>
      </div>

      {/* Tarjeta 8  */}
      <div className="tarjeta">
        <Container >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box >
                Pregunta 7
              </Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <Button
                variant="contained"
                component="label"
              >
                Subir archivo
                <input
                  type="file"
                  hidden
                />
              </Button>
            </Grid>

          </Grid>
        </Container>
      </div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '10vh' }}>
        <Grid item xs={3}>
          <Button
            variant="contained"
            component="label"
            color="warning"
          >
            Siguiente
            <input
              type="button"
              hidden
            />
          </Button>
        </Grid>

      </Grid>

    </div>
  );
}