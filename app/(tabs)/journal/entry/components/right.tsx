import Button from "@/components/button/button"
import Profile from "@/components/profile/profile"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { TouchableOpacity } from "react-native"

const Right = () => {
    return (
        <Flex
            width={'auto'}
            align="center"
            gap={4}
        >
            <Button>
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
export default Right