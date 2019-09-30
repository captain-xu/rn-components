import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyles from './styles';
export { buttonStyles };
import variables from '../../common/styles/variables';
const fontSizeMap = {
    lg: variables.mainFontSizeXL,
    md: variables.mainFontSizeL,
    sm: variables.mainFontSizeM
};
const paddingMap = {
    lg: {
        paddingHorizontal: variables.buttonLHSpacing,
        paddingVertical: variables.buttonLVSpacing
    },
    md: {
        paddingHorizontal: variables.mainSpacingX4L,
        paddingVertical: variables.mainSpacingX2L
    },
    sm: {
        paddingHorizontal: variables.mainSpacingX2L,
        paddingVertical: variables.mainSpacingXL
    }
};
export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    handlePress() {
        const { disabled, onPress } = this.props;
        if (disabled) {
            return;
        }
        if (typeof onPress === 'function') {
            onPress();
        }
    }
    render() {
        const { type, disabled, style, textStyle, size, children, textColorInverse } = this.props;
        const styleWrapper = buttonStyles[type + 'Wrapper'] || buttonStyles.defaultWrapper;
        const styleText = buttonStyles[type + 'Text'] || buttonStyles.defaultText;
        const inverseStyle = textColorInverse && type !== 'default' ? { color: variables.mainGrayBase } : {};
        return (React.createElement(TouchableOpacity, { style: [
                styleWrapper,
                {
                    ...(paddingMap[size] || paddingMap['md'])
                },
                style
            ], disabled: disabled, onPress: () => this.handlePress() }, React.isValidElement(children) ? children : (React.createElement(Text, { style: [
                styleText,
                {
                    fontSize: fontSizeMap[size] || fontSizeMap['md']
                },
                inverseStyle,
                textStyle
            ] }, children))));
    }
}
Button.defaultProps = {
    style: {},
    textStyle: {},
    textColorInverse: false,
    type: 'default',
    size: 'md',
    disabled: false,
    onPress: null,
};
//# sourceMappingURL=index.js.map