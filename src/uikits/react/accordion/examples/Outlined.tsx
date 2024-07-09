import Accordion from "../Accordion";
import items from "./items";

export const Outlined = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
            variant="outlined"
            className="max-w-md w-full"
        >
            {
                items.map((item) => (
                    <Accordion.Item value={item.question} key={items.indexOf(item)}>
                        <Accordion.Trigger>
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))
            }
            
        </Accordion.Root>
    )
}

const code = `import Accordion from "tailus-ui/Accordion";

const items = [
    ... your questions and answers here
]

export const Outlined = () => {
    return (
        <Accordion.Root
            type="single"
            collapsible
            variant="outlined"
            className="max-w-md w-full"
        >
            {
                items.map((item) => (
                    <Accordion.Item value={item.question} key={items.indexOf(item)}>
                        <Accordion.Trigger>
                            {item.question}
                        </Accordion.Trigger>
                        <Accordion.Content>
                            {item.answer}
                        </Accordion.Content>
                    </Accordion.Item>
                ))
            }
            
        </Accordion.Root>
    )
}`

export const OutlinedCode = [{
    code: code,
    lang: "tsx",
    file: "jsx",
    filename:"OutlinedAccordion.tsx"
}]