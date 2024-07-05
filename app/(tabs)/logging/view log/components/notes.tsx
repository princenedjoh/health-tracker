import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Notes = () => {
    return (
        <EntryContainer
            title="Notes"
        >
            <Flex
                paddingVertical={15}
                padding={5}
                justify="space-between"
            >
                <AppTypography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint
                </AppTypography>
            </Flex>
        </EntryContainer>
    )
}
export default Notes