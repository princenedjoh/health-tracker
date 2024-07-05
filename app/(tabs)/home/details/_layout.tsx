import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import Right from "./components/right"
import Profile from "@/components/profile/profile"

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown : false
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    title : 'Details',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitle : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><Right />,
                }}
            />
        </Stack>
    )
}

export default Layout