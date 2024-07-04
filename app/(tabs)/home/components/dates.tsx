import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { ScrollView, TouchableOpacity, View } from "react-native"

const Dates = () => {
    const days = [
        {
            name : 'Mon',
            active : false
        },
        {
            name : 'Tue',
            active : false
        },
        {
            name : 'Wed',
            active : true
        },
        {
            name : 'Thu',
            active : false
        },
        {
            name : 'Fri',
            active : false
        },
        {
            name : 'Sat',
            active : false
        },
    ]

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <Flex
                gap={40}
                align="center"
            >
                {
                    days.map((item, index : number) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                borderWidth : item.active ? 0.5 : 0,
                                borderColor : theme.colors.text.secondary,
                                borderRadius : 100,
                                paddingVertical : item.active ? 20 : 0,
                                paddingHorizontal : item.active ? 10 : 0,
                                backgroundColor : item.active ? theme.colors.bg.secondary : 'none'
                            }}
                        >
                            <Flex
                                direction="column"
                                align="center"
                                width={'auto'}
                            >
                                <AppTypography
                                    bold={TypographyBold.sm2}
                                >
                                    {index + 1}
                                </AppTypography>
                                <AppTypography
                                    bold={TypographyBold.md}
                                >
                                    {item.name}
                                </AppTypography>
                            </Flex>
                        </TouchableOpacity>
                    ))
                }
            </Flex>
        </ScrollView>
    )
}
export default Dates