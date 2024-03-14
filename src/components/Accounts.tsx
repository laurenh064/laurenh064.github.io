import { For } from "solid-js"

const accounts: {
  site: string
  color: string
  url: string
}[] = [
    {
      site: "LinkedIn",
      color: "bg-blue-400",
      url: "https://linkedin.com/in/lauren-a-hartley"
    },
    {
      site: "GitHub",
      color: "bg-gray-400",
      url: "https://github.com/laurenh064"
    },
  ]

const Accounts = () => {
  return (
    <>
      <div class="">
        <For each={accounts}>
          {(badge) => (
            <a href={badge.url} target="_blank">
              <div class="mb-2 py-2 px-3 rounded-xl bg-opacity-70 bg-theme backdrop-blur-sm" classList={{ [badge.color]: true }}>
                {badge.site}
              </div>
            </a>
          )}
        </For>
      </div>
    </>
  )
}

export default Accounts