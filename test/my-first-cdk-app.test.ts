import { handler } from "../src"

describe('My First CDK App Test',  () => {
    it('returns name and text', async () => {
        const output = await handler({ name: 'David'})
        expect(output).toStrictEqual('Welcome back David')
    })

    it('returns no name and text', async () => {
        const output = await handler({ name: ''})
        expect(output).toStrictEqual('invalid credentials')
    })
})