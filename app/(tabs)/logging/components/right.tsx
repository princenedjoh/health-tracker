import Button from "@/components/button/button"
import Profile from "@/components/profile/profile"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { TouchableOpacity } from "react-native"

const Right = () => {
    return (
        <Flex
            width={'auto'}
            align="center"
            gap={12}
        >
            <Button
                onPress={()=>router.push('logging/suggestions')}
            >
                New Entry +
            </Button>
            <TouchableOpacity>
                <Octicons 
                    name="history" 
                    color={theme.colors.text.secondary}
                    size={20}
                />
            </TouchableOpacity>
        </Flex>
    )
}
export default Right