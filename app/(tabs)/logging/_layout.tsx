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
                headerShown : false,
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    title : 'Logs',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitle : true,
                    headerShown : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><Right />,
                }}
            />
            <Stack.Screen 
                name="entry"
                options={{
                    title : 'Logging',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    presentation : 'formSheet',
                    headerLargeTitle : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><Right />,
                    headerLeft : ()=><Profile size={30}/>
                }}
            />
        </Stack>
    )
}

export default Layout