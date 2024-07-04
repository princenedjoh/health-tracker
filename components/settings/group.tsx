import { StyleProp, View, ViewStyle } from "react-native"
import theme from "../../styles/theme"
import { ReactNode, useState } from "react"
import Flex from "../../styles/components/flex"
import AppTypography from "../../styles/components/appTypography"
import { TypographyBold } from "../../styles/components/types"
import { sizes } from "../../utils/sizes"
import Divider from "../divider/divider"
import Option, { optionsTypes } from "./option"

const Group = ({
    style,
    children,
    options,
    title,
    description,
} : {
    style? : StyleProp<ViewStyle>,
    options? : optionsTypes[],
    children? : ReactNode,
    title? : string,
    description? : string,
}) => {
    const [ioptions, setOptions] = useState([1,2,3])

    return (
        <Flex
            direction="column"
        >
            {
                title &&
                <Flex
                    paddingLeft={10}
                >
                    <AppTypography
                        bold={TypographyBold.sm2}
                        textColor={theme.colors.text.tetiary}
                    >
                        {title}
                    </AppTypography>
                </Flex>
            }
            <View
                style={{
                    ...{
                        width : '100%',
                        borderRadius : 10,
                        backgroundColor : theme.colors.bg.secondary,
                    },
                    ...(style as object || {}),
                }}
            >
                <Flex
                    direction="column"
                    gap={0}
                >
                    {
                        options?.map((item, index : number) => (
                            <Flex
                                direction="column"
                                gap={0}
                                key={index}
                            >
                                <Flex
                                    paddingHorizontal={sizes.marginSM}
                                    paddingLeft={sizes.marginSM + 5}
                                >
                                    <Option
                                        {...item}
                                    />
                                </Flex>
                                {
                                    index < options.length - 1 &&
                                    <Flex
                                        paddingLeft={sizes.marginSM}
                                    >
                                        <Divider />
                                    </Flex>
                                }
                            </Flex>
                        ))
                    }
                </Flex>
                {children}
            </View>
            {
                description &&
                <Flex
                    paddingLeft={10}
                >
                    <AppTypography
                        bold={TypographyBold.sm2}
                        textColor={theme.colors.text.tetiary}
                    >
                        {description}
                    </AppTypography>
                </Flex>
            }
        </Flex>
    )
}
export default Group