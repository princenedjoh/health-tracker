import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { TouchableOpacity, View } from "react-native"

const LogHistoryCard = ({
    color
} : {
    color? : string
}) => {
    const tasks = [
        {
            name : 'Duration',
            body : '30 minutes'
        },
        {
            name : 'Speed',
            body : '200 m/s'
        },
        {
            name : 'Note',
            body : 'molestiae quas vel sint consequun atum numquam blanditiis harum fugiat iusto'
        },
    ]
    return (
        <TouchableOpacity>
            <Flex
                direction='column'
                gap={10}
            >
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                    bold={TypographyBold.md}
                >
                    9:00 AM
                </AppTypography>
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
                            tasks.map((item, index : number) => (
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
    )
}
export default LogHistoryCard