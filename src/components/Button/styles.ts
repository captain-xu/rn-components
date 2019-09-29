import { StyleSheet } from 'react-native'
import variables from '../../common/styles/variables'

const defaultWrapper = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  paddingHorizontal: variables.mainHSpacingL,
  paddingVertical: variables.mainVSpacingM,

  borderWidth: StyleSheet.hairlineWidth,
  borderColor: variables.mainBorderColorDarker,

  backgroundColor: '#fff',
  overflow: 'hidden'
}

const defaultText = {
  fontSize: variables.mainFontSizeM,
  color: variables.mainGrayBase
}

const primaryWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainBrandPrimary,
  backgroundColor: variables.mainBrandPrimary
}

const primaryText = {
  ...defaultText,
  color: '#ffffff'
}

const secondaryWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainBrandSecondary,
  backgroundColor: variables.mainBrandSecondary
}

const secondaryText = {
  ...defaultText,
  color: '#ffffff'
}

const disabledWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainGrayLightest,
  backgroundColor: variables.mainGrayLightest
}

const disabledText = {
  ...defaultText,
  color: variables.mainGrayLight
}

export default StyleSheet.create({
  defaultWrapper,
  defaultText,

  primaryWrapper,
  primaryText,

  secondaryWrapper,
  secondaryText,

  disabledWrapper,
  disabledText,
} as any)
