import Flex from "@/styles/components/flex"
import { ReactNode } from "react"
import { ScrollView, StyleProp, ViewStyle } from "react-native"

const Safescroll = ({
    children,
    scrollStyle
} : {
    children? : ReactNode,
    scrollStyle? : StyleProp<ViewStyle>
}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={[
                {
                    paddingTop : 150,
                },
                scrollStyle
            ]}
        >
            <Flex
                direction="column"
                paddingVertical={15}
                paddingBottom={180}
                paddingHorizontal={10}
                gap={15}
            >
                { children }
            </Flex>
        </ScrollView>
    )
}

export default Safescroll