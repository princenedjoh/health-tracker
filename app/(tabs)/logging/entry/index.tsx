import Safescroll from "@/components/safeScroll/safescroll"
import Duration from "./components/duration"
import theme from "@/styles/theme"
import Flex from "@/styles/components/flex"
import Intensity from "./components/intensity"
import AppTypography from "@/styles/components/appTypography"
import Distance from "./components/distance"
import Speed from "./components/speed"
import Reps from "./components/reps"
import Notes from "./components/notes"
import { useContext, useEffect, useState } from "react"
import { removeLogs, removeLogsDraft, storeLogsDraft } from "@/context/asyncStorage"
import { DataContext } from "@/context/dataContext"

const LogEntry = () => {
    const {logs} = useContext(DataContext)
    const [duration, setDuration] = useState<string>()
    const [intensity, setIntensity] = useState<string>()
    const [distance, setDistance] = useState<string>()
    const [speed, setSpeed] = useState<string>()
    const [reps, setReps] = useState<string>()
    const [notes, setNotes] = useState<string>()
    const log = {
        duration,
        intensity,
        distance,
        speed,
        reps,
        notes
    }
    const definedLogs = log.duration || log.distance || log.intensity || log.notes || log.reps || log.speed
    const setLogs = () => {
        let allLogs = undefined
        if(logs && Array.isArray(logs) && definedLogs){
            allLogs = [...logs, log]
        } else if(definedLogs){
            allLogs = [log]
        }
        if(allLogs)
            storeLogsDraft(JSON.stringify(allLogs))
    }

    useEffect(()=>{
        setLogs()
    },[
        duration,
        intensity,
        distance,
        speed,
        reps,
        notes
    ])
    return (
        <Safescroll
            scrollStyle={{
                backgroundColor : theme.colors.bg.secondary,
                paddingTop : 60
            }}
        >
            <Flex
                height={'100%'}
                direction="column"
                gap={20}
                align="center"
            >
                <AppTypography
                    textColor={theme.colors.text.tetiary}
                >
                    {new Date().toDateString()}
                </AppTypography>
                <Duration value={duration} setValue={setDuration}/>
                <Intensity value={intensity} setValue={setIntensity}/>
                <Distance value={distance} setValue={setDistance}/>
                <Speed value={speed} setValue={setSpeed}/>
                <Reps value={reps} setValue={setReps}/>
                <Notes value={notes} setValue={setNotes}/>
            </Flex>
        </Safescroll>
    )
}
export default LogEntry