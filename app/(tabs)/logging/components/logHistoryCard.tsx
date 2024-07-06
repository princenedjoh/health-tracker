import Button from "@/components/button/button"
import Container from "@/components/container/container"
import Confirmation from "@/components/modal/confirmation"
import { storeLogs } from "@/context/asyncStorage"
import { DataContext } from "@/context/dataContext"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useContext, useState } from "react"
import { TouchableOpacity, View } from "react-native"

const LogHistoryCard = ({
    color,
    duration,
    intensity,
    distance,
    notes,
    reps,
    speed,
    index
} : {
    color? : string
    duration? : string,
    intensity? : string,
    distance? : string
    notes? : string
    reps? : number
    speed? : number
    index : number
}) => {
    const {logs, setItems} = useContext(DataContext)
    const tasks = [
        {
            name : 'Duration',
            body : duration
        },
        {
            name : 'Speed',
            body : speed
        },
        {
            name : 'Note',
            body : notes
        },
        {
            name : 'intensity',
            body : intensity
        },
        {
            name : 'distance',
            body : distance
        },
        {
            name : 'speed',
            body : speed
        },
    ]
    let max = 0
    const reducedLogs = tasks.filter((item, i) => {
        if(max < 3 && item.body){
            max++
            return item
        }
    })
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [deleteindex, setDeleteIndex] = useState<number>()
    const handleDelete = () => {
        const updatedLogs = logs && Array.isArray(logs) && logs.filter((item : any, i : number) => deleteindex !== i)
        console.log(typeof updatedLogs, updatedLogs)
        storeLogs(JSON.stringify(updatedLogs))
        setItems()
    }
    const handleDeleteButtonPressed = (index : number) => {
        setDeleteIndex(index)
        setShowConfirmation(true)
    }
    return (
        <>
            {
                showConfirmation &&
                <Confirmation
                    isVisible={showConfirmation}
                    setIsVisible={setShowConfirmation}
                    onConfirm={handleDelete}
                    description="Are you sure you want to delete this log?"
                />
            }
            <TouchableOpacity
                onPress={()=>router.navigate('logging/view log')}
            >
                <Flex
                    direction='column'
                    gap={10}
                >
                    <Flex
                        justify="space-between"
                        gap={10}
                        align="center"
                    >
                        <AppTypography
                            textColor={theme.colors.text.tetiary}
                            bold={TypographyBold.md}
                        >
                            9:00 AM
                        </AppTypography>
                        <Flex
                            gap={10}
                            width={'auto'}
                        >
                            <Button
                                style={{
                                    backgroundColor : 'transparent',
                                    paddingHorizontal : 0
                                }}
                                onPress={()=>handleDeleteButtonPressed(index)}
                            >
                                <MaterialCommunityIcons
                                    name="delete" 
                                    color={theme.colors.text.tetiary}
                                    size={25}
                                />
                            </Button>
                            <Button
                                onPress={()=>router.navigate('logging/entry')}
                            >
                                Edit
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex
                        width={'auto'}
                        gap={10}
                    >
                        <View
                            style={{
                                height : '100%',
                                width : 5,
                                borderRadius : 5,
                                backgroundColor : color ?? theme.colors.bg.tetiary
                            }}
                        >

                        </View>
                        <Flex
                            direction='column'
                            width={'auto'}
                            gap={8}
                            flex={1}
                        >
                            {
                                reducedLogs.map((item, index : number) => (
                                    item.body &&
                                    <Flex
                                        width={'auto'}
                                        gap={10}
                                        align='center'
                                        key={index}
                                    >
                                        <View
                                            style={{
                                                padding : 10,
                                                paddingVertical : 5,
                                                minWidth : 80,
                                                backgroundColor : theme.colors.bg.secondary,
                                                display : 'flex',
                                                alignItems : 'center',
                                                borderRadius : 7
                                            }}
                                        >
                                            <AppTypography>
                                                {item.name}
                                            </AppTypography>
                                        </View>
                                        <Flex
                                            flex={1}
                                        >
                                            <AppTypography>
                                                {item.body}
                                            </AppTypography>
                                        </Flex>
                                    </Flex>
                                ))
                            }
                        </Flex>
                    </Flex>
                </Flex>

            </TouchableOpacity>
        </>
    )
}
export default LogHistoryCard