import React from "react";
import './ResponderEncuesta.css'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import esLocale from "date-fns/locale/es";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function ResponderEncuestas() {
  const [selectedDateInicio, setSelectedDateInicio] = React.useState(null);
  const [selectedDateFin, setSelectedDateFin] = React.useState(null);
  const { id: formId } = useParams();
  const [form, setForm] = useState(null);
  const [response, setResponse] = useState({});
  const [errors, setErrors] = useState({});
  const [answers, setAnswers] = useState();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [userHasResponses, setUserHasResponses] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const user = useUser();

  const initializeAnswers = useCallback((questions) => {
    const answers = {};

    questions.forEach((question) => {
      if (question.type === "Selección multiple" || question.type === "Multimedia") {
        answers[question.id] = [];
      } else if (question.type === "Selección simple") {
        answers[question.id] = question.options[0];
      } else {
        answers[question.id] = "";
      }
    });

    setAnswers(answers);
  }, []);

  useEffect(() => {
    const getForm = async () => {
      const form = await getFormOnce(formId);
      if (form) {
        setForm(form);
        initializeAnswers(form.questions);
      }
      setLoading(false);
    };

    getForm();
  }, [formId, initializeAnswers, user]);

  const submit = async (e) => {
    e.preventDefault();

    let shouldReturn = false;
    const newErrors = { ...errors };

    form.questions.forEach((question) => {
      if (
        ((question.type === "Selección múltiple" || question.type === "Multimedia") &&
          !answers[question.id].length)
          || !answers[question.id])
        {
        newErrors[question.id] = true;
        shouldReturn = true;
      } else {
        newErrors[question.id] = false;
      }
    });

    setErrors(newErrors);

    if (shouldReturn) {
      return enqueueSnackbar("Aún tienes preguntas por responder", {
        variant: "error",
      });
    }

    setSubmitting(true);

    const responseData = {
      ...response,
      answers: { ...answers },
      comments: {},
    };

    if (form.settings.onlyOneResponse) {
      responseData.user = { ...user };
    }

    const { error } = await submitResponse(form, responseData);

    if (error) {
      enqueueSnackbar(error.message, { variant: "error" });
      return setSubmitting(false);
    }

    navigate(`/forms/answer/${formId}/sent`);
  };

  if (loading) {
    return (
      <Box>
        <Header />
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Header/>
      <Container sx={{ p: 3 }} maxWidth="md">
        <form onSubmit={submit}>
          <Stack spacing={2}>
            <Card sx={{ p: 3 }} variant="outlined">
              <Typography variant="h5" mb={2}>
                {form.title}
              </Typography>
              <Typography mb={2}>{form.description}</Typography>
              <Typography color="error" variant="caption">
                * Obligatorio
              </Typography>
            </Card>
            {form.questions.map((question, i) => (
              <Card key={i} sx={{ p: 3 }} variant="outlined">
                <Question
                  question={question}
                  answers={answers}
                  setAnswers={setAnswers}
                />
                {(
                  <Alert
                    variant="outlined"
                    severity="error"
                    sx={{ mt: 3, border: "none", p: 0 }}
                  >
                    Esta pregunta es requerida
                  </Alert>
                )}
              </Card>
            ))}
          </Stack>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: { sm: "space-between" },
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ ml: { sm: 1 }, mr: { sm: 2 } }}
            >
              Nunca envíes contraseñas a través de UCAB Forms
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Button
                sx={{ px: 1, mr: 2 }}
                onClick={() => initializeAnswers(form.questions)}
              >
                Borrar respuestas
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                variant="contained"
                sx={{ px: 5 }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </Box>






    // <div className="">
    //   //Inicio de pregunta de checkbox
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //         <RadioGroup
    //           aria-labelledby="demo-controlled-radio-buttons-group"
    //           name="controlled-radio-buttons-group"
    //           className="PreguntaSeleccion"
    //         >
    //           <FormControlLabel value="female" control={<Radio />} label="Female" />
    //           <FormControlLabel value="male" control={<Radio />} label="Male" />
    //           <FormControlLabel value="otres" control={<Radio />} label="Otres" />
    //         </RadioGroup>
    //       </FormControl>
    //     </Stack>
    //   </Box>
    //   //Fin de pregunta de checkbox
    //   //Inicio de pregunta de radio
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //         <RadioGroup
    //           aria-labelledby="demo-controlled-radio-buttons-group"
    //           name="controlled-radio-buttons-group"
    //           className="PreguntaSeleccion"
    //         >
    //           <FormControlLabel control={<Checkbox />} label="Leclerc" />
    //           <FormControlLabel control={<Checkbox />} label="Verstappen" />
    //           <FormControlLabel control={<Checkbox />} label="Latifi" />
    //         </RadioGroup>
    //       </FormControl>
    //     </Stack>
    //   </Box>
    //   //Fin de pregunta de radio
    //   //Inicio de pregunta de fecha
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //         <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale = {esLocale}>
    //           <DateTimePicker
    //             value={selectedDateInicio}
    //             onChange={(newValue) => {
    //               setSelectedDateInicio(newValue);
    //             }}
    //             renderInput={(params) => <TextField {...params} style = {{width: '100%', margin: '0 auto', marginTop: '3px', marginBottom: '10px', borderRadius: '4px'}} size="small"/>}
    //           />
    //         </LocalizationProvider>
    //       </FormControl>
    //     </Stack>
    //   </Box>
    //   //Fin de pregunta de fecha
    //   //Inicio de pregunta de archivo
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //         <input className="RespuestaArchivo" type='file' />
    //       </FormControl>
    //     </Stack>
    //   </Box>
    //   //Fin de pregunta de archivo
    //   //Inicio de pregunta de texto largo
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //         <TextareaAutosize className="RespondTextArea" sx={{margin: "5px 10px"}} maxRows={3} minRows={3}/>
    //       </FormControl>
    //     </Stack>
    //   </Box>
    //   //Fin de pregunta de texto largo
    //   //Inicio de pregunta de texto corta
    //   <Box
    //     component="form"
    //     className = "boxResponder question"
    //     noValidate
    //     autoComplete="off"
    //     sx={{paddingBottom: "10px"}}
    //   >
    //     <Stack sx={{display:'flex'}}>
    //       <p className='DescripcionPregunta'>Nombre de la pregunta</p>
    //       <FormControl>
    //       <TextField id="outlined-basic" inputProps={{ maxLength: 100 }} className="RespuestaCorta" variant="outlined" />
    //       </FormControl>
    //     </Stack>
    //   </Box>
    // </div>
  )
}