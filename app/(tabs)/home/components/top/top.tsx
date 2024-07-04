import Flex from "@/styles/components/flex";
import Left from "./left";
import Right from "./right";

const Top = () => {
    return (
        <Flex
            gap={10}
        >
            <Left />
            <Flex
                width={'auto'}
                direction="column"
                flex={1}
                gap={10}
            >
                <Right />
                <Right />
            </Flex>
        </Flex>
    )
}
export default Top