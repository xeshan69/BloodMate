 import { TouchableOpacityProps } from 'react-native';
 
 
 
 declare interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
    TextStyle?: string;
 }