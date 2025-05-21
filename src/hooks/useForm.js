import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  // hook mantener el estado.
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);
  
  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    setFormState({
      ...formState, // spread operator: mantener todo lo que ya existia.
      [name]: value, // actualizar el valor del input.
    });
    };

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);
  const onResetForm = () => {
    setFormState(initialForm);
  };
  
  const createValidators =() => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);    
  }

  return {
        ...formState, // esto es para desestructurar.
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
  }
}