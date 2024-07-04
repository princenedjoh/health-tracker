import Container from "@/components/container/container"
import Safescroll from "@/components/safeScroll/safescroll"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { sizes } from "@/utils/sizes"
import { View } from "react-native"
import { suggestions } from "./components/suggestions"
import SuggestionCard from "./components/suggestionCard"
import { router } from "expo-router"

const Suggestions = () => {
    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={30}
            >
                <Container>
                    <AppTypography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia,molestiae quas vel sint commodi 
                        repudiandae consequuntur voluptatum laborum
                    </AppTypography>
                </Container>
                <Flex
                    direction="column"
                    gap={15}
                >
                    {
                        suggestions.map((items, index) => (
                            <SuggestionCard 
                                key={index}
                                backgroundColor={items.color}
                                onPress={()=>router.push('journal/entry')}
                            />
                        ))
                    }
                </Flex>
            </Flex>
        </Safescroll>
    )
}
export default Suggestions