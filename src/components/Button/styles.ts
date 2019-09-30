import { StyleSheet } from 'react-native'
import variables from '../../common/styles/variables'

const defaultWrapper = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  paddingHorizontal: variables.mainSpacingL,
  paddingVertical: variables.mainSpacingM,

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

const primaryHollowWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainBrandPrimary,
  backgroundColor: 'transparent'
}

const primaryHollowText = {
  ...defaultText,
  color: variables.mainBrandPrimary
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

const secondaryHollowWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainBrandSecondary,
  backgroundColor: 'transparent'
}

const secondaryHollowText = {
  ...defaultText,
  color: variables.mainBrandSecondary
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

const disabledHollowWrapper = {
  ...defaultWrapper,
  borderColor: variables.mainGrayLightest,
  backgroundColor: 'transparent'
}

const disabledHollowText = {
  ...defaultText,
  color: variables.mainGrayLightest
}

export default StyleSheet.create({
  defaultWrapper,
  defaultText,

  primaryWrapper,
  primaryText,
  primaryHollowWrapper,
  primaryHollowText,

  secondaryWrapper,
  secondaryText,
  secondaryHollowWrapper,
  secondaryHollowText,

  disabledWrapper,
  disabledText,
  disabledHollowWrapper,
  disabledHollowText,
} as any)
