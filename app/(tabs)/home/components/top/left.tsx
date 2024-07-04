import { images } from "@/assets/dev"
import Button from "@/components/button/button"
import ImageBG from "@/components/imgbg/imgbg"
import AppTypography, { Title } from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold, TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { FontAwesome } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { View } from "react-native"

const Left = () => {
    return (
        <LinearGradient
            colors={[`#4b2c2a`, `${theme.colors.bg.primary}`]}
            style={{
                flex : 1,
                backgroundColor : 'red',
                padding : 10,
                height : 340,
                borderRadius : 10,
                position : 'relative'
            }}
        >
            <View
                style={{
                    position : 'absolute',
                    width : '100%',
                    top : 25,
                    right : 10,
                    opacity : 0.7
                }}
            >
                <ImageBG
                    source={images.heart3D}
                    width={200}
                    height={200}
                    resizeMode="contain"
                />
            </View>
            <Flex
                direction="column"
                height={'100%'}
                justify="space-between"
            >
                <Flex
                    direction="column"
                >
                    <Flex
                        align="center"
                    >
                        <FontAwesome
                            name="heartbeat"
                            color={theme.colors.text.secondary}
                            style={{
                                marginTop : 1
                            }}
                        />
                        <AppTypography
                            bold={TypographyBold.md}
                        >
                            Heart Beat
                        </AppTypography>
                    </Flex>
                    <Flex
                        align="center"
                    >
                        <Title
                            size={TypographySize.lg}
                        >
                            70 BPM
                        </Title>
                    </Flex>
                </Flex>
                <Flex
                    direction="column"
                    gap={10}
                >
                    <AppTypography>
                        molestiae quas vel sint 
                        consequuntur kdsj numquam blanditiis ajd 
                        fugiat iusto fuga roe
                    </AppTypography>
                    <Button
                        paddingVertical={12}
                        style={{
                            backgroundColor : `#007AFF${hexOpacity(15)}`
                        }}
                    >
                        New Entry +
                    </Button>
                </Flex>
            </Flex>
        </LinearGradient>
    )
}
export default Left