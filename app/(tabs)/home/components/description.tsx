import Group from "@/components/settings/group"
import { optionsTypes } from "@/components/settings/option"
import AppTypography from "@/styles/components/appTypography"
import Flex from "@/styles/components/flex"
import theme from "@/styles/theme"
import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import Right from "./top/right"
import { router } from "expo-router"
import { option2, option3, option4, option5, options, options1 } from "./options"

const Description = () => {
    
    return (
        <Flex
            direction="column"
            gap={20}
        >
            <Group
                description="Hiking combines walking with the challenge of varying terrain and elevation, providing an excellent cardiovascular workout. It strengthens the lower body muscles, including the quadriceps, hamstrings, glutes, and calves. Hiking also improves balance and coordination as it requires navigating uneven surfaces. The activity burns a significant number of calories and can help in weight management. Hiking in natural environments can reduce stress, improve mood, and enhance mental well-being by connecting with nature."
                options={option3}
                numberOfLinesOnDescription={4}
            />
            <Group
                description="Aerobics involves rhythmic, continuous movement to music, providing a fun and effective cardiovascular workout. Aerobic classes can include various styles such as step aerobics, dance aerobics, or water aerobics. The activity improves cardiovascular endurance, coordination, and overall fitness. Aerobics strengthens the muscles in the legs, arms, and core, and helps in burning calories and managing weight. The group class setting promotes social interaction and motivation. The upbeat music and choreographed routines make aerobics enjoyable and engaging."
                options={option4}
                numberOfLinesOnDescription={4}
            />
            <Right />
            <Group 
                description="Cycling is a low-impact exercise that can be performed outdoors on a bicycle or indoors on a stationary bike. It enhances cardiovascular fitness by improving heart and lung function. Cycling strengthens the muscles in the legs, hips, and glutes, and can also help in burning calories and managing weight. It is gentle on the joints, making it suitable for individuals with joint issues or those recovering from injuries. Additionally, cycling can improve balance and coordination."
                options={options1}
                numberOfLinesOnDescription={4}
            />
            <Group 
                description="Swimming is a full-body workout that involves moving through water using various strokes, such as freestyle, backstroke, breaststroke, and butterfly. It is easy on the joints due to the buoyancy of water, making it ideal for individuals with arthritis or joint pain. Swimming improves cardiovascular fitness, muscle strength, and flexibility. It engages multiple muscle groups simultaneously, leading to a high calorie burn and enhanced muscle tone. Swimming also promotes relaxation and reduces stress."
                options={option2}
                numberOfLinesOnDescription={4}
            />
            <Right />
            <Group 
                description="Hiking combines walking with the challenge of varying terrain and elevation, providing an excellent cardiovascular workout. It strengthens the lower body muscles, including the quadriceps, hamstrings, glutes, and calves. Hiking also improves balance and coordination as it requires navigating uneven surfaces. The activity burns a significant number of calories and can help in weight management. Hiking in natural environments can reduce stress, improve mood, and enhance mental well-being by connecting with nature."
                options={option3}
                numberOfLinesOnDescription={4}
            />
            <Group 
                description="Running is a high-impact aerobic exercise that involves continuous, rhythmic movement of the legs. It strengthens the heart and lungs, improving overall cardiovascular health and endurance. Running burns a high number of calories, aiding in weight loss and weight management. It also helps in building and toning muscles, particularly in the lower body, and can enhance mental health by reducing anxiety and depression through the release of endorphins."
                options={options}
                numberOfLinesOnDescription={4}
            />
        </Flex>
    )
}
export default Description