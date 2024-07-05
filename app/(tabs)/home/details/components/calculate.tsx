import Container from "@/components/container/container"
import Group from "@/components/settings/group"
import { optionsTypes } from "@/components/settings/option"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { FontAwesome } from "@expo/vector-icons"
import { View } from "react-native"

const Calculate = () => {
    return (
        <Flex
            direction="column"
        >
            <Container
                title="How Heart beat is calculated"
            >
                <AppTypography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
Maxime mollitia,molestiae quas vel sint commodi 
repudiandae consequuntur voluptatum laborum
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Maxime mollitia,molestiae quas vel sint commodi 
repudiandae consequuntur voluptatum laborum
                </AppTypography>
            </Container>
        </Flex>
    )
}
export default Calculate