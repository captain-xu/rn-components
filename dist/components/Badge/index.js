import React from 'react';
import { Text, View } from 'react-native';
import badgeStyles from './styles';
export class Badge extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, style, textStyle, children } = this.props;
        const styleWrapper = badgeStyles[type + `Wrapper`] || badgeStyles.defaultWrapper;
        const styleText = badgeStyles[type + `Text`] || badgeStyles.defaultText;
        return (React.createElement(View, { style: [
                styleWrapper,
                style
            ] }, React.isValidElement(children) ? children : (React.createElement(Text, { style: [
                styleText,
                textStyle
            ] }, children))));
    }
}
Badge.defaultProps = {
    style: {},
    textStyle: {},
    type: 'default',
    text: ''
};
