import theme from "@/styles/theme"
import Container from "./container"
import DropShadow from "react-native-drop-shadow"
import Flex from "@/styles/components/flex"
import AppTypography from "@/styles/components/appTypography"
import { TypographyBold } from "@/styles/components/types"
import { View } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { ReactNode } from "react"

const EntryContainer = ({
    children,
    outerBg,
    innerBg,
    title,
    icon,
    description
} : {
    children? : ReactNode
    outerBg? : string,
    innerBg? : string,
    title? : string,
    icon? : ReactNode
    description? : string
}) => {
    return (
        <Container
            style={{
                backgroundColor : outerBg ?? theme.colors.bg.tetiary,
                borderRadius : 15,
                padding : 7
            }}
        >
            <DropShadow
                style={{
                    shadowColor: 'black',
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.35,
                    shadowRadius: 8,
                    width : '100%'
                }}
            >
                <Container
                    style={{
                        backgroundColor : innerBg ?? theme.colors.bg.secondary,
                        padding : 8
                    }}
                >
                    <Flex
                        justify="space-between"
                        align="center"
                        paddingLeft={5}
                    >
                        <Flex
                            width={'auto'}
                            direction="column"
                            gap={1}
                        >
                            <AppTypography
                                bold={TypographyBold.md}
                            >
                                {title ?? 'Duration'}
                            </AppTypography>
                            {
                                description &&
                                <AppTypography
                                    textColor={theme.colors.text.tetiary}
                                >
                                    {description}
                                </AppTypography>
                            }
                        </Flex>
                        <View
                            style={{
                                padding : 8,
                                borderRadius : 5,
                                backgroundColor : theme.colors.bg.tetiary
                            }}
                        >
                            {
                                icon ??
                                <Entypo
                                    name="time-slot"
                                    color={theme.colors.text.tetiary}
                                    size={18}
                                />
                            }
                        </View>
                    </Flex>
                </Container>
            </DropShadow>
            {children}
        </Container>
    )
}
export default EntryContainer