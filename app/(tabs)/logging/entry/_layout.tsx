import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import Profile from "@/components/profile/profile"
import Right from "./components/right"

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                presentation : 'formSheet'
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    title : 'Log Entry',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    presentation : 'formSheet',
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(30)}`
                    },
                    headerRight : ()=><Right />,
                }}
            />
        </Stack>
    )
}

export default Layout