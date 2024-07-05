import Group from "@/components/settings/group"
import { optionsTypes } from "@/components/settings/option"
import AppTypography from "@/styles/components/appTypography"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { FontAwesome } from "@expo/vector-icons"
import { View } from "react-native"

const Average = () => {
    const options : optionsTypes[] = [
        {
            title : 'Average Heart Beat',
            icon : (
                <View
                    style={{
                        width : 'auto',
                        marginRight : 10,
                        backgroundColor : theme.colors.bg.tetiary,
                        padding : 10,
                        borderRadius : 6
                    }}
                >
                    <FontAwesome
                        name='heartbeat'
                        color={theme.colors.text.secondary}
                        size={18}
                    />
                </View>
            ),
            right : (
                <View
                    style={{
                        width : 'auto',
                        backgroundColor : theme.colors.bg.tetiary,
                        padding : 10,
                        borderRadius : 6
                    }}
                >
                    <AppTypography
                        bold={TypographyBold.md}
                    >
                        -20%
                    </AppTypography>
                </View>
            ),
            
        }
    ]

    return (
        <Group
            options={options}
            paddingLeft={10}
            paddingHorizontal={10}
            paddingVertical={9}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
Maxime mollitia,molestiae quas vel sint commodi 
repudiandae consequuntur voluptatum laborum"
            style={{
                borderRadius : 13
            }}
        />
    )
}
export default Average