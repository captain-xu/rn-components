import React from 'react'

import {
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native'
import badgeStyles from './styles'

export interface BadgeProps {
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  type?: 'default' | 'hollow'
  text?: any
}

export class Badge extends React.Component<BadgeProps, any> {
  static defaultProps = {
    style: {},
    textStyle: {},
    type: 'default',
    text: ''
  }

  constructor(props) {
    super(props)
  }

  render () {
    const { type, style, textStyle, children } = this.props

    const styleWrapper = badgeStyles[type + `Wrapper`] || badgeStyles.defaultWrapper
    const styleText = badgeStyles[type + `Text`] || badgeStyles.defaultText

    return (
      <View
        style={[
          styleWrapper,
          style
        ]}
      >

        {
          React.isValidElement(children) ? children : (
            <Text
              style={[
                styleText,
                textStyle
              ]}
            >{children}</Text>
          )
        }
      </View>
    )
  }
}
