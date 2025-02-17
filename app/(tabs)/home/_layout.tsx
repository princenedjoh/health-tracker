import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import Right from "./components/right"
import Profile from "@/components/profile/profile"
import DetailsRight from "./details/components/headerRight"

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown : true
            }}
        >
            <Stack.Screen 
                name="index"
                options={{
                    title : 'Tracking',
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
                    headerLeft : ()=><Profile size={30}/>
                }}
            />
            <Stack.Screen 
                name="details"
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
                    headerRight : ()=><DetailsRight />,
                }}
            />
        </Stack>
    )
}

export default Layout