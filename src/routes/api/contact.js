export const post = async ({ request }) => {
    const body = await request.formData();
    
    const name = body.get('name');
    const email = body.get('email');
    const password = body.get('password');

    return {
        body: {
            name,
            email,
        },
    };
};