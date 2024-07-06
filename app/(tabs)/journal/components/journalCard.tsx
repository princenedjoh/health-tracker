import Container from "@/components/container/container"
import AppTypography from "@/styles/components/appTypography"
import { TouchableOpacity, View } from 'react-native';
import theme from '@/styles/theme';
import { TypographyBold } from '../../../../styles/components/types';
import Flex from "@/styles/components/flex";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Top from "./top";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect } from "react";

const JournalCard = ({
    data,
    index
} : {
    data : any,
    index : number
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={()=>router.navigate('journal/view journal')}
        >
            <Container
                style={{
                    padding : 0,
                    height : 200,
                    position : 'relative',
                    overflow : 'hidden',
                }}
            >
                <LinearGradient
                    colors={[`transparent`, `${theme.colors.bg.secondary}`]}
                    style={{
                        width : '100%',
                        height : '100%',
                        position : 'absolute',
                        top : 0,
                        zIndex : 1
                    }}
                >

                </LinearGradient>
                <Top 
                    date={data.date}
                    index={index}
                />
                <Flex
                    paddingHorizontal={10}
                    paddingVertical={10}
                >
                    <AppTypography
                        lineHeight={22}
                        textColor={theme.colors.text.primary}
                    >
                        {data.content}
                    </AppTypography>
                </Flex>
                <TouchableOpacity
                    style={{
                        position : 'absolute',
                        bottom : 10,
                        left : 10,
                        zIndex : 1
                    }}
                    onPress={()=>router.navigate('journal/view journal')}
                >
                    <AppTypography
                        textColor={theme.colors.text.primary}
                        bold={TypographyBold.md}
                    >
                        See more...
                    </AppTypography>
                </TouchableOpacity>
            </Container>
        </TouchableOpacity>
    )
}
export default JournalCard