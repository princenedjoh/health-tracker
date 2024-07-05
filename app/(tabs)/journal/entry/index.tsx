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
                gap={30}
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
                    }}
                >
                    <HoverShadowContainer />
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Write something here..."
                        style={{
                            width : '100%',
                            padding : 10,
                            color : theme.colors.text.secondary,
                            display : 'flex',
                            flex : 1
                        }}
                    />
                </Container>
            </Flex>
        </Safescroll>
    )
}
export default Entry