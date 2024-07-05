import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Duration = () => {
    return (
        <EntryContainer>
            <Flex
                paddingVertical={15}
                padding={5}
                justify="space-between"
            >
                <AppTypography>
                    30 minutes
                </AppTypography>
            </Flex>
        </EntryContainer>
    )
}
export default Duration