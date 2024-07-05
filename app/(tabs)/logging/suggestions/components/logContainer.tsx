import { images } from "@/assets/dev"
import Button from "@/components/button/button"
import ImageBG from "@/components/imgbg/imgbg"
import AppTypography, { Title } from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold, TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { View } from "react-native"

const LogContainer = ({
    color,
    gap
} : {
    color? : string,
    gap? : number
}) => {
    return (
        <LinearGradient
            colors={[`${theme.colors.bg.primary}`, color ?? `#07181c`]}
            style={{
                flex : 1,
                backgroundColor : 'red',
                padding : 10,
                borderRadius : 10,
                position : 'relative'
            }}
        >
            <View
                style={{
                    position : 'absolute',
                    bottom : -10,
                    right : -10,
                    zIndex : -1
                }}
            >
                <FontAwesome5
                    name="running"
                    color={`${theme.colors.text.tetiary}${hexOpacity(10)}`}
                    size={100}
                    style={{
                        marginTop : 1,
                    }}
                />
            </View>
            <Flex
                direction="column"
                height={'100%'}
                justify="space-between"
            >
                <Flex
                    direction="column"
                    gap={gap ?? 50}
                >
                    <Flex
                        justify="space-between"
                    >
                        <Flex
                            align="center"
                            width={'auto'}
                        >
                            <FontAwesome5
                                name="running"
                                color={theme.colors.text.secondary}
                                style={{
                                    marginTop : 1
                                }}
                            />
                            <AppTypography
                                bold={TypographyBold.md}
                            >
                                Running
                            </AppTypography>
                        </Flex>
                        <View
                            style={{
                                width : 50,
                                height : 50,
                                borderRadius : 100,
                                backgroundColor : `${theme.colors.bg.secondary}${hexOpacity(40)}`,
                                display : 'flex',
                                justifyContent : "center",
                                alignItems : 'center'
                            }}
                        >
                            <Ionicons 
                                name='book'
                                color={theme.colors.text.tetiary}
                                size={20}
                            />
                        </View>
                    </Flex>
                    <Flex
                        direction="column"
                        gap={20}
                    >
                        {/* <Flex
                            direction="column"
                            gap={1}
                        >
                            <Title
                                size={TypographySize.lg}
                            >
                                500 km
                            </Title>
                            <AppTypography
                                textColor={theme.colors.text.tetiary}
                            >
                                20 m/s
                            </AppTypography>
                        </Flex> */}
                        <AppTypography>
                            molestiae quas vel sint commodi repudiandae 
                            consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed
                        </AppTypography>
                    </Flex>
                </Flex>
                    <Button
                        paddingVertical={12}
                        style={{
                            backgroundColor : `#007AFF${hexOpacity(15)}`
                        }}
                        onPress={()=>router.push('logging/entry')}
                    >
                        New Entry +
                    </Button>
            </Flex>
        </LinearGradient>
    )
}
export default LogContainer