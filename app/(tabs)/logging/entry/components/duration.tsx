import EntryContainer from "@/components/container/entryContainer"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { TextInput } from "react-native"

const Duration = ({
    value,
    setValue
} : {
    value : string | undefined
    setValue : React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
    return (
        <EntryContainer>
            <Flex
                height={100}
                padding={5}
                justify="space-between"
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
                    value={value}
                    onChangeText={setValue}
                />
            </Flex>
        </EntryContainer>
    )
}
export default Duration