import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import buttonStyles from './styles';
export { buttonStyles };
export interface ButtonProps {
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    textColorInverse?: boolean;
    type?: 'default' | 'primary' | 'secondary' | 'disabled';
    size?: 'sm' | 'md' | 'lg';
    children?: any;
    disabled?: boolean;
    onPress?: Function;
}
export declare class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        style: {};
        textStyle: {};
        textColorInverse: boolean;
        type: string;
        size: string;
        disabled: boolean;
        onPress: any;
    };
    constructor(props: any);
    handlePress(): void;
    render(): JSX.Element;
}
