import { images } from "@/assets/dev"
import Button from "@/components/button/button"
import ImageBG from "@/components/imgbg/imgbg"
import AppTypography, { Title } from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold, TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"
import { View } from "react-native"

const Right = () => {
    return (
        <LinearGradient
            colors={[`${theme.colors.bg.primary}`, `#07181c`]}
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
                    gap={8}
                >
                    <Flex
                        align="center"
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
                    <Flex
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
                    </Flex>
                </Flex>
                    <Button
                        paddingVertical={12}
                        style={{
                            backgroundColor : `#007AFF${hexOpacity(15)}`
                        }}
                        onPress={()=>router.navigate('home/details')}
                    >
                        See more...
                    </Button>
            </Flex>
        </LinearGradient>
    )
}
export default Right