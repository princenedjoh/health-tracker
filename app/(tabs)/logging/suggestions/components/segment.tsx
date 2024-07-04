import Container from "@/components/container/container"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import { TypographyBold } from "@/styles/components/types"
import theme from "@/styles/theme"
import { FontAwesome5 } from "@expo/vector-icons"
import LogContainer from "./logContainer"
import { hexOpacity } from "@/utils/hexOpacity"

const Segment = () => {
    return (
        <Flex
            gap={20}
            direction='column'
        >
            <Container>
            <Flex
                gap={20}
                direction='column'
            >
                <Flex
                    align="center"
                    width={'auto'}
                >
                    <FontAwesome5
                        name="running"
                        color={theme.colors.text.secondary}
                        style={{
                            marginTop : 1
                        }}
                    />
                    <AppTypography
                        bold={TypographyBold.md}
                    >
                        Execises
                    </AppTypography>
                </Flex>
                <AppTypography>
                molestiae quas vel sint commodi repudiandae 
                consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed 
                fugiat iusto fuga praesentium
                </AppTypography>
            </Flex>
            </Container>
            <LogContainer />
            <Flex
            height={220}
            >
            <LogContainer 
                gap={10}
                color={`#472a28${hexOpacity(100)}`}
            />
            <LogContainer 
                gap={10}
                color={`#081F0E${hexOpacity(100)}`}
            />
            </Flex>
        </Flex>
    )
}
export default Segment