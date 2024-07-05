import Container from "@/components/container/container"
import AppTypography, { Title } from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { FontAwesome5 } from "@expo/vector-icons"
import { TouchableOpacity, View } from "react-native"

const SuggestionCard = ({
    backgroundColor,
    onPress
} : {
    backgroundColor : string,
    onPress? : () => void
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Container
                style={{
                    backgroundColor : backgroundColor,
                }}
            >
                <Flex
                    direction="column"
                    gap={40}
                >
                    <Flex
                        justify="space-between"
                    >
                        <Title
                            textColor={theme.colors.text.tetiary}
                        >
                            Suggestion
                        </Title>
                        <View
                            style={{
                                width : 50,
                                height : 50,
                                borderRadius : 100,
                                backgroundColor : `${theme.colors.bg.primary}${hexOpacity(30)}`,
                                display : 'flex',
                                justifyContent : "center",
                                alignItems : 'center'
                            }}
                        >
                            <FontAwesome5 
                                name='location-arrow'
                                color={theme.colors.text.tetiary}
                                size={20}
                            />
                        </View>
                    </Flex>
                    <AppTypography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,molestiae quas vel sint commodi 
                        repudiandae consequuntur voluptatum laborum
                    </AppTypography>
                </Flex>
            </Container>
        </TouchableOpacity>
    )
}
export default SuggestionCard