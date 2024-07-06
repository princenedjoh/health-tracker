import Button from "@/components/button/button"
import Profile from "@/components/profile/profile"
import { retrieveLogs, retrieveLogsDraft, storeLogs } from "@/context/asyncStorage"
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
        const logs = await retrieveLogsDraft()
        logs &&  await storeLogs(logs)
        const log = await retrieveLogs()
        await setItems()
        router.navigate('logging')
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