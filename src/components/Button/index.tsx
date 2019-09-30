import React from 'react'

import {
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from 'react-native'
import buttonStyles from './styles'
import variables from '../../common/styles/variables'

const fontSizeMap = {
  lg: variables.mainFontSizeXL,
  md: variables.mainFontSizeL,
  sm: variables.mainFontSizeM
}

const paddingMap = {
  lg: {
    paddingHorizontal: variables.mainSpacingX6L,
    paddingVertical: variables.mainSpacingX4L
  },
  md: {
    paddingHorizontal: variables.mainSpacingX4L,
    paddingVertical: variables.mainSpacingX2L
  },
  sm: {
    paddingHorizontal: variables.mainSpacingX2L,
    paddingVertical: variables.mainSpacingXL
  }
}

export interface ButtonProps {
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  type?: 'default' | 'primary'| 'secondary' | 'disabled'
  size?: 'sm' | 'md' | 'lg'
  children?: any
  disabled?: boolean
  hollow?: boolean
  onPress?: Function
}

export class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    style: {},
    textStyle: {},
    type: 'default',
    size: 'md',
    disabled: false,
    hollow: false,
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
    const { type, disabled, style, textStyle, size, children, hollow } = this.props

    const styleWrapper = buttonStyles[type + `${hollow ? 'Hollow' : ''}Wrapper`] || buttonStyles.defaultWrapper
    const styleText = buttonStyles[type + `${hollow ? 'Hollow' : ''}Text`] || buttonStyles.defaultText

    return (
      <TouchableOpacity
        style={[
          styleWrapper,
          {
            ...(paddingMap[size] || paddingMap['md'])
          },
          style
        ]}
        disabled={disabled}
        onPress={() => this.handlePress()}
      >

        {
          React.isValidElement(children) ? children : (
            <Text
              style={[
                styleText,
                {
                  fontSize: fontSizeMap[size] || fontSizeMap['md']
                },
                textStyle
              ]}
            >{children}</Text>
          )
        }
      </TouchableOpacity>
    )
  }
}
