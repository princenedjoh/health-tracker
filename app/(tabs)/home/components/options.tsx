import { optionsTypes } from "@/components/settings/option"
import AppTypography from "@/styles/components/appTypography";
import Flex from "@/styles/components/flex";
import theme from "@/styles/theme";
import { Entypo, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { router } from "expo-router";

export const options : optionsTypes[] = [
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

export const options1 : optionsTypes[] = [
    {
        title : 'Cycling',
        icon :  <FontAwesome6
            name="person-biking"
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

export const option2 : optionsTypes[] = [
    {
        title : 'Swimming',
        icon :  <FontAwesome6
            name="person-swimming"
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

export const option3 : optionsTypes[] = [
    {
        title : 'Hiking',
        icon :  <FontAwesome6
            name="person-hiking"
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

export const option4 : optionsTypes[] = [
    {
        title : 'Aerobics',
        icon :  <FontAwesome6
            name="person-cane"
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

export const option5 : optionsTypes[] = [
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