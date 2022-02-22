<script>
    let name;
    let email;
    let message = "";
    let error = "";

    const submitForm = async() => {
        try {
        const submit = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name,
                email,
            }),
        });

        const data = await submit.json();
        message = data;
        } catch (err) {
            error = err;
        }
    };
</script>

<body>
    <h1>Hello friend.</h1>
    

    {#if !message && !error}
    <form on:submit|preventDefault={submitForm}>
    <label for="">
        NAME: <input type="text" name="name" bind:value={name} />
    </label>
    <label for="">
        Email:
    <input type="text" name="email" id="" bind:value={email} />
    </label>
    <input type="submit">
    </form>
    {:else if message}
     <p>Hi {message.name}, your submission was successfully submitted</p>
     {:else if error}
     <p>The form submission failed. Contact Joelkrivers@gamilcom</p>
     {/if}
</body>

<style>
    label{
        display: block;margin-bottom: 20px;
    }
</style>