import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import Profile from "@/components/profile/profile"
import Right from "./components/right"
import EntryRight from "./entry/components/right"
import SuggestionsRight from "./suggestions/components/right"
import ViewLogRight from "./view log/components/right"

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown : true,
                headerLargeTitle : true,
                headerLargeTitleStyle : {
                    fontSize : 25
                },
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
                    headerShown : true,
                    headerLargeTitle : false,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><EntryRight />,
                }}
            />
            <Stack.Screen 
                name="suggestions"
                options={{
                    title : 'Suggestions',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitle : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><SuggestionsRight />,
                }}
            />
            <Stack.Screen 
                name="view log"
                options={{
                    title : 'Log',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    presentation : 'formSheet',
                    headerShown : true,
                    headerLargeTitle : false,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><ViewLogRight />,
                }}
            />
        </Stack>
    )
}

export default Layout