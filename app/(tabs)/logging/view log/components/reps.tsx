import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Reps = () => {
    return (
        <EntryContainer
            title="Sets / Reps"
            description="for strength training exercises"
        >
            <Flex
                paddingVertical={15}
                padding={5}
                justify="space-between"
            >
                <AppTypography>
                    30 reps
                </AppTypography>
            </Flex>
        </EntryContainer>
    )
}
export default Reps