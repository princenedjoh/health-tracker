import Button from "@/components/button/button"
import Confirmation from "@/components/modal/confirmation"
import Profile from "@/components/profile/profile"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome6, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import haptics from '@/utils/haptics';

const ViewJournalRight = () => {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const handleConfirm = () => {
        router.back()
    }
    return (
        <>
            {
                showConfirmation &&
                <Confirmation 
                    isVisible={showConfirmation}
                    setIsVisible={setShowConfirmation}
                    onConfirm={handleConfirm}
                />
            }
            <Flex
                width={'auto'}
                align="center"
                gap={4}
            >
                <Button
                    onPress={()=>router.navigate('journal/entry')}
                >
                    Edit
                </Button>
                <TouchableOpacity
                    onPress={()=>{
                        haptics.medium() 
                        return setShowConfirmation(true)
                    }}
                >
                    <Flex
                        align="center"
                    >
                        <MaterialCommunityIcons 
                            name="delete" 
                            color={theme.colors.text.secondary}
                            size={20}
                        />
                        <AppTypography>
                            Delete
                        </AppTypography>
                    </Flex>
                </TouchableOpacity>
            </Flex>
        </>
    )
}
export default ViewJournalRight