import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState, SyntheticEvent } from "react"

export function AccordionFunctionality() {
    // Use this with handleExpandAll
    const [expandedAll, setExpandedAll] = useState<string[]>([])

    //Use this with handleExpandOne
    const [expandedOne, setExpandedOne] = useState<string | false>(false)

    const questions = [
        { question: "Question 1", answer: "Answer 1" },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
    ]

    const handleExpandAll = (question: string) => {
        let newExpanded = [...expandedAll]

        //Is the expansion panel already open?
        if (expandedAll.includes(question)) {
            newExpanded = newExpanded.filter((expandedQuestion) => expandedQuestion !== question)
        } else {
            //Otherwise, then the panel must not be open
            newExpanded.push(question)
        }

        setExpandedAll(newExpanded)
    }

    const handleExpandOne = (question: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
        setExpandedOne(isExpanded ? question : false)
    }

    return (
        <div>
            {questions.map(({ question, answer }) => (
                <Accordion
                    disabled={question === "Question 1"}
                    key={question}
                    disableGutters
                    square
                    //Use these with handleExpandAll
                    // expanded={expandedAll.includes(question)}
                    // onChange={() => handleExpandAll(question)}

                    //Use these with handleExpandOne
                    expanded={expandedOne === question}
                    onChange={handleExpandOne(question)}
                    TransitionProps={{ unmountOnExit: true }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{question}</AccordionSummary>
                    <AccordionDetails>
                        <Typography align="left" variant="h5">
                            {answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}
