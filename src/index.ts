export const handler = async (event: { name: string }) => {
    const result = event.name ? `Welcome Back ${event.name}` : 'invalid credentials';
    return result
}