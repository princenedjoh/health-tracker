import Confirmation from "@/components/modal/confirmation"
import { storeJournals } from "@/context/asyncStorage"
import { DataContext } from "@/context/dataContext"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { getRelativeTime } from "@/utils/getDate"
import haptics from "@/utils/haptics"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useContext, useState } from "react"
import { TouchableOpacity, View } from "react-native"

const Top = ({
    date,
    index
} : {
    date : Date,
    index : number
}) => {
    const {journals, setItems} = useContext(DataContext)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState<number>()
    const handleDeleteButtonPress = (index : number) => {
        setShowConfirmation(true)
        setDeleteIndex(index)
    }
    const handleConfirm = async () => {
        const updatedJournals = journals && Array.isArray(journals) && journals.filter((item, i : number) => i !== index)
        updatedJournals && await storeJournals(JSON.stringify(updatedJournals))
        await setItems()
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
            <View
                style={{
                    display : 'flex',
                    justifyContent : 'center',
                    width : '100%',
                    paddingLeft : 10,
                    paddingRight : 8,
                    backgroundColor : theme.colors.bg.tetiary,
                    height : 50,
                    position : 'relative',
                    zIndex : 2
                }}
            >
                <Flex
                    justify="space-between"
                    align="center"
                >
                    <AppTypography
                        bold={TypographyBold.md}
                    >
                        {getRelativeTime(date)}
                    </AppTypography>
                    <Flex
                        gap={10}
                        width={'auto'}
                        align="center"
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                haptics.medium()
                                return handleDeleteButtonPress(index)
                            }}
                        >
                            <MaterialCommunityIcons
                                name='delete'
                                color={theme.colors.text.tetiary}
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>router.navigate('journal/entry')}
                        >
                            <View
                                style={{
                                    padding : 9,
                                    borderRadius : 10,
                                    backgroundColor : theme.colors.bg.secondary
                                }}
                            >
                                <MaterialCommunityIcons 
                                    name='square-edit-outline'
                                    color={theme.colors.text.secondary}
                                    size={18}
                                />
                            </View>
                        </TouchableOpacity>
                    </Flex>
                </Flex>
            </View>
        </>
    )
}
export default Top