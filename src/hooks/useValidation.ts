import React, { useEffect, useState } from 'react';

const useValidation = (value: string, validations: any) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLength, setMinLegth] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLegth(true) : setMinLegth(false)
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
            }
        }
    }, [validations, value])

    useEffect(() => {
        if (isEmpty || minLength) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLength])

    return { isEmpty, minLength , inputValid}
};

export default useValidation;