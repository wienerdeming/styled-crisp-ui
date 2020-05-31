import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputLabel from '../InputLabel'
import InputError from '../InputError'
import InputBase from './InputBase'
import InputWrapper from './InputWrapper'

const StyledWrapper = styled(InputWrapper)`
  position: unset;
`

const InputIcon = icon => styled(icon)`
  color: ${props => props.theme.cube.palette?.secondary?.light || props.theme.cube.lightGreyColor};
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 15px;
  transition: all 300ms;
  transform: translateY(-50%);
`

const StyledInput = styled(forwardRef((props, ref) => <InputBase {...props} ref={ref}/>))`
  padding-left: 50px;
  :focus + svg {
    color: ${props =>
    props.error
      ? (props.theme.cube.palette?.danger?.main || props.theme.cube.colorRed)
      : (props.theme.cube.palette?.primary?.main || props.theme.cube.primaryColor)};
  }
`

const IconInput = forwardRef(({ icon, label, ...props }, ref) => {
  const Icon = InputIcon(icon)
  return (
    <StyledWrapper error={props.error}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <StyledInput {...props} ref={ref}/>
        <Icon />
      </InputWrapper>
      <InputError>{props.error}</InputError>
    </StyledWrapper>
  )
})

IconInput.propTypes = {
  icon: PropTypes.func.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
}

export default IconInput
