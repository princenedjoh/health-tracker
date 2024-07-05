import Container from "@/components/container/container"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { View } from "react-native"
import DropShadow from "react-native-drop-shadow"

const HoverShadowContainer = () => {
    return (
        <DropShadow
            style={{
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.25,
                shadowRadius: 8,
            }}
        >
            <Container
                style={{
                    backgroundColor : theme.colors.bg.primary,
                    padding : 15
                }}
            >
                <Flex
                    justify="space-between"
                >
                    <Flex
                        flex={1}
                    >
                        <AppTypography>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit.
                            Maxime mollitia,molestiae quas vel sint 
                            commodi repudiandae consequuntur 
                            voluptatum laborum
                        </AppTypography>
                    </Flex>
                    <View
                        style={{
                            width : 40,
                            height : 40,
                            backgroundColor : theme.colors.bg.secondary,
                            borderRadius : 10
                        }}
                    >
                        <Flex
                            justify="center"
                            align="center"
                            height={'100%'}
                        >
                            <FontAwesome5
                                name='location-arrow'
                                color={theme.colors.bg.primary}
                                size={20}
                            />
                        </Flex>
                    </View>
                </Flex>
            </Container>
        </DropShadow>
    )
}
export default HoverShadowContainer