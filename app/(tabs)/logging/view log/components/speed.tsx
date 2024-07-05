import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Speed = () => {
    return (
        <EntryContainer
            title="Pace / Speed"
            description="Average pace or speed during the session"
        >
            <Flex
                paddingVertical={15}
                padding={5}
                justify="space-between"
            >
                <Flex
                    flex={1}
                >
                    <AppTypography>
                        53
                    </AppTypography>
                </Flex>
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                    size={TypographySize.lg2}
                >
                    m/s
                </AppTypography>
            </Flex>
        </EntryContainer>
    )
}
export default Speed