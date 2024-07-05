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
                height={100}
                padding={5}
                justify="space-between"
            >
                <Flex
                    flex={1}
                >
                    <TextInput
                        multiline={true}
                        placeholder="Type in duration here"
                        style={{
                            height : '100%',
                            color : theme.colors.text.secondary,
                            display : 'flex',
                            flex : 1
                        }}
                    />
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