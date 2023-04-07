import  { useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [touch, setTouch] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }
    const onBlur = (e: any) => {
        setTouch(true)
    }

    return {
        value, onChange, onBlur, touch, ...valid, setValue, setTouch
    }
};

export default useInput;