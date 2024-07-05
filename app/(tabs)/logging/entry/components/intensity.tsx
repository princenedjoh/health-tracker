import EntryContainer from "@/components/container/entryContainer"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import haptics from "@/utils/haptics"
import { hexOpacity } from "@/utils/hexOpacity"
import { useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"

const Intensity = ({
    value,
    setValue
} : {
    value : string | undefined
    setValue : React.Dispatch<React.SetStateAction<string | undefined>>
}) => {
    const [intesities, setIntensities] = useState([
        {
            name : 'High',
            active : false
        },
        {
            name : 'Medium',
            active : false
        },
        {
            name : 'Low',
            active : false
        },
    ])

    const onIntensityChange = (index : number) => {
        setValue(intesities[index].name)
        haptics.medium()
        setIntensities(
            prev => 
                prev.map(
                    (item, i : number) => 
                        index === i 
                        ? {...item, active : !item.active} 
                        : {...item, active : false} 
                )
        )
    }

    const handleClear = () => {
        haptics.medium()
        setIntensities(
            prev => 
                prev.map(
                    (item, i : number) => ({...item, active : false} )
                )
        )
    }
    return (
        <EntryContainer
            title="Intensity"
        >
            <Flex
                padding={5}
                paddingTop={10}
                gap={20}
                align="center"
            >
                {
                    intesities.map((item, index : number) => (
                        <TouchableOpacity
                            style={{
                                padding : 10,
                                borderRadius : 10,
                                backgroundColor : theme.colors.bg.secondary,
                                borderWidth : item.active ? 1 : 0,
                                borderColor : `#32a852${hexOpacity(30)}`
                            }}
                            key={index}
                            onPress={()=>onIntensityChange(index)}
                        >
                            <Flex
                                gap={5}
                                align="center"
                            >
                                <View
                                    style={{
                                        width : 12,
                                        height : 12,
                                        borderRadius : 100,
                                        backgroundColor : item.active ? 'green' : theme.colors.bg.tetiary,
                                    }}
                                >

                                </View>
                                <AppTypography
                                    bold={item.active ? TypographyBold.md : TypographyBold.sm}
                                >
                                    {item.name}
                                </AppTypography>
                            </Flex>
                        </TouchableOpacity>
                    ))
                }
                <TouchableOpacity
                    onPress={handleClear}
                >
                    <AppTypography
                        textColor={theme.colors.text.tetiary}
                        bold={TypographyBold.md}
                    >
                        Clear
                    </AppTypography>
                </TouchableOpacity>
            </Flex>
        </EntryContainer>
    )
}
export default Intensity