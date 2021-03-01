import ErrorMessage from '../../Fields/Error'
import Label from '../../Fields/Label'
import Radio from '../../Fields/Radio'

/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'

const styles = {
  fullWidth: {
    gridColumnStart: '1',
    gridColumnEnd: '3'
  }
}

const QuestionRadio = ({ component, question, useForm }) => {
  const { register, errors } = useForm
  const CustomComponent = ({ component }) => component(question, useForm)

  return component ? (
    <CustomComponent component={component} />
  ) : (
    <div
      sx={
        question.isFullWidth
          ? {
              ...(question.isFullWidth && styles.fullWidth),
              variant: 'forms.radioContainerFullWidth'
            }
          : {
              variant: 'forms.radioContainer'
            }
      }
    >
      <Label key={question.name}>
        <Radio
          name={question.name}
          value={question.value}
          {...question.registerConfig}
          ref={register({
            ...question.registerConfig
          })}
        />
        <p sx={{ variant: 'forms.radio.text' }}>{question.label}</p>
      </Label>

      {errors[question.name] && errors[question.name].type === 'required' && (
        <ErrorMessage
          message={question.errorMessages && question.errorMessages.required}
        />
      )}
    </div>
  )
}

export default QuestionRadio
