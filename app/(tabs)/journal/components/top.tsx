import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity, View } from "react-native"

const Top = () => {
    return (
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
                    July 3, 2024 at 4:20 AM
                </AppTypography>
                <Flex
                    gap={10}
                    width={'auto'}
                    align="center"
                >
                    <TouchableOpacity>
                        <MaterialCommunityIcons
                            name='delete'
                            color={theme.colors.text.tetiary}
                            size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
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
    )
}
export default Top