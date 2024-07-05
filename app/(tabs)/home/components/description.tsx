import Group from "@/components/settings/group"
import { optionsTypes } from "@/components/settings/option"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Right from "./top/right"
import { router } from "expo-router"

const Description = () => {
    const options : optionsTypes[] = [
        {
            title : 'Running',
            icon :  <FontAwesome5
                name="running"
                color={theme.colors.text.secondary}
                style={{
                    marginTop : 1
                }}
            />,
            onPress : ()=>router.navigate('home/details'),
            right : (
                <Flex
                    width={'auto'}
                    gap={8}
                    align="center"
                >
                    <AppTypography>
                        4,500 km
                    </AppTypography>
                    <Entypo
                        name="chevron-right"
                        color={theme.colors.text.secondary}
                        style={{
                            marginTop : 1
                        }}
                    />
                </Flex>
            )
        }
    ]
    return (
        <Flex
            direction="column"
            gap={20}
        >
            {
                [1,2,].map((item, index : number) => (
                    <Group 
                        key={index}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commod rem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi"
                        options={options}
                    />
                ))
            }
            <Right />
            {
                [1,2,].map((item, index : number) => (
                    <Group 
                        key={index}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commod rem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi"
                        options={options}
                    />
                ))
            }
            <Right />
            {
                [1,2,].map((item, index : number) => (
                    <Group 
                        key={index}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commod rem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi"
                        options={options}
                    />
                ))
            }
        </Flex>
    )
}
export default Description