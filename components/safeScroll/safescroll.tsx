import Flex from "@/styles/components/flex"
import { ReactNode } from "react"
import { SafeAreaView, ScrollView } from "react-native"

const Safescroll = ({
    children
} : {
    children? : ReactNode
}) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <SafeAreaView>
                <Flex
                    direction="column"
                    paddingVertical={15}
                    paddingHorizontal={15}
                    gap={15}
                >
                    { children }
                </Flex>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Safescroll