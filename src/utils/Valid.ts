interface ValidationInput {
  elementId: string;
  regexp: RegExp | string;
}

interface InputsValidationResults {
  inputName: string;
  inputValue: string;
  validationOK: boolean;
}

export const validateInput = (elementId: string, regexp: RegExp | string): InputsValidationResults => {
  const input = document.getElementById(elementId) as HTMLInputElement;
  const error = document.getElementById(`${elementId}-error`) as HTMLInputElement;
  const reg = new RegExp(regexp);
  const validationOK = reg.test(input?.value);
  // console.log(input?.id)
  // console.log(error.classList)

  if (input?.id !== 'message') {
    if (validationOK) {
      error?.classList.remove('form__error_active');
      error?.classList.add('form__error_normal');
    } else {
      error?.classList.add('form__error_active');
      error?.classList.remove('form__error_normal');
    }
  }

  return {
    validationOK,
    inputName: input?.name,
    inputValue: input?.value,
  };
};

export const validateInputs = (...items: ValidationInput[]) => {
  const inputsValidationResults = items.map((item) => validateInput(item.elementId, item.regexp));

  if (inputsValidationResults.every((item) => item.validationOK)) {

    const res = inputsValidationResults.reduce((acc, cur) => Object.assign(acc, { [cur.inputName]: cur.inputValue }), {});
    console.log(res)

    return res
  }
};
