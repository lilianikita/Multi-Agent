import { Plugin } from "@opencode/plugin"

// Порт V1-инструмента .opencode/tools/pii-scanner.ts в плагин OpenCode V2.
//
// В V2 кастомные инструменты из .opencode/tools/ не загружаются,
// инструменты регистрируются плагином через ctx.tool.transform().
// Логика и порядок правил сохранены без изменений:
// EMAIL -> PHONE -> PASSWORD -> TOKEN.
// Формат ответа прежний: { detectedPII, piiFound, maskedText }.

export function scanPii(text: string) {

    let masked = text

    const detected: string[] = []

    // Email
    const emailRegex =
        /[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}/g

    // Телефон
    const phoneRegex =
        /(?:\+?\d[\d\s()-]{8,}\d)/g

    // Пароль
    const passwordRegex =
        /\b(password|пароль)\s*[:=]\s*\S+/gi

    // API Key / Token
    const tokenRegex =
        /\b(api[_-]?key|token)\s*[:=]\s*\S+/gi

    if (emailRegex.test(masked)) {
        detected.push("EMAIL")

        masked = masked.replace(
            emailRegex,
            "[EMAIL_MASKED]"
        )
    }

    if (phoneRegex.test(masked)) {
        detected.push("PHONE")

        masked = masked.replace(
            phoneRegex,
            "[PHONE_MASKED]"
        )
    }

    if (passwordRegex.test(masked)) {
        detected.push("PASSWORD")

        masked = masked.replace(
            passwordRegex,
            "[PASSWORD_MASKED]"
        )
    }

    if (tokenRegex.test(masked)) {
        detected.push("TOKEN")

        masked = masked.replace(
            tokenRegex,
            "[TOKEN_MASKED]"
        )
    }

    return {
        detectedPII: detected,
        piiFound: detected.length > 0,
        maskedText: masked
    }
}


export default Plugin.define({
    id: "pii-scanner",

    async setup(ctx) {

        await ctx.tool.transform((editor) => {

            editor.add({
                name: "pii_scanner",

                description:
                    "Поиск и маскирование PII с помощью Regex: " +
                    "email, телефон, пароль, api-ключ/токен. " +
                    "Возвращает JSON { detectedPII, piiFound, maskedText }.",

                input: {
                    type: "object",
                    properties: {
                        text: {
                            type: "string",
                            description: "Текст, который нужно проверить и замаскировать"
                        }
                    },
                    required: ["text"],
                    additionalProperties: false
                },

                options: {
                    // Инструмент должен быть доступен и в Code Mode.
                    codemode: true
                },

                execute: async (input) => {

                    const { text } =
                        input as { text: string }

                    return {
                        content: JSON.stringify(
                            scanPii(text)
                        )
                    }
                }
            })
        })
    }
})
