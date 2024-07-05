import Container from "@/components/container/container"
import Safescroll from "@/components/safeScroll/safescroll"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { TextInput, View } from "react-native"
import DropShadow from "react-native-drop-shadow"
import HoverShadowContainer from "./components/shadow"

const Entry = () => {
    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={10}
                align="center"
            >
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                >
                    July 3, 2024 at 4:20 AM
                </AppTypography>
                <Container
                    style={{
                        padding : 10,
                        minHeight : 300,
                        borderRadius : 20,
                        backgroundColor : theme.colors.bg.primary
                    }}
                >
                    <Flex
                        direction="column"
                        gap={10}
                    >
                        <HoverShadowContainer />
                        <Flex
                            paddingHorizontal={10}
                        >
                            <AppTypography
                                lineHeight={23}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,molestiae quas vel sint commodi 
                                repudiandae consequuntur voluptatum laborum

                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,molestiae quas vel sint commodi 
                                repudiandae consequuntur voluptatum laborum

                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,molestiae quas vel sint commodi 
                                repudiandae consequuntur voluptatum laborum

                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,molestiae quas vel sint commodi 
                                repudiandae consequuntur voluptatum laborum
                            </AppTypography>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </Safescroll>
    )
}
export default Entry