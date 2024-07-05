import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Distance = () => {
    return (
        <EntryContainer
            title="Distance"
            description="for applicable exercises like running, cycling"
        >
            <Flex
                padding={5}
                paddingTop={15}
                justify="space-between"
            >
                <Flex
                    flex={1}
                >
                    <AppTypography>
                        200
                    </AppTypography>
                </Flex>
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                    size={TypographySize.lg2}
                >
                    km
                </AppTypography>
            </Flex>
        </EntryContainer>
    )
}
export default Distance