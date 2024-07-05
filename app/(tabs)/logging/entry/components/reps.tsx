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
                height={100}
                padding={5}
                justify="space-between"
            >
                <TextInput
                    multiline={true}
                    placeholder="Type in pace / speed here"
                    style={{
                        height : '100%',
                        color : theme.colors.text.secondary,
                        display : 'flex',
                        flex : 1
                    }}
                />
            </Flex>
        </EntryContainer>
    )
}
export default Reps