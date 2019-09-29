import { StyleSheet } from 'react-native'

// 品牌色
const mainBrandColors = {
  mainBrandPrimary: '#FF542A',
  mainBrandPrimaryDark: '#FF3B2D',
  mainBrandPrimaryLight: '#FF5E40',
  mainBrandSecondary: '#FF542A',
  mainBrandSecondaryYellow: '#FF9634',
  mainBrandSecondaryGray: '#9E9E9E',
  mainBrandSecondaryBlue: '#1DB6F0',
}
// 灰度
const mainGrayColors = {
  mainGrayBase: '#333',    // 正文，主标题
  mainGrayLight: '#9E9E9E',  // 副标题
  mainGrayLighter: '#C8C8C8',
  mainGrayLightest: '#EAEAEA'
}
// 背景色
const mainFillColors = {
  mainFillBase: '#ffffff',
  mainFillGray: '#F3F3F3',
  mainFillColored: '#FFFAF9',
}
// 字体尺寸
const mainFontSize = {
  mainFontSizeXS: 10,
  mainFontSizeS: 12,
  mainFontSizeM: 14,
  mainFontSizeL: 16,
  mainFontSizeXL: 20,
  mainFontSizeX2L: 27,
}

const mainSpacing = {
  // 水平间距
  mainHSpacingS: 4,
  mainHSpacingM: 8,
  mainHSpacingL: 12,
  mainHSpacingXL: 16,
  mainHSpacingX2L: 20,
  // 垂直间距
  mainVSpacingXS: 2,
  mainVSpacingS: 4,
  mainVSpacingM: 8,
  mainVSpacingL: 10,
  mainVSpacingXL: 12,
  mainVSpacingX2L: 16,
  mainVSpacingX3L: 18,
  mainVSpacingX4L: 20
}
// 圆角
const mainRadius = {
  mainRadiusXS: 2,
  mainRadiusS: 4,
  mainRadiusM: 6,
  mainRadiusL: 8
}
const mainBorder = {
  mainBorderWidth: StyleSheet.hairlineWidth,
  mainBorderColor: '#EAEAEA',
  mainBorderColorLight: '#EFEFEF',
  mainBorderColorDark: '#E0E0E0',
  mainBorderColorDarker: '#DFDFDF'
}

const variables: any = {
  ...mainBrandColors,
  ...mainGrayColors,
  ...mainFillColors,
  ...mainFontSize,
  ...mainSpacing,
  ...mainRadius,
  ...mainBorder,
}



function useTheme(args = {}) {
  Object.assign(variables, args)
  return variables
}

export default variables

export {
  useTheme
}
