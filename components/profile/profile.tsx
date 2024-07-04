import { NavigationProp } from "@react-navigation/native"
import { DimensionValue, Image, TouchableOpacity } from "react-native"
import theme from "@/styles/theme"
import { images } from "@/assets/dev"

const Profile = ({
    navigation,
    size
} : {
    navigation? : NavigationProp<any>
    size? : DimensionValue
}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor : theme.colors.bg.tetiary,
                borderRadius : 100
            }}
        >
            <Image
                style={{
                    borderRadius : 100,
                    width : size ?? 35,
                    height : size ?? 35
                }}
                source={images.profile}
            ></Image>
        </TouchableOpacity>
    )
}
export default Profile