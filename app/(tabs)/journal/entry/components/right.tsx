import Button from "@/components/button/button"
import Profile from "@/components/profile/profile"
import { retrieveJournals, retrieveJournalsDraft, storeJournals } from "@/context/asyncStorage"
import { DataContext } from "@/context/dataContext"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useContext } from "react"
import { TouchableOpacity } from "react-native"

const EntryRight = () => {
    const {setItems} = useContext(DataContext)
    const handleSave = async () => {
        const journals = await retrieveJournalsDraft()
        journals &&  await storeJournals(journals)
        const journal = await retrieveJournals()
        await setItems()
        router.navigate('journal')
    }
    return (
        <Flex
            width={'auto'}
            align="center"
            gap={4}
        >
            <Button
                onPress={handleSave}
            >
                Save
            </Button>
            <TouchableOpacity>
                <Flex
                    align="center"
                >
                    <MaterialCommunityIcons 
                        name="delete" 
                        color={theme.colors.text.secondary}
                        size={20}
                    />
                    <AppTypography>
                        Clear
                    </AppTypography>
                </Flex>
            </TouchableOpacity>
        </Flex>
    )
}
export default EntryRight