import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface ButtonProps {
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    type?: 'default' | 'primary' | 'secondary' | 'disabled';
    size?: 'sm' | 'md' | 'lg';
    children?: any;
    disabled?: boolean;
    hollow?: boolean;
    onPress?: Function;
}
export declare class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        style: {};
        textStyle: {};
        type: string;
        size: string;
        disabled: boolean;
        hollow: boolean;
        onPress: any;
    };
    constructor(props: any);
    handlePress(): void;
    render(): JSX.Element;
}
