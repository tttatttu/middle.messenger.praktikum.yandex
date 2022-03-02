interface IValidationInput {
    elementId: string;
    regexp: RegExp | string;
}

interface IInputsValidationResults {
    inputName: string;
    inputValue: string;
    validationOK: boolean;
}

/**
 * Делает валидацию инпута, устанавливая соответствующие классы,
 * при успешной валидации возвращает объект с полями inputName, inputValue и validationOK
 * @param elementId - id инпута
 * @param regexp - регулярное выражение для проверки значения инпута
 * */
export const validateInput = (elementId: string, regexp: RegExp | string): IInputsValidationResults => {
    const input = document.getElementById(elementId) as HTMLInputElement;
    const error = document.getElementById(`${elementId}-error`) as HTMLInputElement;
    const reg = new RegExp(regexp);
    const validationOK = reg.test(input?.value);
    console.log(input?.value)

    if (validationOK) {
        console.log('error')
        error.classList.add('form__error_active');
        error.classList.remove('form__error_normal');
    } else {
        console.log('not')
        error.classList.add('form__error_normal');
        error.classList.remove('form__error_active');
    }

    return {
        validationOK,
        inputName: input.name,
        inputValue: input.value,
    };
};

/**
 * Делает валидацию инпутов, устанавливая соответствующие классы,
 * при успешной прохождении валидации всех инпутов выводит объект в консоль.
 * @param items - параметры IValidateInput
 * */
export const validateInputs = (...items: IValidationInput[]) => {
    const inputsValidationResults = items.map((item) => validateInput(item.elementId, item.regexp));
console.log(inputsValidationResults)
    if (inputsValidationResults.every((item) => item.validationOK)) {
        // eslint-disable-next-line no-console
        console.log(inputsValidationResults.reduce((acc, cur) => Object.assign(acc, { [cur.inputName]: cur.inputValue }), {}));
    }
};
