import { For } from "solid-js"

const infoBadges: {
    title: string
    ans: string
    url?: string
}[] = [
        {
            title: "Age",
            ans: "22",
        },
        {
            title: "Location",
            ans: "Loudoun, VA"
        },
        {
            title: "Alma Mater",
            ans: "JMU",
            url: "https://www.jmu.edu/about/index.shtml",
        },
        {
            title: "Degree",
            ans: "CompSci"
        }
    ]

const About = () => {
    return (
        <>
            <div class="flex flex-wrap justify-between w-full pb-1">
                <For each={infoBadges}>
                    {(badge) => (
                        <div class="text-raisin-dark text-sm mb-2 rounded-xl bg-opacity-60 bg-sun backdrop-blur-sm flex flex-row overflow-hidden">
                            <div class="bg-sun py-2 px-3">
                                {badge.title}
                            </div>
                            <div class="py-2 px-3">
                                {badge.ans}
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </>
    )
}

export default About