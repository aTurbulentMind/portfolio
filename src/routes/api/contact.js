export const post = async ({ request }) => {
    const body = await request.formData();  
    const name = body.get("name");
    const email = body.get("email");

    return {
        body: {
            name,
            email,
        },
    };
};