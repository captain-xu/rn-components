import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
export interface BadgeProps {
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    type?: 'default' | 'hollow';
    text?: any;
}
export declare class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        style: {};
        textStyle: {};
        type: string;
        text: string;
    };
    constructor(props: any);
    render(): JSX.Element;
}
