import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native"
import { useToast } from "react-native-toast-notifications";
import theme from "../../styles/theme";
import { hexOpacity } from "../../utils/hexOpacity";
import Flex from "../../styles/components/flex";
import AppTypography from "../../styles/components/appTypography";
import Divider from "../divider/divider";
import { TypographyBold } from "../../styles/components/types";

const Confirmation = ({
    isVisible,
    setIsVisible,
    onConfirm,
    onCancel,
    title,
    description
} : {
    isVisible : boolean,
    setIsVisible : React.Dispatch<React.SetStateAction<boolean>>,
    onConfirm? : ()=>void,
    onCancel? : ()=>void
    title? : string
    description? : string
}) => {
    const navigation = useNavigation();
    const toast = useToast()

    const handleCancel = () => {
        setIsVisible(false)
        onCancel && onCancel()
    }
    const handelConfirm = () => {
        setIsVisible(false)
        onConfirm && onConfirm()
    }

    return (
        <Modal
            animationType="fade" 
            transparent={true} 
            visible={isVisible}
            style={{
                backgroundColor : theme.colors.bg.primary
            }}
        >
            <View
                style={{ 
                    width : '100%',
                    height : '100%',
                    backgroundColor: `${theme.colors.bg.primary}${hexOpacity(70)}`, 
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center'
                    }}
            >
                <View 
                    style={{
                        backgroundColor : theme.colors.bg.tetiary,
                        borderRadius : 10,
                        display : 'flex',
                        justifyContent : 'center',
                        maxWidth : 250,
                        width : '100%'
                    }}
                >
                    <Flex
                        paddingHorizontal={30}
                        paddingVertical={30}
                        direction="column"
                    >
                        <Flex
                            justify="center"
                        >
                            <AppTypography
                                bold={TypographyBold.md}
                            >
                                {title ?? 'Confirmation!'}
                            </AppTypography>
                        </Flex>
                        <AppTypography>
                            {description ?? 'Are you sure you want to Logout?'}
                        </AppTypography>
                    </Flex>
                    <Divider
                        size={{
                            height : 1,
                            width : '100%',
                        }}
                        color={theme.colors.text.tetiary}
                    />
                    <Flex>
                        <TouchableOpacity
                            style={{
                                height : 45,
                                width : '100%',
                                display : 'flex',
                                flex :  1,
                            }}
                            onPress={handleCancel}
                        >
                            <Flex
                                justify="center"
                                flex={1}
                                height={'100%'}
                                align="center"
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                >
                                    Cancel
                                </AppTypography>
                            </Flex>
                        </TouchableOpacity>
                        <View
                            style={{
                                width : 1,
                                height : '100%',
                                backgroundColor : theme.colors.text.tetiary
                            }}
                        >

                        </View>
                        <TouchableOpacity
                            style={{
                                height : 40,
                                width : '100%',
                                display : 'flex',
                                flex :  1,
                            }}
                            onPress={handelConfirm}
                        >
                            <Flex
                                justify="center"
                                flex={1}
                                height={'100%'}
                                align="center"
                            >
                                <AppTypography
                                    bold={TypographyBold.md}
                                >
                                    Yes
                                </AppTypography>
                            </Flex>
                        </TouchableOpacity>
                    </Flex>
                </View>
            </View>
        </Modal>
    )
}
export default Confirmation