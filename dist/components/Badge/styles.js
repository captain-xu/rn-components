import { StyleSheet } from 'react-native';
import variables from '../../common/styles/variables';
const defaultWrapper = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    paddingHorizontal: variables.mainSpacingSM,
    backgroundColor: variables.mainBrandPrimary,
    borderRadius: variables.mainRadiusL
};
const defaultText = {
    fontSize: variables.mainFontSizeS,
    color: '#fff'
};
const hollowWrapper = {
    ...defaultWrapper,
    backgroundColor: 'transparent'
};
const hollowText = {
    ...defaultText,
    color: variables.mainBrandPrimary
};
export default StyleSheet.create({
    defaultWrapper,
    defaultText,
    hollowWrapper,
    hollowText,
});
