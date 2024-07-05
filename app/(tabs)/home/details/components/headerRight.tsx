import Button from "@/components/button/button"
import Profile from "@/components/profile/profile"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { Octicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

const DetailsRight = () => {
    return (
        <Flex
            width={'auto'}
            align="center"
            gap={12}
        >
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
export default DetailsRight