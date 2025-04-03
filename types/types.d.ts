 import { TouchableOpacityProps, ViewProps } from 'react-native';
 
 
 
 declare interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
    TextStyle?: string;
 }

 declare interface InfoCardsProps extends ViewProps {
    title: string;
    className?: string;
    cardImage?: React.ComponentType<any>;
    TextStyle?: string;
 }