import Container from "@/components/container/container"
import AppTypography from "@/styles/components/appTypography"
import { TouchableOpacity, View } from 'react-native';
import theme from '@/styles/theme';
import { TypographyBold } from '../../../../styles/components/types';
import Flex from "@/styles/components/flex";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Top from "./top";
import { LinearGradient } from "expo-linear-gradient";

const JournalCard = () => {
    return (
        <Container
            style={{
                padding : 0,
                height : 200,
                position : 'relative',
                overflow : 'hidden'
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
            <Top />
            <Flex
                paddingHorizontal={10}
                paddingVertical={10}
            >
                <AppTypography
                    lineHeight={22}
                    textColor={theme.colors.text.primary}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia,molestiae quas vel sint commodi 
                    repudiandae consequuntur voluptatum laborum
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia,molestiae quas vel sint commodi 
                    repudiandae consequuntur voluptatum laborum
                </AppTypography>
            </Flex>
            <TouchableOpacity
                style={{
                    position : 'absolute',
                    bottom : 10,
                    left : 10,
                    zIndex : 1
                }}
            >
                <AppTypography
                    textColor={theme.colors.text.primary}
                    bold={TypographyBold.md}
                >
                    See more...
                </AppTypography>
            </TouchableOpacity>
        </Container>
    )
}
export default JournalCard