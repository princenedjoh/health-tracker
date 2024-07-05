import theme from "@/styles/theme"
import { hexOpacity } from "@/utils/hexOpacity"
import { Octicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import Profile from "@/components/profile/profile"
import Right from "./components/right"
import ViewJournalRight from "./view journal/components/right"
import EntryRight from "./entry/components/right"

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
                    title : 'Journals',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerShown : true,
                    headerBackVisible : true,
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
                    headerRight : ()=><Right />,
                }}
            />
            <Stack.Screen 
                name="entry"
                options={{
                    title : 'Journal Entry',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitle : true,
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
                name="view journal"
                options={{
                    title : 'View Journal',
                    headerBlurEffect : 'regular',
                    headerTransparent : true,
                    headerLargeTitle : true,
                    headerLargeTitleStyle : {
                        fontSize : 25
                    },
                    headerStyle : {
                      backgroundColor : `${theme.colors.bg.primary}${hexOpacity(50)}`
                    },
                    headerRight : ()=><ViewJournalRight />,
                }}
            />
        </Stack>
    )
}

export default Layout