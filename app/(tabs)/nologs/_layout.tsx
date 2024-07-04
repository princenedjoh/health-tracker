import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { router, Stack } from "expo-router"
import Profile from "@/components/profile/profile"
import Right from "../home/components/right"
import Button from "@/components/button/button"

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index"
                options={{
                    title : 'No Logs',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><Button onPress={()=>router.push('logging/suggestions')}>New Entry +</Button>,
                }}
            />
        </Stack>
    )
}

export default Layout