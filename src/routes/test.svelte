<body>
    <container>
        <h2>contact</h2>
        <form>
            <wrapper>
                <box>
                    <input type="text" name="fname" id="fname" required>
                    <label for="fname">First and Last Name</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="email" id="email" required>
                    <label for="email">Email</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="tel" id="tel" required>
                    <label for="tel">Telephone</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="comp" id="comp" required>
                    <label for="tel">Company Name</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="sta" id="sta" required>
                    <label for="tel">State</label>
                </box>
            </wrapper>

            
            <!--
            <div class="section1">
            <wrapper>
                <box>
                    <div class="flex-row">
                    <input type="checkbox" name="check1" id="chk" required>
                    <label for="chk">option</label>
                    </div>
                </box>
                <box>
                    <div class="flex-row">
                    <input type="checkbox" name="check1" id="chk" required>
                    <label for="chk">option2</label>
                    </div>
                </box>
                <box>
                    <div class="flex-row">
                    <input type="checkbox" name="check1" id="chk" required>
                    <label for="chk">option3</label>
                    </div>
                </box>
                <box>
                    <div class="flex-row">
                    <input type="checkbox" name="check1" id="chk" required>
                    <label for="chk">option4</label>
                    </div>
                </box>
            </wrapper>
            </div>
        -->
            <wrapper>
                <box>
                    <textarea id="mes" required></textarea>
                    <label for="mes">Words here and stuff...</label>
                </box>
            </wrapper>
            <br><br><br><br>

            <input type="submit" name="" value="sedn">
        </form>
    </container>

    
</body>


<style lang="scss">

    @import 'components';
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height:100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    container{
        width: 80%;
        padding:20px;
        background: rgb(87, 4, 155);

        h2{
        color: #fff;
        font-size: 3vw;
        text-align: center;
        margin-bottom:30px;
    }

    form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }

    wrapper{
        width: 100%;
        display: grid;
        grid-gap:30px;
        gap:30px;
    }

    box{
        width: 100%;
        position: relative;
        padding: 20px;
    }

    input,
    textarea{
        width: 100%;
        font-size: 2vw;
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #000;
        transition:0.3s linear;
    }

    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid{
        padding: 10px;
        background: rgb(232, 236, 8);
        margin: 10px;
    }

    label{
        position: absolute;
        top: 0;
        left: 0;
        color: #fff;
        font-size: 2vw;
        font-weight: bold;
        padding: 20px;
        transition: 0.3s linear;
    }

    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label,
    textarea:valid ~ label{
        padding: 0;
    }

    .section1{
        input{
            accent-color: hotpink;
            block-size: 45px;
            inline-size:18px;
        }

        input:focus,
        input:valid,
        textarea:focus,
        textarea:valid{
        padding: 0.5px;
        margin: 0.5px;
    }
    }

    .flex-row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        label {
            padding: 0 10px;
        }
    }
    }
</style>