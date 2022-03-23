// @ts-ignore
import validate from './createsignatureinput-generated'

type ValidationResult = {
  isValid: boolean
  errors?: any[]
}

export const validateCreateSignatureInput = (data: any): ValidationResult => {
  const result = validate(data)

  if (result) {
    return { isValid: true }
  } else {
    const { errors } = validate as any
    return { isValid: false, errors }
  }
}
