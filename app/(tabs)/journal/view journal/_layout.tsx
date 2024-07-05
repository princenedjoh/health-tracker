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
                headerShown : false
            }}
        >

        </Stack>
    )
}

export default Layout