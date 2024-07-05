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
import Chart from "./components/chart"
import { hexOpacity } from "@/utils/hexOpacity"

const Details = () => {
    return (
        <Safescroll>
            <Flex
                justify="center"
                background={`${theme.colors.bg.secondary}${hexOpacity(50)}`}
                padding={10}
                paddingVertical={15}
                rounded={10}
            >
                <Chart />
            </Flex>
            <Dates />
            <Average />
            <Calculate />
        </Safescroll>
    )
}
export default Details