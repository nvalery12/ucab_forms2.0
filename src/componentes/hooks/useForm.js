import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getForm } from "../../api/forms";

const FormContext = createContext();

const useForm = () => {
  return useContext(FormContext);
};

const FormProvider = ({ children }) => {
  const { id: formId } = useParams();
  const [form, setForm] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribeForm = getForm(formId, (form) => {
      setForm(form);
      setLoading(false);
    });




    return () => {
      unsubscribeForm();
    };
  }, [formId]);

  const value = {
    form,
    setForm,
    questions,
    setQuestions,
    responses,
    loading,
    current,
    setCurrent,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export { useForm, FormProvider };