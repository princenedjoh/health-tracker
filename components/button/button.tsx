import { TouchableOpacity, DimensionValue, ActivityIndicator, ViewStyle, StyleProp } from 'react-native';
import AppTypography from "../../styles/components/appTypography"
import theme from "../../styles/theme"
import { ReactNode } from "react"
import { TypographyBold } from "../../styles/components/types"
import haptics from '@/utils/haptics';

const Button = ({
    children,
    onPress,
    rounded,
    paddingVertical,
    loading,
    size,
    style
} : {
    children : ReactNode,
    onPress? : ()=>void,
    rounded? : number
    paddingVertical? : DimensionValue
    loading? : boolean
    size? : {
        height? : DimensionValue,
        width? : DimensionValue
    }
    style? : StyleProp<ViewStyle>
}) => {
    const handlePress = () => {
        haptics.heavy()
        onPress && onPress()
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[{
                borderRadius : rounded ?? 10,
                backgroundColor : theme.colors.bg.secondary,
                paddingHorizontal : 15,
                paddingVertical : paddingVertical ?? 8,
                height : size?.height,
                width : size?.width,
                justifyContent : "center",
                alignItems : "center"
            }, style]}
        >
            <AppTypography
                textColor={theme.colors.text.primary}
                bold={TypographyBold.md}
            >
                {
                    loading ?
                    <ActivityIndicator
                        color={'white'} 
                        size={'small'}
                    />
                    :
                    children
                }
            </AppTypography>
        </TouchableOpacity>
    )
}

export default Button