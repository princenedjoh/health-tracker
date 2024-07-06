import Container from "@/components/container/container"
import Safescroll from "@/components/safeScroll/safescroll"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { FontAwesome5 } from "@expo/vector-icons"
import { TextInput, View } from "react-native"
import DropShadow from "react-native-drop-shadow"
import HoverShadowContainer from "./components/shadow"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "@/context/dataContext"
import { storeJournalsDraft } from "@/context/asyncStorage"

const Entry = () => {
    const [content, setContent] = useState<string>()
    const {journals} = useContext(DataContext)
    const journal = {
        content,
        date : new Date()
    }
    const definedJournals = journal.content
    const setJournals = async () => {
        let allJournals = undefined
        if(journals && Array.isArray(journals) && definedJournals){
            allJournals = [...journals, journal]
        } else if(definedJournals){
            allJournals = [journal]
        }
        if(allJournals)
            await storeJournalsDraft(JSON.stringify(allJournals))
    }

    useEffect(()=>{
        setJournals()
    },[content])
    return (
        <Safescroll>
            <Flex
                direction="column"
                gap={30}
                align="center"
            >
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                >
                    July 3, 2024 at 4:20 AM
                </AppTypography>
                <Container
                    style={{
                        padding : 10,
                        minHeight : 300,
                        borderRadius : 20,
                    }}
                >
                    <HoverShadowContainer />
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Write something here..."
                        style={{
                            width : '100%',
                            padding : 10,
                            color : theme.colors.text.secondary,
                            display : 'flex',
                            flex : 1
                        }}
                        value={content}
                        onChangeText={setContent}
                    />
                </Container>
            </Flex>
        </Safescroll>
    )
}
export default Entry