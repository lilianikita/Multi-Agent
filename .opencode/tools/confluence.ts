Skip to content

Search Gists
Search...
All gists
Back to GitHub
Sign in
Sign up
Instantly share code, notes, and snippets.

@borodicht
borodicht/confluence.ts
Created last month
Code
Revisions
1
Clone this repository at &lt;script src=&quot;https://gist.github.com/borodicht/83164a0e1971d3df1f559dc010b19e0b.js&quot;&gt;&lt;/script&gt;
<script src="https://gist.github.com/borodicht/83164a0e1971d3df1f559dc010b19e0b.js"></script>
confluence.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
    description: "Получить страницу Confluence по pageId",

    args: {
        pageId: tool.schema.string()
    },

    async execute(args) {
        const baseUrl = process.env.CONFLUENCE_URL
        const email = process.env.CONFLUENCE_EMAIL
        const token = process.env.CONFLUENCE_API_TOKEN

        if (!baseUrl || !email || !token) {
            throw new Error("Не заданы переменные окружения Confluence")
        }

        const auth = Buffer.from(`${email}:${token}`).toString("base64")

        const response = await fetch(
            `${baseUrl}/wiki/api/v2/pages/${args.pageId}?body-format=storage`,
            {
                method: "GET",
                headers: {
                    Authorization: `Basic ${auth}`,
                    Accept: "application/json"
                }
            }
        )

        if (!response.ok) {
            throw new Error(
                `Confluence API error: ${response.status} ${response.statusText}`
            )
        }

        const data = await response.json()

        return JSON.stringify(data)
    }
})
 to join this conversation on GitHub. Already have an account? Sign in to comment
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information
