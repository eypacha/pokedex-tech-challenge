import { setup, createPage, url } from '@nuxt/test-utils/e2e'
import { test, expect, describe } from 'vitest'

describe('Router', async () => {

    await setup()

    test('Index Page (/)', async () => {

        const page = await createPage()
        await page.goto(url('/'), { waitUntil: 'hydration' })
        const button = await page.$('button')
        expect(button).toBeDefined()
        const buttonText = button ? await page.evaluate(button => button.textContent, button) : null
        expect(buttonText).toBe('Get started')

    })

    test('List Page (/list)', async () => {

        const page = await createPage()
        await page.goto(url('/list'), { waitUntil: 'hydration' })
        const button = await page.$('button.bg-primary')
        expect(button).toBeDefined()
        const buttonText = button ? await page.evaluate(button => button.textContent, button) : null
        expect(buttonText).toContain('All')

    })

    test('Favorites Page (/favorites)', async () => {

        const page = await createPage()
        await page.goto(url('/favorites'), { waitUntil: 'hydration' })
        const button = await page.$('button.bg-primary')
        expect(button).toBeDefined()
        const buttonText = button ? await page.evaluate(button => button.textContent, button) : null
        expect(buttonText).toContain('Favorites')

    })

    test('404 Error when accessing an invalid page (/invalid-page)', async () => {

        const page = await createPage()
        await page.goto(url('/invalid-route'), { waitUntil: 'hydration' })
        const errorCode = await page.textContent('strong')
        expect(errorCode).toContain('404')

    })


})  