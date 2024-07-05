import Safescroll from "@/components/safeScroll/safescroll"
import Duration from "./components/duration"
import theme from "@/styles/theme"
import Flex from "@/styles/components/flex"
import Intensity from "./components/intensity"
import AppTypography from "@/styles/components/appTypography"
import Distance from "./components/distance"
import Speed from "./components/speed"
import Reps from "./components/reps"

const LogEntry = () => {
    return (
        <Safescroll
            scrollStyle={{
                backgroundColor : theme.colors.bg.secondary,
                paddingTop : 60
            }}
        >
            <Flex
                height={'100%'}
                direction="column"
                gap={20}
                align="center"
            >
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                >
                    {new Date().toDateString()}
                </AppTypography>
                <Duration />
                <Intensity />
                <Distance />
                <Speed />
                <Reps />
            </Flex>
        </Safescroll>
    )
}
export default LogEntry