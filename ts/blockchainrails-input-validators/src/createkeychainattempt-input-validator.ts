// @ts-ignore
import validate from './createkeychainattempt-generated'

type ValidationResult = {
  isValid: boolean
  errors?: any[]
}

export const validateCreateKeychainAttempt = (data: any): ValidationResult => {
  const result = validate(data)

  if (result) {
    return { isValid: true }
  } else {
    const { errors } = validate as any
    return { isValid: false, errors }
  }
}
