import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographySize } from "@/styles/components/types"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Speed = ({
    value,
    setValue
} : {
    value : string | undefined
    setValue : React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
    return (
        <EntryContainer
            title="Pace / Speed"
            description="Average pace or speed during the session"
        >
            <Flex
                height={100}
                padding={5}
                justify="space-between"
            >
                <Flex
                    flex={1}
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
                        value={value}
                        onChangeText={setValue}
                    />
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