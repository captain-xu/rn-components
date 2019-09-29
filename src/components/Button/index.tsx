import React from 'react'

import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from 'react-native'
import buttonStyles from './styles'
export { buttonStyles }
import variables from '../../common/styles/variables'

const fontSizeMap = {
  lg: variables.buttonLFontSize,
  md: variables.buttonMFontSize,
  sm: variables.buttonSFontSize
}

const paddingMap = {
  lg: {
    paddingHorizontal: variables.buttonLHSpacing,
    paddingVertical: variables.buttonLVSpacing
  },
  md: {
    paddingHorizontal: variables.buttonMHSpacing,
    paddingVertical: variables.buttonMVSpacing
  },
  sm: {
    paddingHorizontal: variables.buttonSHSpacing,
    paddingVertical: variables.buttonSVSpacing
  }
}

export interface ButtonProps {
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  textColorInverse?: boolean
  type?: 'default' | 'primary' | 'danger' | 'info' | 'success' | 'warning' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children?: any
  disabled?: boolean
  onPress?: Function
}

export class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    style: {},
    textStyle: {},
    textColorInverse: false,
    type: 'default',
    size: 'md',
    disabled: false,
    onPress: null,
  }

  constructor(props) {
    super(props)
  }

  handlePress () {
    const { disabled, onPress } = this.props
    if (disabled) {
      return
    }

    if (typeof onPress === 'function') {
      onPress()
    }
  }

  render () {
    const { type, disabled, style, textStyle, size , children, textColorInverse } = this.props

    const styleWrapper = buttonStyles[type + 'Wrapper'] || buttonStyles.defaultWrapper
    const styleText = buttonStyles[type + 'Text'] || buttonStyles.defaultText

    const inverseStyle = textColorInverse && type !== 'default' && type !== 'text' ? { color: variables.mtdGrayBase } : {}

    return (
      <TouchableOpacity
        style={[
          styleWrapper,
          {
            opacity: disabled ? variables.buttonActiveOpacity : 1,
            ...(paddingMap[size] || paddingMap['md'])
          },
          style
        ]}
        disabled={disabled}
        onPress={() => this.handlePress()}
        activeOpacity={disabled ? 1 : variables.buttonActiveOpacity}
      >

        {
          React.isValidElement(children) ? children : (
            <Text
              style={[
                styleText,
                {
                  fontSize: fontSizeMap[size] || fontSizeMap['md']
                },
                inverseStyle,
                textStyle
              ]}
            >{children}</Text>
          )
        }
      </TouchableOpacity>
    )
  }
}
