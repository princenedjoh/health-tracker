import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { sizes } from "@/utils/sizes"
import { ReactNode } from "react"
import { StyleProp, View, ViewStyle } from "react-native"

const Container = ({
    children,
    style,
    title
} : {
    children? : ReactNode
    style? : StyleProp<ViewStyle>,
    title? : string | ReactNode
}) => {
    return (
        <>
            {
                title &&
                <Flex
                    paddingLeft={10}
                    width={'auto'}
                >
                    <AppTypography
                        bold={TypographyBold.sm2}
                        textColor={theme.colors.text.primary}
                    >
                        {title}
                    </AppTypography>
                </Flex>
            }
            <View
                style={{
                    width : '100%',
                    backgroundColor : theme.colors.bg.secondary,
                    padding : sizes.marginSM,
                    borderRadius : 10,
                    ...(style as object || {}),
                }}
            >
                {children}
            </View>
        </>
    )
}
export default Container