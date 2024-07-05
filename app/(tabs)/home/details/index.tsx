import Safescroll from "@/components/safeScroll/safescroll"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { View } from "react-native"
import Dates from "../components/dates"
import Group from "@/components/settings/group"
import { optionsTypes } from "@/components/settings/option"
import Container from "@/components/container/container"
import { FontAwesome } from "@expo/vector-icons"
import { TypographyBold } from "@/styles/components/types"
import Average from "./components/average"
import Calculate from "./components/calculate"

const Details = () => {
    return (
        <Safescroll>
            <View
                style={{
                    height : 300,
                    width : '100%',
                    backgroundColor : theme.colors.bg.secondary,
                    borderRadius : 10
                }}
            >

            </View>
            <Dates />
            <Average />
            <Calculate />
        </Safescroll>
    )
}
export default Details